const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Email function called');
    
    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration missing' 
      });
    }

    const { customerName, customerEmail } = req.body;

    // Create simple transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Test with simple email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mikeandmylasfish@gmail.com',
      subject: `Test Order from ${customerName}`,
      text: `Customer: ${customerName}\nEmail: ${customerEmail}\n\nThis is a test email.`
    };

    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');

    res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully' 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message
    });
  }
}