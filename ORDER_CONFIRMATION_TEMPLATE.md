# Order Confirmation Email Template

## EmailJS Template Setup

### Subject Line:
```
Order Confirmation - {{customerName}} - {{pickupDate}}
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
        .tagline {
            color: #666;
            font-size: 16px;
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
            display: flex;
            margin-bottom: 8px;
        }
        .info-label {
            font-weight: bold;
            width: 120px;
            color: #555;
        }
        .info-value {
            flex: 1;
        }
        .order-items {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #2c5aa0;
        }
        .order-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            padding: 5px 0;
        }
        .order-item:last-child {
            margin-bottom: 0;
        }
        .item-name {
            font-weight: bold;
        }
        .item-details {
            color: #666;
            font-size: 14px;
        }
        .total-section {
            background-color: #2c5aa0;
            color: white;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin-top: 20px;
        }
        .total-amount {
            font-size: 24px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            color: #666;
            font-size: 14px;
        }
        .contact-info {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
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
            <div class="tagline">Fresh Seafood Since 1985</div>
        </div>

        <div class="section">
            <div class="section-title">Order Confirmation</div>
            <p>Thank you for your order, {{customerName}}! We've received your request and will prepare your fresh seafood for pickup.</p>
        </div>

        <div class="section">
            <div class="section-title">Customer Information</div>
            <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value">{{customerName}}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Phone:</div>
                <div class="info-value">{{customerPhone}}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value">{{customerEmail}}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Pickup Details</div>
            <div class="info-row">
                <div class="info-label">Date:</div>
                <div class="info-value">{{pickupDate}}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Time:</div>
                <div class="info-value">{{pickupTime}}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Order Summary</div>
            <div class="order-items">
                {{#each orderItems}}
                <div class="order-item">
                    <div>
                        <div class="item-name">{{name}}</div>
                        <div class="item-details">{{qty}} lbs × ${{price}}/lb</div>
                    </div>
                    <div style="font-weight: bold;">${{total}}</div>
                </div>
                {{/each}}
            </div>
        </div>

        <div class="total-section">
            <div>Total Amount</div>
            <div class="total-amount">${{totalAmount}}</div>
        </div>

        <div class="highlight">
            <strong>📞 Important:</strong> We'll call you 30 minutes before your pickup time to confirm your order is ready.
        </div>

        <div class="contact-info">
            <div class="section-title" style="color: #2c5aa0; margin-bottom: 10px;">Pickup Location</div>
            <div><strong>📍 Address:</strong> 8105 27th Ave NE, Tulalip, WA 98271</div>
            <div><strong>📞 Phone:</strong> (360) 403-5252</div>
            <div><strong>🕒 Hours:</strong> Open 7 days a week</div>
        </div>

        <div class="footer">
            <p>Thank you for choosing Mikey's Fish!</p>
            <p>Questions? Call us at (360) 403-5252</p>
            <p>&copy; 2024 Mikey's Fish. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

### Plain Text Version (Alternative):
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

## How to Use This Template:

1. **In EmailJS Dashboard:**
   - Go to "Email Templates"
   - Create a new template
   - Copy the HTML content above
   - Set the subject line as shown
   - Save the template

2. **Template Variables Used:**
   - `{{customerName}}` - Customer's full name
   - `{{customerPhone}}` - Customer's phone number
   - `{{customerEmail}}` - Customer's email address
   - `{{pickupDate}}` - Selected pickup date
   - `{{pickupTime}}` - Selected pickup time
   - `{{orderDetails}}` - Formatted order summary
   - `{{totalAmount}}` - Total order amount

3. **Update Your Code:**
   Make sure your `booking.html` sends all these variables in the emailData object.

This template provides a professional, branded email confirmation that customers will receive when they place an order!
