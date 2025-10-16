import { NextResponse } from 'next/server';
import { supabase } from '../../../../src/lib/supabaseServer';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = body?.name;
    const country = body?.country;
    const email = body?.email;

    if (!name || !country || !email) {
      return NextResponse.json({ message: 'Name, country, and email are required' }, { status: 400 });
    }

    // check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // check duplicates
    const { data: existing, error: selectError } = await supabase
      .from('register')
      .select('id')
      .eq('email', email);

    if (selectError) throw selectError;
    if (existing && (existing as any).length > 0) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 409 });
    }

    // insert registration
    const { data: insertData, error: insertError } = await supabase
      .from('register')
      .insert([{ name, country, email }])
      .select();

    if (insertError) throw insertError;

    // send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // replace with your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

  await transporter.sendMail({
  from: `"KSV Engineering" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "✅ Your KSV Engineering Seminar Registration is Confirmed!",
  text: `
Hi ${name},

Thank you for registering for the KSV Engineering seminar. 
We are excited to have you join us!

You can access your scheduled meeting here: [Insert Meeting Link]

Details about the seminar and updates will be sent to you shortly.

Best regards,
KSV Engineering Team
  `,
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
    <h2 style="color: #1a1a1a;">✅ Registration Confirmed!</h2>
    <p style="font-size: 16px; color: #333;">
      Hi ${name},
    </p>
    <p style="font-size: 16px; color: #333;">
      Thank you for registering for the KSV Engineering seminar. We are thrilled to have you join us!
    </p>
    <p style="font-size: 16px; color: #333;">
      You can access your scheduled meeting using the link below:
    </p>
    <div style="text-align: center; margin: 20px 0;">
      <a href="[Insert Meeting Link]" target="_blank" style="background-color: #4f46e5; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
        Join Seminar
      </a>
    </div>
    <p style="font-size: 16px; color: #333;">
      Seminar details, updates, and resources will be shared with you via email. Please keep an eye on your inbox.
    </p>
    <p style="font-size: 14px; color: #888; text-align: center; margin-top: 40px;">
      Best regards,<br>
      KSV Engineering Team
    </p>
    <p style="font-size: 12px; color: #aaa; text-align: center;">
      © ${new Date().getFullYear()} KSV Engineering. All rights reserved.
    </p>
  </div>
  `,
});


    return NextResponse.json(
      { message: 'You have successfully registered for the seminar!', data: insertData },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('Server error:', err?.message || err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
