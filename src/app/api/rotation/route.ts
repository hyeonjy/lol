import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const URL = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  const API_KEY = process.env.RIOT_API_KEY;

  const response = await fetch(URL, {
    headers: {
      "X-Riot-Token": API_KEY as string,
    },
  });
  const data = await response.json();

  return NextResponse.json(data);
}
