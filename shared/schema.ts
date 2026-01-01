import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  unitSize: text("unit_size"),
  message: text("message").notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export const unitSizes = [
  {
    id: "5x5",
    dimensions: "5' × 5'",
    sqft: "25 sq ft",
    description: "Closet-sized",
    whatFits: [
      "Small furniture items",
      "Boxes and seasonal items",
      "Sports equipment",
      "Holiday decorations",
    ],
    startingPrice: 45,
  },
  {
    id: "5x10",
    dimensions: "5' × 10'",
    sqft: "50 sq ft",
    description: "Walk-in closet",
    whatFits: [
      "One-bedroom apartment contents",
      "Mattress set",
      "Dresser and small furniture",
      "Multiple boxes and bins",
    ],
    startingPrice: 65,
  },
  {
    id: "10x10",
    dimensions: "10' × 10'",
    sqft: "100 sq ft",
    description: "Half garage",
    whatFits: [
      "Two-bedroom apartment contents",
      "Living room furniture",
      "Major appliances",
      "Seasonal recreational gear",
    ],
    startingPrice: 99,
  },
  {
    id: "10x15",
    dimensions: "10' × 15'",
    sqft: "150 sq ft",
    description: "Large room",
    whatFits: [
      "Three-bedroom home contents",
      "Full living room set",
      "Multiple large items",
      "Business inventory",
    ],
    startingPrice: 135,
  },
  {
    id: "10x20",
    dimensions: "10' × 20'",
    sqft: "200 sq ft",
    description: "One-car garage",
    whatFits: [
      "Four+ bedroom home contents",
      "Vehicles (cars, boats, ATVs)",
      "Large furniture collections",
      "Commercial storage needs",
    ],
    startingPrice: 175,
  },
] as const;

export type UnitSize = typeof unitSizes[number];

export const faqItems = [
  {
    question: "What are your office hours?",
    answer: "Our office is open Monday through Friday from 9 AM to 6 PM, and Saturday from 9 AM to 4 PM. We are closed on Sundays. However, our facility offers 24/7 access to all tenants with a valid gate code.",
  },
  {
    question: "How do I access my storage unit?",
    answer: "Once you rent a unit, you'll receive a unique gate code for 24/7 access to the facility. Simply enter your code at the keypad, drive to your unit, and use your personal lock to access your belongings.",
  },
  {
    question: "Do you provide locks?",
    answer: "We recommend using a high-quality disc lock for maximum security. Disc locks are available for purchase at our office, or you can bring your own. Standard padlocks are also accepted but disc locks provide better protection.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, cash, and checks. We also offer convenient autopay options for hassle-free monthly payments.",
  },
  {
    question: "Is there a minimum rental period?",
    answer: "No! We offer flexible month-to-month rentals with no long-term commitments required. You can cancel at any time with a 10-day notice before your next billing date.",
  },
  {
    question: "What can I store in my unit?",
    answer: "You can store most household and business items including furniture, appliances, boxes, clothing, seasonal decorations, and recreational equipment. Prohibited items include hazardous materials, flammable liquids, perishable food, live animals, and illegal items.",
  },
  {
    question: "Do you have climate-controlled units?",
    answer: "Currently, we offer standard drive-up units that are well-ventilated and protected from the elements. These units work well for most storage needs in our Central Texas climate.",
  },
  {
    question: "Is the facility secure?",
    answer: "Yes! Security is our top priority. Our facility features perimeter fencing, electronic gate access with individual codes, 24-hour video surveillance, and bright lighting throughout the property.",
  },
] as const;

export type FaqItem = typeof faqItems[number];

export const features = [
  {
    id: "access",
    title: "24/7 Access",
    description: "Access your belongings anytime with your personal gate code. Day or night, your unit is always accessible.",
    icon: "Clock",
  },
  {
    id: "security",
    title: "Security Cameras",
    description: "Round-the-clock video surveillance keeps a watchful eye on the entire facility for your peace of mind.",
    icon: "Camera",
  },
  {
    id: "clean",
    title: "Clean Units",
    description: "Our units are professionally maintained and cleaned before each new tenant moves in.",
    icon: "Sparkles",
  },
  {
    id: "monthly",
    title: "Month-to-Month",
    description: "No long-term contracts required. Rent for as long as you need with flexible monthly terms.",
    icon: "Calendar",
  },
  {
    id: "driveways",
    title: "Wide Driveways",
    description: "Easy access for trucks and trailers with our spacious, well-maintained driveways.",
    icon: "Truck",
  },
  {
    id: "location",
    title: "Convenient Location",
    description: "Located just minutes from downtown Waco with easy access from I-35.",
    icon: "MapPin",
  },
] as const;

export type Feature = typeof features[number];
