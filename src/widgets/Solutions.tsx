import React from "react";
import SolutionHeading from "./SolutionHeading";
import Solution from "./Solution";
import LogoChatAgiCN from "../../assets/cast01.png";
import LogoChatGPTWeb from "../../assets/chatgpt-next-web.png";

function Solutions() {
  return (
    <div>
      <SolutionHeading
        title="ChatGPT 解决方案"
        description="提供多种 ChatGPT 解决方案"
      />

      <Solution
        title="哆啦A梦的口袋"
        description="一个有趣的个人 AI 对话小助手。"
        link="https://chat.agi010.cn"
        logo={LogoChatAgiCN}
      />

      <Solution
        title="ChatGPT Next Web"
        description="ChatGPT Web 客户端。（使用自己的 OpenAI Token）"
        link="https://chatgpt.haha.ai"
        logo={LogoChatGPTWeb}
      />
    </div>
  );
}

export default Solutions;
