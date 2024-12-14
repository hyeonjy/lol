"use client";

import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotAPi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const {
    data: rotationData,
    isPending,
    isError,
    error,
  } = useQuery<Champion[], any>({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="container mx-auto mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {rotationData.map((champion) => (
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
              <p className="text-gray-500">전장의 우두머리</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
