import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODOSGAMERS Challenge",
  description: "Desafío técnico React/Next",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
