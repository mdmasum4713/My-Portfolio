import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";




export const metadata: Metadata = {
  title: "Masum | Developer",
  description: "A portfolio for education purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
     
      >
        <Header></Header>
        <StairTransition></StairTransition>
    <PageTransition>{children}</PageTransition>
      
      </body>
    </html>
  );
}
