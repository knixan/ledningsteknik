
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, city, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "karianne36@ethereal.email",
        pass: "EnTMMFfq8TeUdaf9aF",
      },
    });

    const mailOptions = {
      from: "karianne36@ethereal.email", // Specify a sender
      to: "karianne36@ethereal.email", // Specify the recipient
      subject: "New message from the website contact form",
      html: `
        <h2>Contact Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City/Location:</strong> ${city}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "The message has been sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Could not send the message." },
      { status: 500 }
    );
  }
}
