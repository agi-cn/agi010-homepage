import React from "react";
import Image from "next/image";
import SolutionHeading from "./SolutionHeading";
import LogoChatAgiCN from "../../assets/cast01.png";

function Solutions() {
  return (
    <div>
      <SolutionHeading
        title="ChatGPT 解决方案"
        description="提供多种 ChatGPT 解决方案"
      />

      <div className="grid lg:grid-cols-2 mt-20 gap-20 px-4 py-4 ">
        <div className="group flex items-center gap-3">
          <Image
            className="shrink-0 h-12 w-12 rounded-full"
            src={LogoChatAgiCN}
            alt=""
          />
          <div className="ltr:ml-3 rtl:mr-3">
            <h3 className="mt-7 text-[32px] font-fold">哆啦A梦的口袋</h3>

            <p className="mt-4 mb-8 text-gray-500">
              基于
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">ChatGPT</span>
              </span>
              一个有趣的个人 AI 对话小助手。
            </p>

            <a href="https://chat.agi010.cn">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                点击进入
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
