# Business Email Template Configuration

## 🔧 EmailJS Template Settings for Business Notifications

### Template: `template_oxv4eqs`

**In your EmailJS dashboard, configure these settings:**

### **To Email Field:**
```
mikeandmylasfish@gmail.com
```
*(Set this as a fixed email address, not a variable)*

### **From Name:**
```
Mikey's Fish Website
```

### **From Email:**
- ✅ **Keep "Use Default Email Address" checked**
- This will use your configured Gmail account

### **Reply To:**
```
{{customerEmail}}
```
*(This allows you to reply directly to the customer)*

### **Subject Line:**
```
NEW ORDER - {{customerName}} - {{pickupDate}} {{pickupTime}}
```

## 📧 How It Works:

1. **Customer places order** → Booking form sends data
2. **EmailJS sends to customer** → Using `template_wx52ayh` (customer confirmation)
3. **EmailJS sends to business** → Using `template_oxv4eqs` (business notification)
4. **Both emails use same service** → `service_t1r8uqf`

## ✅ Key Points:

- **Same service ID** for both emails (`service_t1r8uqf`)
- **Different template IDs** for different purposes
- **Business template** sends to fixed email address (`mikeandmylasfish@gmail.com`)
- **Customer template** sends to customer's email (`{{to_email}}`)

## 🚨 If It Still Doesn't Work:

If you're still having issues, you can create a separate EmailJS service:

1. **Go to EmailJS Dashboard**
2. **Create New Service**
3. **Link to same Gmail account**
4. **Use new service ID** for business emails

But the single service approach should work fine with the correct template configuration!
