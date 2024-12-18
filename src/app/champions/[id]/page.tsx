import { delay } from "@/utils/delay";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

type ChampionDetailProps = {
  params: { id: string };
};

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

export default async function Page({ params }: ChampionDetailProps) {
  const { id } = params;
  await delay(600);
  const data = await fetchChampionDetail(id);

  const latestVersion = await fetchVersion();

  const champion = Object.values(data)[0];

  const statTranslations: { [key: string]: string } = {
    attack: "공격력",
    defense: "방어력",
    magic: "마법력",
    difficulty: "난이도",
  };

  return (
    <main className="container mx-auto mt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{champion.name}</h1>
        <h2 className="text-2xl text-gray-600 mb-4">{champion.title}</h2>
        <Image
          alt={champion.name}
          width={250}
          height={250}
          src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
          className="mx-auto"
        />

        <p className="mt-4 text-primary">{champion.lore}</p>

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
