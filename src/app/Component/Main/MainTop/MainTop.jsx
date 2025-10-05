"use client"
import { useState, useEffect } from "react";
import React from "react";
import Aloo from "../../../../../public/izum_cover.png";
import Image from "next/image";
import LestB from "@/app/common/LestB";

function MainTop() {
   const [text, setText] = useState(false);
   

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setText(true);
      } else {
        setText(false);
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="bg-[var(--TopBg)] w-full h-[100vh]   ">
      <div className="w-full h-full  flex-col flex justify-start items-center pt-20">
        <div className={`flex h-[50%] w-full justify-center items-center z-10 text-2xl max-sm:flex-col text-white FontLogo ${text ? '-translate-y-50 opacity-0':''}`}>
          <p className="w-[35%]   text-justify flex justify-start items-center flex-col max-sm:hidden ">
            <span className="w-full">
              Our goal is to add a unique touch to your ideas
            </span>
            <span className="w-full">
              by bringing creativity and a personalized
            </span>
            <span className="w-full">approach to each project.</span>
          </p>
          <figure className='w-[40%] h-auto flex justify-start items-center relative z-1 bottom-0  max-sm:w-full max-sm:flex-col'>
            <Image width={450} src={Aloo} alt="Aloo" />
          </figure>
          <p className="w-[15%] text-end pr-10 flex-col flex justify-end items-center font-bold text-3xl max-sm:justify-center max-sm:w-full max-sm:text-center max-sm:pr-0">
            <span className="text-end w-full max-sm:text-center">ADD</span> A SPICE TO TOUR
            BISINESS{" "}
          </p>
        </div>
        <div className={`lg:absolute max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:h-[50%]  h-full FontLogo w-[90%] max-sm:w-[100%] flex justify-start items-end ${text ? 'translate-y-90 scale-1 opacity-0' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[100%] h-[70%]"
            
            viewBox="0 0 1520 337"
            fill="none"
          >
            <path
              d="M104.83 76.5366C107.026 76.5366 108.806 78.3171 108.806 80.5134V326.525C108.806 328.721 107.026 330.501 104.83 330.501H3.9768C1.78047 330.501 0 328.721 0 326.525V80.5134C0 78.3171 1.78047 76.5366 3.9768 76.5366H104.83Z"
              fill="#F8F8F5"
            />
            <path
              d="M104.675 0.15694C106.858 0.160214 108.63 1.92249 108.646 4.10537L109.03 57.9298C109.045 60.1395 107.257 61.9383 105.047 61.935L4.44633 61.7841C2.26341 61.7808 0.491174 60.0185 0.4756 57.8357L0.0915842 4.01118C0.0758189 1.80149 1.8645 0.00270268 4.07425 0.00601777L104.675 0.15694Z"
              fill="#F8F8F5"
            />
            <path
              d="M529.055 0C531.251 0 533.032 1.78047 533.032 3.9768V59.448C533.032 61.175 532.23 62.8042 530.862 63.8583L269.221 265.449C268.018 266.376 268.673 268.3 270.191 268.3H529.249C531.445 268.3 533.226 270.081 533.226 272.277V326.525C533.226 328.721 531.445 330.501 529.249 330.501H128.118C125.922 330.501 124.142 328.721 124.142 326.525V271.661C124.142 269.946 124.932 268.327 126.283 267.272L385.93 64.5815C387.122 63.6504 386.464 61.7369 384.951 61.7369H128.192C125.996 61.7369 124.216 59.9564 124.216 57.7601V3.9768C124.216 1.78047 125.996 0 128.192 0H529.055Z"
              fill="#F8F8F5"
            />
            <path
              d="M652.731 0C654.916 0 656.692 1.76323 656.708 3.94843L657.092 57.773C657.107 59.9803 655.322 61.7782 653.115 61.7782H552.766C550.581 61.7782 548.805 60.0149 548.79 57.8297L548.406 4.00517C548.39 1.79781 550.175 0 552.382 0H652.731Z"
              fill="#FECD00"
            />
            <path
              d="M967.506 76.5366C969.703 76.5366 971.483 78.3171 971.483 80.5134V198.672C971.483 246.019 954.388 280.988 920.199 303.579C886.471 325.86 833.569 337 761.494 337C688.494 337 634.669 325.705 600.017 303.114C565.827 280.214 548.732 245.091 548.732 197.744V80.5134C548.732 78.3171 550.513 76.5366 552.709 76.5366H652.869C655.065 76.5366 656.846 78.3171 656.846 80.5134V197.744C656.846 224.667 664.469 244.627 679.716 257.624C694.963 270.621 722.684 277.12 762.88 277.12C801.69 277.12 828.025 270.621 841.886 257.624C856.209 244.627 863.37 224.667 863.37 197.744V80.5134C863.37 78.3171 865.15 76.5366 867.347 76.5366H967.506Z"
              fill="#F8F8F5"
            />
            <path
              d="M967.731 0C969.916 0 971.692 1.76323 971.708 3.94843L972.092 57.773C972.107 59.9803 970.322 61.7782 968.115 61.7782H867.766C865.581 61.7782 863.805 60.0149 863.79 57.8297L863.406 4.00517C863.39 1.79781 865.175 0 867.382 0H967.731Z"
              fill="#FECD00"
            />
            <path
              d="M991.034 330.501C988.838 330.501 987.057 328.721 987.057 326.525V3.97682C987.057 1.78049 988.838 0 991.034 0H1138.18C1140.28 0 1142.2 1.17928 1143.15 3.05056L1255.21 224.154C1255.8 225.322 1257.47 225.314 1258.06 224.14L1367.39 3.09917C1368.32 1.20116 1370.26 0 1372.38 0H1516.02C1518.22 0 1520 1.78047 1520 3.9768V326.525C1520 328.721 1518.22 330.501 1516.02 330.501H1422.1C1419.9 330.501 1418.12 328.721 1418.12 326.525V102.17C1418.12 100.503 1415.89 99.959 1415.12 101.441L1298.4 327.488C1297.44 329.339 1295.53 330.501 1293.45 330.501H1216.34C1214.28 330.501 1212.38 329.358 1211.42 327.531L1093.32 103.627C1092.54 102.159 1090.32 102.709 1090.32 104.369V326.525C1090.32 328.721 1088.54 330.501 1086.34 330.501H991.034Z"
              fill="#F8F8F5"
            />
          </svg>
        
        </div>
            <div className="hidden max-sm:flex w-[550px] h-[30%] justify-center items-center">
              <LestB />
            </div>
      </div>
    </section>
  );
}

export default MainTop;
