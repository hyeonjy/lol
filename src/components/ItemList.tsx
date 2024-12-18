import { fetchItemList, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

// 아이템 목록을 표시하는 페이지 컴포넌트
export default async function ItemList() {
  const items = await fetchItemList(); // 아이템 목록 데이터
  const latestVersion = await fetchVersion(); // 최신 버전 정보

  return (
    // 그리드 레이아웃으로 아이템 카드를 배치
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Object.entries(items).map(([itemId, item]) => (
        <div className="border rounded p-4 hover:shadow-lg" key={itemId}>
          {/* 아이템 이미지 */}
          <Image
            alt={item.name}
            width={100}
            height={100}
            className="mx-auto"
            src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
          />

          {/* 아이템 이름과 설명 */}
          <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-500">{item.plaintext}</p>
        </div>
      ))}
    </div>
  );
}
