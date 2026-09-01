# Muhammad Ayyan Hassan — Portfolio

A personal portfolio focused on web application security work, the evidence behind it, and the reasoning used to explain findings.

**Live site:** https://ayyan-hassan-portfolio.vercel.app/

**Demo video:** https://drive.google.com/file/d/1Hh46s-fWuV6vJdVaUVUjC5R3qxgsra5O/view?usp=sharing

## What it does

The portfolio gives a visitor a short path from **claim → proof → contact**:

- **Home** introduces the security focus and the kind of work being presented.
- **Work** presents security-focused case studies and supporting evidence.
- **About** provides personal and professional context.
- **Contact** provides a working route for internship, entry-level, or professional enquiries.

The intended audience is a recruiter, reviewer, technical collaborator, or other visitor who wants to understand what I work on and see evidence rather than relying only on a title or claim.

## Stack

- Next.js 15.5.7
- React 19.1.0
- TypeScript
- Vercel
- Vercel Analytics
- Resend API for contact-email delivery

## Design system

The visual system is intentionally restrained:

- **Headings:** Space Grotesk
- **Body:** Inter
- **Deep Burgundy:** `#6B1F2A`
- **Ink:** `#171717`
- **Warm White:** `#F7F5F2`

The goal is a quietly technical and deliberate interface where typography, spacing, and evidence carry more weight than decoration.

## Run locally

### Prerequisites

- Node.js installed
- npm installed
- Git installed

### Setup

```bash
git clone https://github.com/MuhammadAyyanHassan/Ayyan_Hassan_portfolio.git
cd Ayyan_Hassan_portfolio
npm install
npm run dev
```

Then open the local URL shown by Next.js, normally `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

### Contact configuration

The contact endpoint expects a `RESEND_API_KEY` environment variable. Without it, the contact service intentionally reports that the service is not configured instead of attempting to send a message.

For a local environment, add the key to `.env.local`:

```text
RESEND_API_KEY=your_key_here
```

Do not commit secrets to the repository.

## Usage

A visitor can:

1. Open the portfolio and understand the security focus from the first impression.
2. Move to **Work** to inspect the security projects and evidence.
3. Read the supporting context in **About**.
4. Use **Contact** to send a message.

The contact flow validates required fields, trims submitted values, checks email format, enforces length limits, prevents duplicate rapid submission in the interface, and sends the message through the server-side API route.

## Simple architecture

```text
Visitor
   │
   ▼
Next.js portfolio
   │
   ├── Home
   ├── Work / case studies
   ├── About
   └── Contact
          │
          ▼
   Next.js API route
          │
          ▼
       Resend API
          │
          ▼
     Email delivery

Deployment: Vercel
```

## v2 evaluation / hardening result

The portfolio was tested beyond the happy path before the final documentation pass. The structured hardening review received a **PASS** verdict. Coverage included empty and malformed form input, whitespace-only input, invalid email, rapid double submission, script-like text, input boundaries, special characters, Unicode, submission/refresh behavior, API method rejection, narrow layouts, links, findability, social preview, PageSpeed mobile/desktop evidence, and final mobile behavior.

Two concrete fix-now findings were addressed:

1. **Whitespace-only validation feedback:** the form was changed so a validation problem produces explicit guidance rather than a vague generic failure.
2. **Social-share preview:** explicit preview image and metadata were added and checked.

This is a practical hardening review, not a claim of a complete security audit.

## Known limitations

- **No dedicated rate limiting / anti-spam layer:** the public contact endpoint has validation and length limits, but this remains future production-hardening work.
- **Search-result association:** search engines may surface the LinkedIn profile prominently for a personal-name query; this is an indexing observation rather than a portfolio functionality defect.
- **FlyRank launch requirements:** the final FlyRank custom-domain, graduate-badge, and showcase status are external submission/launch requirements and should not be treated as complete until independently verified.

## AI-use disclosure

AI was used as a development and review partner during the project. ChatGPT and Claude were used for planning, implementation assistance, critique, documentation, and review. I remained responsible for the final decisions and manually checked the live portfolio, functionality, links, mobile behavior, and contact flow before treating the work as ready.

The portfolio's factual security evidence is based on real project captures rather than AI-generated stand-ins. AI-generated imagery was intentionally limited to connective homepage atmosphere, while real captures were retained for actual security work.

## Demo

The recorded demo shows the live portfolio and its end-to-end behavior. The permanent Drive link is provided at the top of this README. The video itself is not stored in GitHub.

## Related documentation

- [Retrospective](docs/RETROSPECTIVE.md)
- [Reviewer Context](docs/REVIEWER_CONTEXT.md)

## Status

The portfolio codebase contains the live site, working contact-flow implementation, hardening documentation, retrospective, and reviewer context. Final FlyRank launch administration remains dependent on external verification of the custom domain, graduate badge, showcase submission, and final checkpoint.
