"use client";

import ChampionList from "@/components/ChampionList";
import Loading from "@/components/Loading";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotAPi";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const {
    data: rotationData,
    isPending,
    isError,
    error,
  } = useQuery<Champion[], Error, Champion[], [string]>({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  if (isPending) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="container mx-auto mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
        </h1>
        <ChampionList champions={rotationData} />
      </div>
    </main>
  );
}
