"use client";

import { FormEvent, useState } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type Status = "idle" | "sending" | "success" | "error";

export default function Home() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="portfolio" id="contact">
      <div className="contact-card">
        <div className="identity">
          <div className={`${spaceGrotesk.className} monogram`}>AH</div>
          <div className={`${spaceGrotesk.className} name`}>Muhammad Ayyan Hassan</div>
          <div className={`${inter.className} subtitle`}>
            Portfolio — coming together deliberately.
          </div>

          <div className={`${inter.className} links`}>
            <a href="https://www.linkedin.com/in/muhammad-ayyan-hassan/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>·</span>
            <a href="https://github.com/MuhammadAyyanHassan" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span>·</span>
            <a href="mailto:hassan.ayyan.muhammad@gmail.com">Email</a>
          </div>
        </div>

        <div className="divider" />

        <section className="contact-section" aria-labelledby="contact-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>CONTACT</div>
          <h1 id="contact-heading" className={spaceGrotesk.className}>
            Have something to say?
          </h1>
          <p className={`${inter.className} intro`}>
            Send a message directly. It will reach my inbox.
          </p>

          <form className={inter.className} onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
                maxLength={100}
                autoComplete="name"
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
                maxLength={254}
                autoComplete="email"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                required
                maxLength={5000}
                rows={5}
              />
            </label>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <div className="status" aria-live="polite">
              {status === "success" && "Message sent. Thank you."}
              {status === "error" && "Something went wrong. Please try again."}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
