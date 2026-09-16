"use client";

import { FormEvent, useRef, useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-[#DCDFD2] placeholder:text-[#607080] transition-colors duration-200 focus:border-[#0080B0]/50 focus:outline-none focus:ring-1 focus:ring-[#0080B0]/30";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("sending");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "Portfolio Contact");
    const message = String(formData.get("message") ?? "");

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Email me directly or try again later."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: `[Portfolio] ${subject}`,
          message,
          from_name: name,
          replyto: email,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <article className="contact-form-card flex h-full flex-col rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-sm sm:p-8">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col gap-4"
      >
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            disabled={status === "sending"}
            placeholder="Your Name"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Your Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={status === "sending"}
            placeholder="Your Email"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="sr-only">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            disabled={status === "sending"}
            placeholder="Subject"
            className={inputClassName}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            disabled={status === "sending"}
            rows={6}
            placeholder="Message"
            className={`${inputClassName} min-h-[140px] flex-1 resize-none`}
          />
        </div>

        {status === "success" && (
          <p
            role="status"
            className="rounded-xl border border-[#0080B0]/40 bg-[#0080B0]/10 px-4 py-3 text-sm text-[#DCDFD2]"
          >
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMessage}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline hover:text-white"
            >
              Email me directly
            </a>
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="cta-get-in-touch flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#0080B0]/60 bg-[#0080B0] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0099cc] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" />
        </button>
      </form>
    </article>
  );
}
