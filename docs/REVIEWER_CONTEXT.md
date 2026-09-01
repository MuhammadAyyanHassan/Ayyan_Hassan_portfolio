# Reviewer Context — FlyRank AI Fluency Final Checkpoint

## What is being submitted

This repository contains the deployed personal portfolio used as the capstone artifact for the final General AI Fluency checkpoint. The portfolio is intended to give recruiters, reviewers, collaborators, and other visitors a short path from claim to evidence to contact.

## Key design decision

The stack was selected through a constraint-based comparison rather than by accepting an AI recommendation without pressure-testing it. Plain HTML/CSS/JavaScript, Astro, and Next.js + TypeScript were considered. Next.js + TypeScript was selected because it matched the author's existing practical experience, supports reusable component structure for repeated case-study patterns, remains suitable for a mostly static portfolio, and leaves room for future expansion without requiring an immediate backend. The original stack decision explicitly rejected adding a database or custom backend without a real requirement.

The visual identity was also intentionally constrained: Space Grotesk for headings, Inter for body text, Deep Burgundy (#6B1F2A), Ink (#171717), and Warm White (#F7F5F2). The intended mood is quietly technical and deliberate, using typography, spacing, and restraint rather than heavy decoration.

## Verification and v2 hardening

The final hardening pass went beyond checking whether pages rendered. It covered form validation and edge cases, rapid duplicate submission, script-like input, boundaries, special characters and Unicode, submission/refresh behavior, API method rejection, narrow layouts, links, findability, social preview, PageSpeed mobile/desktop evidence, and mobile behavior. The documented hardening result was PASS. Two concrete issues found during review were fixed: clearer feedback for whitespace-only form input and explicit social-share preview metadata/image.

## Limitation disclosed intentionally

The contact endpoint has validation and length controls but does not yet have a dedicated rate-limiting or anti-spam layer. This is an honest production-hardening limitation, not a hidden defect. The final documentation also states that the hardening review is not a complete security audit; it is scoped to practical testing of a personal portfolio.

## AI transparency

AI was used as a development and review partner, including planning, implementation assistance, critique, and documentation. ChatGPT and Claude were used during the project. The author remained responsible for final decisions and manually checked the live portfolio, functionality, links, mobile behavior, and contact flow. Real security-project captures were retained as evidence; AI-generated imagery was limited to connective homepage atmosphere rather than being used as substitute security evidence.

## Reviewer's quick path

1. Open the live portfolio.
2. Use Work to inspect case-study evidence.
3. Check About/Contact for context and the contact route.
4. Open README.md for reproducible setup, architecture, evaluation, limitations, and AI disclosure.
5. Open docs/RETROSPECTIVE.md for the FL-10 reflection.
6. Use the final demo link once the Drive upload is complete.

## Important scope note

The portfolio is intentionally being treated as a living personal site, not as a finished product that can never change. The assignment checkpoint documents the state that was built, tested, and submitted. Further visual refinement and richer interactions can continue after the checkpoint.
