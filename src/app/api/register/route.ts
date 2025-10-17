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

Thank you for registering for the KSV Engineering Seminar.
We are excited to have you join us!

🗓️ Schedule: Every Saturday from 5:00 PM to 6:00 PM
📍 Location: Online (Microsoft Teams)

Join your scheduled seminar here: 
https://teams.live.com/meet/9347018645262?p=NNzCOcMQZv1uDQOKqH

We’ll send you seminar materials and updates soon.

Best regards,
KSV Engineering Team
  `,
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0;">
    <div style="background-color: #f5f6fa; padding: 25px; text-align: center;">
      <img src="https://www.ksvengineering.com/_next/image?url=%2Flovable-uploads%2F658c083b-5ef7-40e2-ba6c-ecb609b7c0cb.png&w=3840&q=75"
           alt="KSV Engineering Logo"
           style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 10px;">
      <h2 style="color: #1a1a1a; margin-top: 10px;">✅ Registration Confirmed!</h2>
    </div>

    <div style="padding: 25px;">
      <p style="font-size: 16px; color: #333;">Hi ${name},</p>
      <p style="font-size: 16px; color: #333;">
        Thank you for registering for the <strong>KSV Engineering Seminar</strong>. We are thrilled to have you join us!
      </p>

      <div style="background-color: #eef2ff; border-left: 4px solid #4f46e5; padding: 15px; margin: 20px 0; border-radius: 8px;">
        <p style="margin: 0; font-size: 15px; color: #1e1e1e;">
          🗓️ <strong>When:</strong> Every <b>Saturday</b>, from <b>5:00 PM to 6:00 PM</b><br>
          💻 <strong>Where:</strong> Online via <b>Microsoft Teams</b>
        </p>
      </div>

      <div style="text-align: center; margin: 25px 0;">
        <a href="https://teams.live.com/meet/9347018645262?p=NNzCOcMQZv1uDQOKqH" target="_blank"
           style="background-color: #4f46e5; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
          🔗 Join Seminar
        </a>
      </div>

      <p style="font-size: 16px; color: #333;">
        Seminar materials, resources, and updates will be shared with you via email. Please keep an eye on your inbox.
      </p>

      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

      <p style="font-size: 14px; color: #888; text-align: center;">
        Best regards,<br>
        <strong>KSV Engineering Team</strong>
      </p>
      <p style="font-size: 12px; color: #aaa; text-align: center;">
        © ${new Date().getFullYear()} KSV Engineering. All rights reserved.
      </p>
    </div>
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
