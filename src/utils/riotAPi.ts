import { delay } from "./delay";
import { fetchChampionList } from "./serverApi";
import { Champion } from "@/types/Champion";

// 챔피언 로테이션 데이터를 가져오는 함수
export async function getChampionRotation(): Promise<Champion[]> {
  try {
    await delay(600); // 600ms 지연 시간을 추가 (예: 로딩 효과를 위해)
    const rotationResponse = await fetch("/api/rotation");

    if (!rotationResponse.ok) {
      const errorData = await rotationResponse.json();
      throw new Error("error: ", errorData.error);
    }

    const rotationIds = await rotationResponse.json(); // 로테이션 ID 목록을 JSON으로 파싱
    const champions = await fetchChampionList(); // 챔피언 전체 리스트를 가져옴

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
}
