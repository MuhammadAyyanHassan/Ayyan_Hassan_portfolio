"use client";

import { FormEvent, useState } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

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
    <main className="portfolio">
      <div className="site-shell">
        <header className="identity">
          <div className={`${spaceGrotesk.className} monogram`}>AH</div>
          <div className={`${spaceGrotesk.className} name`}>Muhammad Ayyan Hassan</div>
          <p className={`${inter.className} subtitle`}>
            Entry-level security work focused on web application vulnerabilities, evidence, and reasoning.
          </p>
          <nav className={`${inter.className} links`} aria-label="Primary navigation">
            <a href="#work">Work</a><span>·</span>
            <a href="#about">About</a><span>·</span>
            <a href="#contact">Contact</a><span>·</span>
            <a href="https://github.com/MuhammadAyyanHassan" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </header>

        <div className="divider" />

        <section className="hero" aria-labelledby="hero-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>SECURITY / WEB APPLICATIONS</div>
          <h1 id="hero-heading" className={spaceGrotesk.className}>
            I find and exploit vulnerabilities in web applications, document the evidence, and explain why they matter.
          </h1>
          <p className={`${inter.className} intro`}>
            I use AI as an analytical partner, not a shortcut — to test ideas, challenge assumptions, and refine the reasoning behind the work.
          </p>
          <a className="text-link" href="#work">See the work →</a>
        </section>

        <section id="work" className="section" aria-labelledby="work-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>WORK</div>
          <h2 id="work-heading" className={spaceGrotesk.className}>Security evidence</h2>
          <p className={`${inter.className} intro`}>
            The strongest work follows a simple trail: scope → method → findings → impact. The goal is not only to show a vulnerability, but to make the reasoning reproducible.
          </p>
          <div className="work-grid">
            <article className="work-item">
              <div className={`${spaceGrotesk.className} work-label`}>01 / XSS</div>
              <h3 className={spaceGrotesk.className}>Reflected XSS</h3>
              <p>Hands-on analysis in OWASP Juice Shop, documenting the failed initial approach, the successful payload pivot, and the evidence of the resulting vulnerability.</p>
            </article>
            <article className="work-item">
              <div className={`${spaceGrotesk.className} work-label`}>02 / SQL INJECTION</div>
              <h3 className={spaceGrotesk.className}>SQL injection</h3>
              <p>Application-security testing focused on understanding the injection path, the resulting behavior, and why the vulnerability matters rather than only recording a successful input.</p>
            </article>
            <article className="work-item">
              <div className={`${spaceGrotesk.className} work-label`}>03 / EVIDENCE</div>
              <h3 className={spaceGrotesk.className}>Real work, real captures</h3>
              <p>The portfolio uses real security captures for attack-log, SQLi, XSS, payload, and statistics evidence. AI-generated imagery is reserved for atmosphere, not proof.</p>
            </article>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>ABOUT</div>
          <h2 id="about-heading" className={spaceGrotesk.className}>Security work, explained honestly.</h2>
          <p className={`${inter.className} intro`}>
            I am building entry-level security experience by working through web application vulnerabilities and documenting what I learn. The standard is simple: show the evidence, explain the reasoning, and be clear about what is still being learned.
          </p>
          <p className={`${inter.className} proof-note`}>
            A résumé can claim “security research” in one line; these write-ups are the reasoning trail — where I got stuck, how I tested an idea, and what I ruled out before finding the real vulnerability.
          </p>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>CONTACT</div>
          <h2 id="contact-heading" className={spaceGrotesk.className}>Interested in entry-level security work?</h2>
          <p className={`${inter.className} intro`}>Email me about cybersecurity internship or entry-level opportunities.</p>
          <form className={inter.className} onSubmit={handleSubmit}>
            <label>Name<input name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required maxLength={100} autoComplete="name" /></label>
            <label>Email<input name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required maxLength={254} autoComplete="email" /></label>
            <label>Message<textarea name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required maxLength={5000} rows={5} /></label>
            <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
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
