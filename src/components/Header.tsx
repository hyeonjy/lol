import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-around flex items-center">
        <Link href={"/"} scroll={false}>
          홈
        </Link>
        <Link href={"/champions"} scroll={false}>
          챔피언 목록
        </Link>
        <Link href={"/items"} scroll={false}>
          아이템 목록
        </Link>
        <Link href={"/rotation"} scroll={false}>
          챔피언 로테이션
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
