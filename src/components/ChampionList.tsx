import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface ChampionListProps {
  champions: Champion[];
}

export default async function ChampionList({ champions }: ChampionListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {champions.map((champion) => (
        <Link
          className="border rounded p-4 hover:shadow-lg"
          href={`/champions/${champion.id}`}
          key={champion.id}
        >
          <Image
            alt={champion.id}
            width={100}
            height={100}
            className="mx-auto"
            src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
          />
          <h2 className="mt-2 text-xl font-semibold">{champion.id}</h2>
          <p className="text-gray-500">{champion.title}</p>
        </Link>
      ))}
    </div>
  );
}
