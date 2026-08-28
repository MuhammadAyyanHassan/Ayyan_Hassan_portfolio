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
    <main className="min-h-screen bg-[#F7F5F2] flex flex-col items-center justify-center">
      <div className="border-l-[2px] border-[#6B1F2A] pl-5">
        
        {/* Monogram */}
        <div className={`${spaceGrotesk.className} text-[48px] font-medium text-[#171717] leading-none tracking-tight`}>
          AH
        </div>
        
        {/* Name */}
        <div className={`${spaceGrotesk.className} text-[16px] font-medium text-[#171717] tracking-[0.01em] mt-[10px]`}>
          Muhammad Ayyan Hassan
        </div>
        
        {/* Subtitle */}
        <div className={`${inter.className} text-[13px] text-[#888888] mt-1`}>
          Portfolio — coming together deliberately.
        </div>

        {/* Required Links */}
        <div className={`${inter.className} flex items-center gap-3 mt-4 text-[12px] text-[#555555]`}>
          <a 
            href="https://www.linkedin.com/in/muhammad-ayyan-hassan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#6B1F2A] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#dedad4]">&middot;</span>
          <a 
            href="https://github.com/MuhammadAyyanHassan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#6B1F2A] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#dedad4]">&middot;</span>
          <a 
            href="mailto:hassan.ayyan.muhammad@gmail.com" 
            className="hover:text-[#6B1F2A] transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </main>
  );
}
