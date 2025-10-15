const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Debug: Check environment variables first
    console.log('Environment check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPassword: !!process.env.EMAIL_PASSWORD,
      emailUser: process.env.EMAIL_USER
    });

    // Return early if environment variables are missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration missing - check environment variables' 
      });
    }

    const {
      customerName,
      customerPhone,
      customerEmail,
      orderDetails,
      pickupDate,
      pickupTime,
      totalAmount,
      orderCount
    } = req.body;

    // Create transporter using your email service
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email for company (order notification)
    const companyMailOptions = {
      from: 'mikeandmylasfish@gmail.com',
      to: 'mikeandmylasfish@gmail.com',
      subject: `New Pickup Order - ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1976d2;">New Pickup Order - Mikey's Fish</h2>
          
          <div style="background: #ffebee; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f44336;">
            <h3 style="color: #d32f2f; margin-top: 0;">🚨 NEW ORDER ALERT 🚨</h3>
            <p style="font-weight: bold; margin: 0;">Customer has placed an order and needs pickup preparation!</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Customer Details:</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Phone:</strong> ${customerPhone}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Order Details:</h3>
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${orderDetails}</pre>
            <hr style="margin: 15px 0;">
            <p><strong>Total Amount:</strong> $${totalAmount}</p>
            <p><strong>Number of Items:</strong> ${orderCount}</p>
          </div>

          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">Pickup Information:</h3>
            <p><strong>Date:</strong> ${pickupDate}</p>
            <p><strong>Time:</strong> ${pickupTime}</p>
            <p><strong>Location:</strong> 8105 27th Ave NE, Tulalip, WA 98271</p>
          </div>

          <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f57c00; margin-top: 0;">Action Required:</h3>
            <ul>
              <li>Prepare the order for pickup</li>
              <li>Call customer 30 minutes before pickup time</li>
              <li>Have order ready at pickup time</li>
              <li>Collect payment at pickup</li>
            </ul>
          </div>

          <p style="color: #666; font-size: 14px;">
            This order was placed through the Mikey's Fish website at ${new Date().toLocaleString()}.
          </p>
        </div>
      `
    };

    // Email for customer (confirmation)
    const customerMailOptions = {
      from: 'mikeandmylasfish@gmail.com',
      to: customerEmail,
      subject: `Pickup Confirmation - Mikey's Fish`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1976d2;">Pickup Confirmation - Mikey's Fish</h2>
          
          <p>Hello ${customerName},</p>
          
          <p>Thank you for your order! Your pickup has been confirmed.</p>

          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">Pickup Information:</h3>
            <p><strong>Date:</strong> ${pickupDate}</p>
            <p><strong>Time:</strong> ${pickupTime}</p>
            <p><strong>Location:</strong> 8105 27th Ave NE, Tulalip, WA 98271</p>
            <p><strong>Phone:</strong> (360) 403-5252</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Order:</h3>
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${orderDetails}</pre>
            <hr style="margin: 15px 0;">
            <p><strong>Total Amount:</strong> $${totalAmount}</p>
          </div>

          <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f57c00; margin-top: 0;">Important Reminders:</h3>
            <ul>
              <li>We'll call you 30 minutes before your pickup time</li>
              <li>Please bring a valid ID</li>
              <li>Payment is due at pickup</li>
              <li>If you need to change your pickup time, please call us at (360) 403-5252</li>
            </ul>
          </div>

          <p style="color: #666; font-size: 14px;">
            Thank you for choosing Mikey's Fish! We look forward to serving you the freshest seafood.
          </p>
          
          <p>Best regards,<br>Mikey's Fish Team</p>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    res.status(200).json({ 
      success: true, 
      message: 'Order notification sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response
    });
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send order notification',
      error: error.message
    });
  }
}