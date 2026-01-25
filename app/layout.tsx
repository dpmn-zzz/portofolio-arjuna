import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Menggunakan Inter agar match dengan globals.css
import "./globals.css";

// Konfigurasi Font Inter
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Optional: jika ingin digunakan sebagai variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjuna Satria | Full Stack Developer",
  description: "Portofolio Arjuna Satria, Mahasiswa Teknik Informatika & Full Stack Developer (Laravel, Next.js, Python AI).",
  icons: {
    icon: "/images/tab-browser.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // Menambahkan class inter.className agar font teraplikasi otomatis
        className={`${inter.className} bg-gray-950 text-gray-100 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}