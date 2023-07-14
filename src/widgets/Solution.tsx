import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

function Solution({
  title,
  description,
  logo,
  link,
}: {
  title: string;
  description: string;
  logo: StaticImageData;
  link: string;
}) {
  return (
    <div className="grid lg:grid-cols-2 mt-20 gap-20 px-4 py-4 ">
      <div className="group flex items-center gap-3">
        <Image className="shrink-0 h-12 w-12 rounded-full" src={logo} alt="" />
        <div className="ltr:ml-3 rtl:mr-3">
          <h3 className="mt-7 text-[32px] font-fold">{title}</h3>

          <p className="mt-4 mb-8 text-gray-500">{description}</p>

          <a href={link}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              点击进入
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Solution;
