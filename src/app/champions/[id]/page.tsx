import { delay } from "@/utils/delay";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

type ChampionDetailProps = {
  params: { id: string };
};

// 챔피언 상세 페이지의 메타데이터를 생성하는 함수
export async function generateMetadata({ params }: ChampionDetailProps) {
  const { id } = params;
  const data = await fetchChampionDetail(id);
  const latestVersion = await fetchVersion();
  const champion = Object.values(data)[0];

  return {
    title: `${champion.name} - My Riot App`,
    description: champion.lore,
    openGraph: {
      title: `${champion.name} - My Riot App`,
      description: champion.lore,
      url: `http://localhost:3000/champions/${champion.name}`,
      siteName: "lol",
      images: [
        {
          url: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`,
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      locale: "ko_KR",
      type: "website",
    },
  };
}

// 챔피언 상세 페이지 컴포넌트
export default async function Page({ params }: ChampionDetailProps) {
  const { id } = params; // URL 파라미터에서 챔피언 ID 추출
  await delay(600); // 600ms 지연 시간을 추가 (예: 로딩 효과를 위해)
  const data = await fetchChampionDetail(id); // 챔피언 상세 정보 API 호출
  const latestVersion = await fetchVersion(); // 최신 버전 정보 API 호출
  const champion = Object.values(data)[0];

  // stat의 한글 번역
  const statTranslations: { [key: string]: string } = {
    attack: "공격력",
    defense: "방어력",
    magic: "마법력",
    difficulty: "난이도",
  };

  return (
    <main className="container mx-auto mt-10">
      <div className="max-w-3xl mx-auto">
        {/* 챔피언 이름과 제목 */}
        <h1 className="text-4xl font-bold mb-4">{champion.name}</h1>
        <h2 className="text-2xl text-gray-600 mb-4">{champion.title}</h2>

        {/* 챔피언 이미지 */}
        <Image
          alt={champion.name}
          width={250}
          height={250}
          src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
          className="mx-auto"
        />

        {/* 챔피언 배경 이야기 */}
        <p className="mt-4 text-primary">{champion.lore}</p>

        {/* 챔피언 스탯 */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-primary">스탯</h3>
          <ul className="list-disc list-inside">
            {Object.entries(champion.info).map(([stat, score]) => (
              <li className="text-primary" key={stat}>
                {statTranslations[stat]}: {score}
              </li>
            ))}
          </ul>
          <ul className="list-disc list-inside"></ul>
        </div>
      </div>
    </main>
  );
}
