"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Molimo popunite sva polja.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      ok: false,
      message: "Unesite ispravnu email adresu.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    return {
      ok: false,
      message:
        "Kontakt forma nije konfigurisana. Proverite RESEND_API_KEY i CONTACT_TO_EMAIL.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nova poruka sa Inari sajta — ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    });

    if (error) {
      return {
        ok: false,
        message: "Slanje nije uspelo. Pokušajte ponovo malo kasnije.",
      };
    }

    return {
      ok: true,
      message: "Poruka je poslata. Javićemo se uskoro.",
    };
  } catch {
    return {
      ok: false,
      message: "Došlo je do greške. Pokušajte ponovo.",
    };
  }
}
