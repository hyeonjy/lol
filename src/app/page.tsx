import InfoCard from "@/components/InfoCard";

export default function Home() {
  // 홈 페이지에서 사용할 카드 정보 배열
  const infoCards = [
    {
      href: "/champions",
      src: "/assets/main1.png",
      alt: "main1",
      title: "챔피언 목록 보기",
    },
    {
      href: "/rotation",
      src: "/assets/main2.png",
      alt: "main2",
      title: "금주 로테이션 확인",
    },
    {
      href: "/items",
      src: "/assets/main3.png",
      alt: "main3",
      title: "아이템 목록 보기",
    },
  ];

  return (
    <main className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <div className="mt-[40px] flex flex-col justify-center gap-10">
        {infoCards.map((card) => (
          <InfoCard
            key={card.href}
            href={card.href}
            src={card.src}
            alt={card.alt}
            title={card.title}
          />
        ))}
      </div>
    </main>
  );
}
