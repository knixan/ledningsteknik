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
        user: "finn83@ethereal.email",
        pass: "6J5uzGGJhjQu234Q4q",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.TARGET_EMAIL,
      subject: "Nytt meddelande från webbplatsens kontaktformulär",
      html: `
        <h2>Kontaktförfrågan</h2>
        <p><strong>Namn:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Stad/Ort:</strong> ${city}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Meddelandet har skickats!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fel vid sändning av e-post:", error);
    return NextResponse.json(
      { message: "Kunde inte skicka meddelandet." },
      { status: 500 }
    );
  }
}
