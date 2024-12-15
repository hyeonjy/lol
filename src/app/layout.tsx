import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "여기를 눌러 링크를 확인하세요",

  openGraph: {
    title: "리그 오브 레전드 정보 앱",
    description: "여기를 눌러 링크를 확인하세요",
    url: "https://my-website.com",
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

const Nav = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-around">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8 fixed bottom-0 w-full">
      <div className="container mx-auto text-center text-white text-sm">
        [Your Product Name] is not endorsed by Riot Games and does not reflect
        the views or opinions of Riot Games or anyone officially involved in
        producing or managing Riot Games properties. Riot Games and all
        associated properties are trademarks or registered trademarks of Riot
        Games, Inc.
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-[100px]" cz-shortcut-listen="true">
        <Nav />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
