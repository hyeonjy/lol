import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface ChampionListProps {
  champions: Champion[];
}

export default function ChampionList({ champions }: ChampionListProps) {
  return (
    // 그리드 레이아웃으로 챔피언 카드 목록을 표시
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {champions.map((champion) => (
        <Link
          className="border rounded p-4 hover:shadow-lg"
          href={`/champions/${champion.id}`} // 챔피언 상세 페이지로 이동
          key={champion.id}
          scroll={false}
        >
          {/* 챔피언 이미지 표시 */}
          <Image
            alt={champion.id}
            width={100}
            height={100}
            className="mx-auto"
            src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
          />

          {/* 챔피언 이름과  제목 표시 */}
          <h2 className="mt-2 text-xl font-semibold">{champion.id}</h2>
          <p className="text-gray-500">{champion.title}</p>
        </Link>
      ))}
    </div>
  );
}
