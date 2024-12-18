import Image from "next/image";
import Link from "next/link";

interface InfoCardProps {
  href: string;
  src: string;
  alt: string;
  title: string;
}

export default function InfoCard({ href, src, alt, title }: InfoCardProps) {
  return (
    <div className="flex flex-col justify-center gap-10">
      <Link
        className="flex flex-col justify-center items-center gap-5 text-amber-400"
        href={href}
      >
        <div className="relative w-[400px] h-[300px]">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={300}
            style={{ width: 400, height: 300 }}
            priority
          />
        </div>
        {title}
      </Link>
    </div>
  );
}
