"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  if (!name || !email || !message) return { ok: false, message: "Semua field harus diisi." };

  try {
    const { error } = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      // to: ["delivered@resend.dev"],
      from: "Skymusic Contact <hallo@skymusic.id>",
      to: ["hallo@skymusic.id"],
      replyTo: email,
      subject: `Pesan Baru: ${name} via skymusic.id`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { ok: false, message: "Gagal mengirim email." };
    }

    return { ok: true, message: "Email berhasil dikirim." };
  } catch (err) {
    console.error("Server Error:", err);
    return { ok: false, error: "Terjadi kesalahan server." };
  }
}
