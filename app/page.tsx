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
            I build and investigate technical systems across software, security, and AI.
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
          <div className={`${spaceGrotesk.className} eyebrow`}>TECHNICAL PORTFOLIO</div>
          <h1 id="hero-heading" className={spaceGrotesk.className}>
            Build carefully. Test honestly. Document the result.
          </h1>
          <p className={`${inter.className} intro`}>
            A working portfolio of projects, security exercises, and technical exploration — presented as evidence rather than a list of claims.
          </p>
          <a className="text-link" href="#work">See the work →</a>
        </section>

        <section id="work" className="section" aria-labelledby="work-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>WORK</div>
          <h2 id="work-heading" className={spaceGrotesk.className}>Selected directions</h2>
          <div className="work-grid">
            <article className="work-item">
              <div className={`${spaceGrotesk.className} work-label`}>01 / SECURITY</div>
              <h3 className={spaceGrotesk.className}>Hands-on security analysis</h3>
              <p>Case-study work focused on application security exercises, including XSS and SQL injection, with evidence organized around scope, method, findings, and impact.</p>
            </article>
            <article className="work-item">
              <div className={`${spaceGrotesk.className} work-label`}>02 / SOFTWARE</div>
              <h3 className={spaceGrotesk.className}>Systems built with modern web stacks</h3>
              <p>Practical software work using component-based interfaces, TypeScript, and structured application architecture — choosing complexity only when the requirement justifies it.</p>
            </article>
            <article className="work-item">
              <div className={`${spaceGrotesk.className} work-label`}>03 / AI & DATA</div>
              <h3 className={spaceGrotesk.className}>Applied AI and data exploration</h3>
              <p>Exploration across AI-assisted workflows, data-driven analysis, and experiments where the goal is to understand the system, its limits, and the evidence behind an output.</p>
            </article>
          </div>
          <p className={`${inter.className} proof-note`}>
            Detailed case studies and project evidence are being organized around the work itself rather than inflated titles.
          </p>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>ABOUT</div>
          <h2 id="about-heading" className={spaceGrotesk.className}>Still exploring. Already building.</h2>
          <p className={`${inter.className} intro`}>
            The portfolio is intentionally broad: software, security, and AI are current areas of practice rather than labels I am claiming as finished specializations. The standard is simple — make the work understandable, show the evidence, and be honest about what is still being learned.
          </p>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
          <div className={`${spaceGrotesk.className} eyebrow`}>CONTACT</div>
          <h2 id="contact-heading" className={spaceGrotesk.className}>Have something useful to discuss?</h2>
          <p className={`${inter.className} intro`}>Send a message directly. It will reach my inbox.</p>
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
