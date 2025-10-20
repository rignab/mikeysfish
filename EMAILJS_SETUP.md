# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)
service id: service_t1r8uqf

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Order from {{customerName}}

**Content:**
```
New Order Received!

Customer Details:
- Name: {{customerName}}
- Phone: {{customerPhone}}
- Email: {{customerEmail}}

Pickup Details:
- Date: {{pickupDate}}
- Time: {{pickupTime}}

Order Summary:
{{orderDetails}}

Total Amount: ${{totalAmount}}
Number of Items: {{orderCount}}

---
This order was placed through Mikey's Fish website.
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Your Code
Replace the placeholders in `booking.html`:

1. Replace `YOUR_PUBLIC_KEY` with your actual public key
2. Replace `service_your_service_id` with your service ID
3. Replace `template_your_template_id` with your template ID

## Step 6: Test
1. Open your website
2. Go to the booking page
3. Fill out the form and submit
4. Check your email to see if the order notification was received

## Troubleshooting
- Make sure all IDs are correct (no typos)
- Check that your email service is properly connected
- Verify the template variables match the data being sent
- Check browser console for any error messages
