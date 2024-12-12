import Image from "next/image";
import Link from "next/link";
import Main1 from "/assets/main1.png";

export default function Home() {
  return (
    <main className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <div className="mt-[40px] flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center gap-10">
          <Link
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href={"/champions"}
          >
            <div className="relative w-[400px] h-[300px]">
              <Image
                src="/assets/main1.png"
                alt="main1"
                width={400}
                height={300}
              />
            </div>
            챔피언 목록 보기
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <Link
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href={"/rotation"}
          >
            <div className="relative w-[400px] h-[300px]">
              <Image
                src="/assets/main2.png"
                alt="main2"
                width={400}
                height={300}
              />
            </div>
            금주 로테이션 확인
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <Link
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href={"/items"}
          >
            <div className="relative w-[400px] h-[300px]">
              <Image
                src="/assets/main3.png"
                alt="main3"
                width={400}
                height={300}
              />
            </div>
            아이템 목록 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
