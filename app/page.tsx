export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#171717] flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full border-l-2 border-[#6B1F2A] pl-6 space-y-4">
        <div className="text-5xl font-medium tracking-tight">AH</div>
        <h1 className="text-2xl font-medium">Muhammad Ayyan Hassan</h1>
        <p className="text-sm text-gray-700">
          Front-End Developer & Web Security Enthusiast.
        </p>

        {/* Required Links for PF-04 Assignment */}
        <div className="pt-4 flex flex-wrap gap-4 text-sm font-medium">
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
          <a
            href="mailto:hassan.ayyan.muhammad@gmail.com?subject=CV%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6B1F2A] underline underline-offset-4 transition-colors"
          >
            CV
          </a>
          <a
            href="mailto:hassan.ayyan.muhammad@gmail.com?subject=Booking%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6B1F2A] underline underline-offset-4 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </main>
  );
}
