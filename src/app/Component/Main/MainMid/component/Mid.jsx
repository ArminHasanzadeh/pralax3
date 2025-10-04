"use client";
import React, { useState } from "react";

import Aloo from "../../../../../../public/izum_cover.png";
import Image from "next/image";
import MouseCircle from "@/app/common/MouseCircle";

function Mid() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    // گرفتن مختصات موس نسبت به section
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section
      onMouseMove={handleMouseMove}
      className="h-[100vh] w-full flex relative top-0 justify-center items-center overflow-hidden "
    >
      <div className="absolute z-3"
        style={{
          left: position.x,
          top: position.y,
         pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      >
       <div className="">
        <MouseCircle />
       </div>
      </div>
      <div className="absolute top-10 text-center text-[150px] flex-col flex z-1 max-xl:text-[100px] max-md:text-[80px] max-sm:text-[60px] ">
        <span className="w-full ">MAIN</span>
        <span className="w-full ">DIRECTIONS</span>
      </div>
      <div className="w-full h-full flex justify-center items-center relative ">
        <div className="w-[50%] h-full  BoxLeft flex justify-start items-end  bg-[var(--UlBoxBg)] ">
          <div className="w-[70%] ml-10 h-full mb-10 overflow-hidden flex justify-end items-start pl-20  flex-col max-sm:justify-end max-sm:items-center max-sm:pl-0 max-sm:w-full max-sm:ml-0">
            <h4 className="text-3xl w-[60%]   translate-y-20  max-sm:text-[20px] max-sm:w-full">
              <span className="w-fit border-b-2">Website development</span>
              <span className="border-b-2 w-fit">on Webflow </span>
            </h4>

            <p className="text-[20px] text-gray-400  translate-y-50 opacity-0">
              We create websites of any complexity on the no-code platform
              Webflow — from simple one-page landing pages to multi-page web
              projects. Full development cycle: structure, design, layout, and
              launch.
            </p>
          </div>
        </div>
        <div className="w-[50%] h-full  BoxRight flex justify-center items-center bg-[var(--BoxColor)] ">
          <Image
            className="w-[500px] h-[610px] object-fill PhotoBox absolute top-0 max-xl:w-[50%] max-xl:h-[50%] max-sm:translate-y-30 max-sm:w-[70%]  "
            src={Aloo}
            alt="dada"
          />
          <div className="w-[70%] ml-10 h-full mb-10 overflow-hidden flex justify-end text-end items-end pl-20  flex-col max-sm:justify-center max-sm:items-start max-sm:pl-0 max-sm:w-full max-sm:ml-0 ">
            <h4 className="text-3xl w-[60%]   translate-y-20 max-sm:text-2xl max-sm:w-full">
              <span className="w-fit border-b-2">Mobile app</span>
              <span className="border-b-2 w-fit">development</span>
            </h4>

            <p className="text-[20px] text-gray-400  translate-y-50 opacity-0 max-sm:pr-5">
              We develop cross-platform mobile apps for Android, iOS, and
              Telegram Mini Apps. Full development cycle — from concept to
              implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mid;
