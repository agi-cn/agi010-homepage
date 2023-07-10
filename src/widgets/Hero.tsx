import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="grid justify-items-center gap-8 pb-28 relative">
      <p className="text-4xl md:text-6xl front-black text-center leading-normal md:leading-normal">
        超曲率 AI
      </p>

      <p className="text-xl text-gray-700 md:w-1/2 text-center">
        超曲率 AI 提供多种 ChatGPT 在线服务
      </p>

      <p>
        <Link
          className="text-white bg-sky-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="https://uptime.zouying.work/status/online-status"
        >
          查看服务状态
        </Link>
      </p>
    </div>
  );
}

export default Hero;
