import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { COMPANY } from "@/lib/content";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata: Metadata = {
  title: `${COMPANY.name} — ${COMPANY.tagline}`,
  description:
    "CEC accredited solar installers servicing homes and businesses across Victoria. Residential and commercial solar panels, battery storage, inverters and EV charging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col justify-between min-h-screen w-full font-sans overflow-x-hidden">
        <ConditionalLayout>
          <main className="flex-grow">{children}</main>
          <Toaster />
        </ConditionalLayout>
      </body>
    </html>
  );
}
