export const metadata = {
  title: 'Muhammad Ayyan Hassan',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
