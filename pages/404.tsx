import { routerBack } from "@/functions/default";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Http404 = () => {
  const router = useRouter();

  const [leftTime, setLeftTime] = useState<number>(3);

  useEffect(() => {
    const time = leftTime - 1;
    
    setTimeout(() => {
      if (time === 0) {
        routerBack(router);
        return;
      }
      
      setLeftTime(time);
    }, 1000);
  }, [leftTime]);

  return (
    <div>
      <h1>이곳에 오시면 안 돼요 {`'ㅁ'`}</h1>
      <p>{ leftTime }초 후 이전 페이지로 옮겨드릴게요!</p>
    </div>
  );
}

export default Http404;