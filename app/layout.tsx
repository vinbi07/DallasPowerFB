import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const teamSans = Barlow_Condensed({
  variable: "--font-team-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const previewBannerImage = "/logos/DPBannerFinal.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Dallas Power",
  description:
    "Official home of Dallas Power with roster profiles, schedule updates, stats, and team news.",
  openGraph: {
    title: "Dallas Power",
    description:
      "Official home of Dallas Power with roster profiles, schedule updates, stats, and team news.",
    type: "website",
    images: [
      {
        url: previewBannerImage,
        alt: "Dallas Power banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas Power",
    description:
      "Official home of Dallas Power with roster profiles, schedule updates, stats, and team news.",
    images: [previewBannerImage],
  },
  icons: {
    icon: "/logos/DallasPowerLogo.png",
    shortcut: "/logos/DallasPowerLogo.png",
    apple: "/logos/DallasPowerLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teamSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-[color:var(--foreground)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
