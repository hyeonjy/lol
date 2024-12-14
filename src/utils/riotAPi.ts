import { fetchChampionList } from "./serverApi";
import { Champion } from "@/types/Champion";

export const getChampionRotation = async (): Promise<Champion[]> => {
  try {
    const rotationResponse = await fetch("/api/rotation");

    if (!rotationResponse.ok) {
      const errorData = await rotationResponse.json();
      throw new Error("error: ", errorData.error);
    }

    const rotationIds = await rotationResponse.json();
    const champions = await fetchChampionList();

    // Record<string, Champion>을 배열로 변환
    const championArray = Object.values(champions);

    // id와 일치하는 챔피언 데이터를 필터링
    const freeChampions = championArray.filter((champion) =>
      rotationIds.freeChampionIds.includes(Number(champion.key))
    );

    return freeChampions;
  } catch (err) {
    throw new Error("데이터 fetch 실패");
  }
};
