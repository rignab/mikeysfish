# Customer Email Template (Sends to Customer)

## EmailJS Template Configuration:

### In EmailJS Dashboard:
1. **Go to your template** (`template_wx52ayh`)
2. **Set the "To Email" field** to: `{{to_email}}`
3. **Set the "From Name"** to: `Mikey's Fish`
4. **Set the "Reply To"** to: `mikeandmylasfish@gmail.com`

### Subject Line:
```
Order Confirmation - {{customerName}}
```

### HTML Template Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #2c5aa0;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #2c5aa0;
            margin-bottom: 5px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            font-size: 18px;
            font-weight: bold;
            color: #2c5aa0;
            margin-bottom: 10px;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 5px;
        }
        .info-row {
            margin-bottom: 8px;
        }
        .info-label {
            font-weight: bold;
            color: #555;
        }
        .highlight {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 10px;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🐟 Mikey's Fish</div>
            <div style="color: #666; font-size: 16px;">Fresh Seafood Since 1985</div>
        </div>

        <div class="section">
            <div class="section-title">Order Confirmation</div>
            <p>Dear {{customerName}},</p>
            <p>Thank you for your order! We've received your request and will prepare your fresh seafood for pickup.</p>
        </div>

        <div class="section">
            <div class="section-title">Your Information</div>
            <div class="info-row">
                <span class="info-label">Name:</span> {{customerName}}
            </div>
            <div class="info-row">
                <span class="info-label">Phone:</span> {{customerPhone}}
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span> {{customerEmail}}
            </div>
        </div>

        <div class="section">
            <div class="section-title">Pickup Details</div>
            <div class="info-row">
                <span class="info-label">Date:</span> {{pickupDate}}
            </div>
            <div class="info-row">
                <span class="info-label">Time:</span> {{pickupTime}}
            </div>
        </div>

        <div class="section">
            <div class="section-title">Your Order</div>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #2c5aa0;">
                <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; margin: 0;">{{orderDetails}}</pre>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Total Amount</div>
            <div style="background-color: #2c5aa0; color: white; padding: 15px; border-radius: 5px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold;">${{totalAmount}}</div>
            </div>
        </div>

        <div class="highlight">
            <strong>📞 Important:</strong> We'll call you 30 minutes before your pickup time to confirm your order is ready.
        </div>

        <div class="section">
            <div class="section-title">Pickup Location</div>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                <div><strong>📍 Address:</strong> 8105 27th Ave NE, Tulalip, WA 98271</div>
                <div><strong>📞 Phone:</strong> (360) 403-5252</div>
                <div><strong>🕒 Hours:</strong> Open 7 days a week</div>
            </div>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; color: #666; font-size: 14px;">
            <p>Thank you for choosing Mikey's Fish!</p>
            <p>Questions? Call us at (360) 403-5252</p>
            <p>&copy; 2024 Mikey's Fish. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

## Key Changes for Customer Emails:

1. **To Email Field**: Set to `{{to_email}}` in EmailJS template settings
2. **From Name**: Set to "Mikey's Fish" 
3. **Reply To**: Set to your business email
4. **Template Content**: Updated to be customer-facing (e.g., "Your Information" instead of "Customer Information")

## Variables Used:
- `{{to_email}}` - Customer's email address (automatically filled)
- `{{customerName}}`
- `{{customerPhone}}`
- `{{customerEmail}}`
- `{{pickupDate}}`
- `{{pickupTime}}`
- `{{orderDetails}}`
- `{{totalAmount}}`

This will send the confirmation email directly to the customer's email address they entered in the booking form!
