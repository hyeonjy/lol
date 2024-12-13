"use server";

import { Champion } from "@/types/Champion";

export async function getChampions(): Promise<Record<string, Champion>> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    if (!versionResponse.ok) {
      throw new Error("버전 fetch 실패");
    }
    const versions = await versionResponse.json();
    const latestVersion = versions[0];

    const championResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    if (!championResponse.ok) {
      throw new Error("챔피언 데이터 fetch 실패");
    }
    const champions = await championResponse.json();

    return champions.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
