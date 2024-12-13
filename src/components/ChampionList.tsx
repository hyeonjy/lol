"use clinet ";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionList() {
  const champions = await fetchChampionList();

  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.values(champions).map((champion) => (
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
          <h2 className="mt-2 text-xl font-semibold">{champion.name}</h2>
          <p className="text-gray-500">{champion.title}</p>
        </Link>
      ))}
    </div>
  );
}
