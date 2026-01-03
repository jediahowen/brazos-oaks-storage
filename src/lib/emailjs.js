/**
 * EmailJS configuration and helper functions
 * 
 * To set up EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Get your Public Key, Service ID, and Template ID
 * 5. Add them to .env.local as:
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 */

export const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
};

export function isEmailJSConfigured() {
  return !!(
    emailjsConfig.publicKey &&
    emailjsConfig.serviceId &&
    emailjsConfig.templateId
  );
}

