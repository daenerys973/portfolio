import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontHeading = localFont({
  src: "../fonts/webfonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Portfolio - Decodehub",
  description:
    "Explora mi trayectoria y proyectos destacados como desarrollador. Desde interfaces de usuario atractivas hasta sólidas arquitecturas backend, mi enfoque es la excelencia en el desarrollo de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#0D1117] font-sans",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <div className=" px-2">{children}</div>
      </body>
    </html>
  );
}
