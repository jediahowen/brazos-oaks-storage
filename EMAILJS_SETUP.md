# EmailJS Setup Guide

The contact form uses EmailJS to send emails directly from the client. Follow these steps to configure it.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save your Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from Brazos Oaks Storage

**Content:**
```
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Unit Size Interest: {{unit_size}}

Message:
{{message}}

---
This email was sent from the Brazos Oaks Storage website contact form.
```

4. **Save your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Add Environment Variables

Create a `.env.local` file in the project root (if it doesn't exist) and add:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual:
- **Public Key** from Step 4
- **Service ID** from Step 2
- **Template ID** from Step 3

## Step 6: Restart Development Server

After adding environment variables:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your site
2. Submit it
3. Check your email inbox for the form submission

## Template Variables

The form sends these variables to EmailJS:
- `from_name` - User's name
- `from_email` - User's email
- `phone` - User's phone (or "Not provided")
- `unit_size` - Selected unit size (or "Not specified")
- `message` - User's message
- `to_email` - Set to "info@brazosoaksstorage.com" (you can change this in the code)

## Troubleshooting

**Form shows error message:**
- Check that all three environment variables are set correctly
- Verify your EmailJS service is active
- Check browser console for detailed error messages

**Emails not received:**
- Check spam folder
- Verify email service is properly connected in EmailJS
- Check EmailJS dashboard for delivery status

**"Email service is not configured" error:**
- Make sure `.env.local` file exists in project root
- Verify all three environment variables start with `NEXT_PUBLIC_`
- Restart the development server after adding variables

## Production Deployment

For production (Bluehost static hosting):
- Environment variables need to be set during build time
- Add the variables to your build environment or CI/CD pipeline
- Or use EmailJS's domain restrictions feature for security

## Security Notes

- The Public Key is safe to expose in client-side code
- EmailJS handles rate limiting on their end
- Consider setting up domain restrictions in EmailJS dashboard for production

