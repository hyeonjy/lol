import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/RQProvider";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "여기를 눌러 링크를 확인하세요",

  openGraph: {
    title: "리그 오브 레전드 정보 앱",
    description: "여기를 눌러 링크를 확인하세요",
    url: "http://localhost:3000",
    siteName: "lol",
    images: [
      {
        url: "/assets/main1.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="py-[100px]" cz-shortcut-listen="true">
        <ThemeProvider>
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
