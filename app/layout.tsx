import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Muhammad Ayyan Hassan — Security Portfolio",
  description: "Muhammad Ayyan Hassan's security portfolio: web application vulnerability research, evidence, reasoning, and case studies.",
  openGraph: {
    title: "Muhammad Ayyan Hassan — Security Portfolio",
    description: "Web application security work, evidence, reasoning, and case studies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  );
}
