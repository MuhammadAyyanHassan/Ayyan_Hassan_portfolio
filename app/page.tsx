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
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#F7F5F2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          borderLeft: "1px solid #6B1F2A",
          paddingLeft: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Monogram */}
        <div
          className={spaceGrotesk.className}
          style={{
            fontSize: "32px",
            lineHeight: "1",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "#171717",
          }}
        >
          AH
        </div>

        {/* Name */}
        <div
          className={spaceGrotesk.className}
          style={{
            marginTop: "6px",
            fontSize: "10px",
            lineHeight: "1.2",
            fontWeight: 500,
            letterSpacing: "0.01em",
            color: "#171717",
          }}
        >
          Muhammad Ayyan Hassan
        </div>

        {/* Subtitle */}
        <div
          className={inter.className}
          style={{
            marginTop: "3px",
            fontSize: "7px",
            lineHeight: "1.3",
            color: "#888888",
            letterSpacing: "0.02em",
          }}
        >
          Portfolio — coming together deliberately.
        </div>

        {/* Links */}
        <div
          className={inter.className}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            marginTop: "9px",
            fontSize: "7px",
            lineHeight: "1",
          }}
        >
          <a
            href="https://www.linkedin.com/in/muhammad-ayyan-hassan/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            LinkedIn
          </a>

          <span style={dotStyle}>·</span>

          <a
            href="https://github.com/MuhammadAyyanHassan"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            GitHub
          </a>

          <span style={dotStyle}>·</span>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hassan.ayyan.muhammad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}

const linkStyle = {
  color: "#555555",
  textDecoration: "none",
  cursor: "pointer",
};

const dotStyle = {
  color: "#dedad4",
};
