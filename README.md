# Muhammad Ayyan Hassan — Portfolio

A personal portfolio focused on web application security work, the evidence behind it, and the reasoning used to explain findings.

**Live site:** https://ayyan-hassan-portfolio.vercel.app/

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

The portfolio was deliberately tested beyond the happy path before this final documentation pass. The structured hardening review received a **PASS** verdict. The review covered empty and malformed form input, whitespace-only input, invalid email, rapid double submission, script-like text, input boundaries, special characters, Unicode, submission/refresh behavior, API method rejection, Edge/narrow layouts, links, findability, social preview, PageSpeed mobile/desktop evidence, and final mobile behavior. fileciteturn12file0L1-L24

Two concrete fix-now findings were addressed:

1. **Whitespace-only validation feedback:** the form was changed so a validation problem produces explicit guidance rather than a vague generic failure.
2. **Social-share preview:** an explicit preview image and metadata were added and subsequently checked.

The senior review concluded that the current portfolio scope has a strong reliability baseline and that the identified fix-now issues were addressed. fileciteturn12file4L1-L20

## Known limitations

- **No dedicated rate limiting / anti-spam layer:** the public contact endpoint has validation and length limits, but this is future hardening work.
- **Search-result association:** search engines may surface the LinkedIn profile prominently for a personal-name query; this is an indexing observation rather than a portfolio functionality defect.
- **FlyRank badge:** pending because the capstone is under review; it is an external status dependency rather than a site defect. fileciteturn12file0L25-L29

This review should not be interpreted as a complete security audit. It is a practical hardening review appropriate to the scope of a personal portfolio.

## AI-use disclosure

AI was used as a development and review partner during the project. ChatGPT and Claude were used for planning, implementation assistance, critique, documentation, and review. I remained responsible for the final decisions and manually checked the live portfolio, functionality, links, mobile behavior, and contact flow before treating the work as ready.

The portfolio's factual security evidence is based on real project captures rather than AI-generated stand-ins. AI-generated imagery was intentionally limited to connective homepage atmosphere, while real captures were retained for actual security work. fileciteturn12file6L1-L12

## Demo

**Demo video:** To be added after the final Drive upload.

The recorded demo shows the live portfolio and its end-to-end behavior. The final submission will use the permanent Drive URL once the upload is complete.

## Status

The portfolio is live and the Week 7 hardening checkpoint passed. Remaining final-package work is documentation packaging, the demo URL insertion, final launch/domain requirements, and submission administration.
