import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response("Eksik alan var", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "cihanunal_20@hotmail.com", // <--- BURAYA KENDİ MAILİNİ YAZ
      pass: "uygulama-sifresi", // <--- APP PASSWORD (Google 2FA açık olmalı)
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "cihanunal_20@hotmail.com", // <--- BURAYA TEKRAR KENDİ MAILİNİ YAZ
    subject: "Yeni İletişim Formu Mesajı",
    text: `
      İsim: ${name}
      E-posta: ${email}
      Mesaj: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Mail gönderildi", { status: 200 });
  } catch (err) {
    console.error("Mail gönderme hatası:", err);
    return new Response("Mail gönderilemedi", { status: 500 });
  }
}
