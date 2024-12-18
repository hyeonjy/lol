"use server";

import { Champion } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";
import { Item } from "@/types/Item";
import { notFound } from "next/navigation";

// 최신 버전을 가져오는 함수
export async function fetchVersion(): Promise<string> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    if (!versionResponse.ok) {
      throw new Error("버전 fetch 실패");
    }
    const versions = await versionResponse.json();
    const latestVersion = versions[0];
    return latestVersion;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// 챔피언 리스트를 가져오는 함수
export async function fetchChampionList(): Promise<Record<string, Champion>> {
  try {
    const latestVersion = await fetchVersion(); // 최신 버전을 가져옴

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

// 특정 챔피언의 상세 정보를 가져오는 함수
export async function fetchChampionDetail(
  id: string
): Promise<Record<string, ChampionDetail>> {
  const latestVersion = await fetchVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" }
  );

  // 403 상태 코드일 경우 notFound() 호출
  if (response.status === 403) {
    notFound();
  }

  const champion = await response.json();

  return champion.data;
}

// 아이템 리스트를 가져오는 함수
export async function fetchItemList(): Promise<Record<string, Item>> {
  try {
    const latestVersion = await fetchVersion();

    const itemResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
    );

    if (!itemResponse.ok) {
      throw new Error("아이템 데이터 fetch 실패");
    }
    const items = await itemResponse.json();

    return items.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
