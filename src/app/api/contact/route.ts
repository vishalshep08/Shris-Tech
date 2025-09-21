import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Zod schema for validation
    const schema = z.object({
      name: z.string().min(2, 'Name is required'),
      email: z.string().email('Invalid email address'),
      company: z.string().optional(),
      phone: z.string().optional(),
      service: z.string().min(2, 'Service is required'),
      message: z.string().min(5, 'Message is required'),
    });
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }
    const { name, email, company, phone, service, message } = parsed.data;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `Shris Tech Website <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `<h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>`
    };

    // Send email to site owner
    await transporter.sendMail(mailOptions);

    // Auto-reply to client
    const autoReplyOptions = {
      from: `Shris Tech Website <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Shris Tech!',
      text: `Hi ${name},\n\nThank you for reaching out to Shris Tech! We have received your message and will get back to you within 24 hours.\n\nHere is a copy of your message:\n${message}\n\nBest regards,\nShris Tech Team`,
      html: `<p>Hi ${name},</p><p>Thank you for reaching out to <strong>Shris Tech</strong>! We have received your message and will get back to you within 24 hours.</p><p><strong>Your message:</strong><br/>${message}</p><p>Best regards,<br/>Shris Tech Team</p>`
    };
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
