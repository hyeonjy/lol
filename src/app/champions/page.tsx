import ChampionList from "@/components/ChampionList";
import { delay } from "@/utils/delay";
import { fetchChampionList } from "@/utils/serverApi";

export default async function Page() {
  await delay(600); // 600ms 지연 시간을 추가 (예: 로딩 효과를 위해)
  const champions = await fetchChampionList();
  const championArray = Object.values(champions);

  return (
    <main className="container mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
        <ChampionList champions={championArray} />
      </div>
    </main>
  );
}
