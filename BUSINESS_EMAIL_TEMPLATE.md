# Business Order Notification Template

## EmailJS Template Configuration:

### Template Settings:
- **Template Name**: `business_order_notification` (create a new template)
- **To Email**: `mikeandmylasfish@gmail.com` (your business email)
- **From Name**: `Mikey's Fish Website`
- **From Email**: Use Default Email Address (checked)
- **Reply To**: `{{customerEmail}}` (so you can reply directly to customer)

### Subject Line:
```
NEW ORDER - {{customerName}} - {{pickupDate}} {{pickupTime}}
```

### HTML Template Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Order Notification</title>
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
            border-bottom: 3px solid #dc3545;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #dc3545;
            margin-bottom: 5px;
        }
        .alert {
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
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
            width: 120px;
            display: inline-block;
        }
        .order-items {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #2c5aa0;
        }
        .total-section {
            background-color: #28a745;
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
        .contact-actions {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🐟 Mikey's Fish</div>
            <div style="color: #666; font-size: 16px;">Order Management System</div>
        </div>

        <div class="alert">
            🚨 NEW ORDER RECEIVED - ACTION REQUIRED
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
            <div class="order-items">
                <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; margin: 0;">{{orderDetails}}</pre>
            </div>
        </div>

        <div class="total-section">
            <div>Total Amount</div>
            <div class="total-amount">${{totalAmount}}</div>
            <div style="font-size: 14px; margin-top: 5px;">{{orderCount}} items</div>
        </div>

        <div class="contact-actions">
            <div class="section-title" style="color: #2c5aa0; margin-bottom: 10px;">Quick Actions</div>
            <div><strong>📞 Call Customer:</strong> {{customerPhone}}</div>
            <div><strong>📧 Email Customer:</strong> {{customerEmail}}</div>
            <div><strong>📅 Reminder:</strong> Call 30 minutes before pickup time</div>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; color: #666; font-size: 14px;">
            <p>Order received from Mikey's Fish website</p>
            <p>Time: {{currentTime}}</p>
        </div>
    </div>
</body>
</html>
```

### Plain Text Version (Alternative):
```
NEW ORDER - Mikey's Fish

🚨 NEW ORDER RECEIVED - ACTION REQUIRED

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
ITEMS: {{orderCount}}

QUICK ACTIONS:
📞 Call Customer: {{customerPhone}}
📧 Email Customer: {{customerEmail}}
📅 Reminder: Call 30 minutes before pickup time

---
Order received from Mikey's Fish website
Time: {{currentTime}}
```

## Variables Used:
- `{{customerName}}`
- `{{customerPhone}}`
- `{{customerEmail}}`
- `{{pickupDate}}`
- `{{pickupTime}}`
- `{{orderDetails}}`
- `{{totalAmount}}`
- `{{orderCount}}`
- `{{currentTime}}` (optional - current timestamp)

## Next Steps:
1. Create this as a new template in EmailJS
2. Update the booking form to send both emails
3. Test the system