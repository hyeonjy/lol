import ChampionList from "@/components/ChampionList";

export default async function Page() {
  return (
    <main className="container mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
        <ChampionList />
      </div>
    </main>
  );
}
