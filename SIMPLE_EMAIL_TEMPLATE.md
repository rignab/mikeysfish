# Simple EmailJS Template (Working Version)

## Subject Line:
```
Order Confirmation - {{customerName}}
```

## HTML Template Content:
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
            <p>Thank you for your order, {{customerName}}! We've received your request and will prepare your fresh seafood for pickup.</p>
        </div>

        <div class="section">
            <div class="section-title">Customer Information</div>
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
            <div class="section-title">Order Summary</div>
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

## Plain Text Version (Alternative):
```
ORDER CONFIRMATION - Mikey's Fish

Dear {{customerName}},

Thank you for your order! We've received your request and will prepare your fresh seafood for pickup.

CUSTOMER INFORMATION:
Name: {{customerName}}
Phone: {{customerPhone}}
Email: {{customerEmail}}

PICKUP DETAILS:
Date: {{pickupDate}}
Time: {{pickupTime}}

ORDER SUMMARY:
{{orderDetails}}

TOTAL AMOUNT: ${{totalAmount}}

IMPORTANT: We'll call you 30 minutes before your pickup time to confirm your order is ready.

PICKUP LOCATION:
📍 Address: 8105 27th Ave NE, Tulalip, WA 98271
📞 Phone: (360) 403-5252
🕒 Hours: Open 7 days a week

Thank you for choosing Mikey's Fish!
Questions? Call us at (360) 403-5252

© 2024 Mikey's Fish. All rights reserved.
```

## Variables Used (These match exactly what your code sends):
- `{{customerName}}`
- `{{customerPhone}}`
- `{{customerEmail}}`
- `{{pickupDate}}`
- `{{pickupTime}}`
- `{{orderDetails}}`
- `{{totalAmount}}`
- `{{orderCount}}` (if you want to use it)

## How to Fix the Issue:

1. **Go to your EmailJS dashboard**
2. **Edit your template** (`template_wx52ayh`)
3. **Replace the content** with the simple template above
4. **Make sure the variable names match exactly** (case-sensitive)
5. **Save the template**
6. **Test again**

This simplified template should work without the "corrupted variables" error!
