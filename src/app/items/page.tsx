import ItemList from "@/components/champion/ItemList";

export default async function Page() {
  return (
    <main className="container mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">아이템 목록</h1>
        <ItemList />
      </div>
    </main>
  );
}
