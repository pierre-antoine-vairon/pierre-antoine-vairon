import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pierre-Antoine Vairon - Développeur Full Stack",
  description:
    "Portfolio de Pierre-Antoine Vairon, développeur web et mobile Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
