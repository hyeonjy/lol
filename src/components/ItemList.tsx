import { fetchItemList, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

export default async function ItemList() {
  const items = await fetchItemList();
  const latestVersion = await fetchVersion();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Object.entries(items).map(([itemId, item]) => (
        <div className="border rounded p-4 hover:shadow-lg" key={itemId}>
          <Image
            alt={item.name}
            width={100}
            height={100}
            className="mx-auto"
            src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
          />
          <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-500">{item.plaintext}</p>
        </div>
      ))}
    </div>
  );
}
