// 의도적으로 API 호출에 지연을 추가하여 로딩 시간을 시뮬레이션
export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}
