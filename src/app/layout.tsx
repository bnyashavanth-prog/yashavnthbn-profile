import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Yashavnth BN | Portfolio",
  description: "COO, Software Developer, and Product Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetBrainsMono.variable} font-mono antialiased bg-[var(--background)] text-[var(--primary)]`}>
        {children}
      </body>
    </html>
  );
}
