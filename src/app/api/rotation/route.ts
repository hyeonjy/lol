import { NextResponse } from "next/server";

export async function GET() {
  // Riot Games API의 챔피언 로테이션 정보를 가져오는 엔드포인트입니다.
  const URL = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  const API_KEY = process.env.RIOT_API_KEY!;

  const response = await fetch(URL, {
    headers: {
      "X-Riot-Token": API_KEY,
    },
  });
  const data = await response.json();
  return NextResponse.json(data);
}
