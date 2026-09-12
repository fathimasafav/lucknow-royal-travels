import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Travels — Overseas Recruitment & Travel Agency",
  description: "Official visa processing, manpower recruitment, certificate attestation, emigration clearance and flight ticketing by Royal Travels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-[#0075be] selection:text-white">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
