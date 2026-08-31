import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Muhammad Ayyan Hassan — Security Portfolio",
  description: "Muhammad Ayyan Hassan's security portfolio: web application vulnerability research, evidence, reasoning, and case studies.",
  metadataBase: new URL("https://ayyan-hassan-portfolio.vercel.app"),
  openGraph: {
    title: "Muhammad Ayyan Hassan — Security Portfolio",
    description: "Web application security work, evidence, reasoning, and case studies.",
    type: "website",
    url: "https://ayyan-hassan-portfolio.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  );
}
