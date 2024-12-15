import ChampionList from "@/components/ChampionList";
import { delay } from "@/utils/delay";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page() {
  await delay(800);
  const champions = await fetchChampionList();
  const championArray = Object.values(champions);

  return (
    <main className="container mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
        <Suspense fallback={<Loading />}>
          <ChampionList champions={championArray} />
        </Suspense>
      </div>
    </main>
  );
}
