import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="px-2 bg-[#0D1117]">{children}</div>
      </body>
    </html>
  );
}
