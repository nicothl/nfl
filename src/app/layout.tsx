import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-blue-300">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
