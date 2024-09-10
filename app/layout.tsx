import { getSession } from "@/auth";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Ecommerce",
  description: "a ecommerce website made using NextJS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  const content = (
    <>
      <Header />
      <div>
        <Toaster position="bottom-right" />
      </div>
      {children}
    </>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>{content}</Providers>
      </body>
    </html>
  );
}
