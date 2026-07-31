"use client";

import { useActionState } from "react";
import {
  sendContactMessage,
  type ContactState,
} from "@/lib/actions/contact";

const initialState: ContactState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <form action={formAction}>
      <input
        type="text"
        name="name"
        placeholder="Ime"
        required
        autoComplete="name"
        disabled={pending}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        autoComplete="email"
        disabled={pending}
      />
      <textarea
        name="message"
        placeholder="Poruka"
        required
        disabled={pending}
      />
      <button type="submit" disabled={pending}>
        {pending ? "Šaljem..." : "Pošalji"}
      </button>
      {state.message ? (
        <p
          className={`form-status ${
            state.ok ? "form-status--success" : "form-status--error"
          }`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
