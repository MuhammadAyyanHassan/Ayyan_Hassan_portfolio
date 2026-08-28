import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[#F7F5F2] text-[#171717] flex flex-col items-center justify-center p-6`}
    >
      <div className="max-w-md w-full border-l-2 border-[#6B1F2A] pl-6 space-y-3">
        <div
          className={`${spaceGrotesk.className} text-5xl font-medium tracking-tight text-[#171717] leading-none`}
        >
          AH
        </div>
        <div>
          <h1
            className={`${spaceGrotesk.className} text-xl font-medium text-[#171717] tracking-tight`}
          >
            Muhammad Ayyan Hassan
          </h1>
          <p className="text-xs text-[#555555] mt-1">
            Portfolio — coming together deliberately.
          </p>
        </div>

        {/* Required Links */}
        <div className="pt-2 flex gap-4 text-xs font-medium">
          <a
            href="https://www.linkedin.com/in/muhammad-ayyan-hassan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6B1F2A] underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MuhammadAyyanHassan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6B1F2A] underline underline-offset-4 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
