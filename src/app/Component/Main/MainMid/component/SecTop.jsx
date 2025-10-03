"use client";

import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: " Exclusive approach",
    desc: "I",
    TitleP :"Each project is like a unique work of art, and we immerse ourselves in the client's vision to achieve a truly exceptional result.",

  },
  {
    id: 2,
    title: " Unique style",
    desc: "Z",
    TitleP :"We give each project a unique look that reflects your brand's personality. Our goal is to create an eye-catching visual experience that will help you stand out from the crowd.",
  },
  {
    id: 3,
    title: "Comprehensive development",
    desc: "U",
    TitleP :"Everything is turnkey — from the idea to launch. We handle every stage of the process so that you receive a fully finished product.",
  },
  {
    id: 4,
    title: "Competitive analysis",
    desc: "M",
    TitleP :"We analyze the strengths and weaknesses of your competitors, identify current trends, and offer solutions that will make your project stand out and give you a competitive advantage",
  },
];

function SecTop() {
  const [mouseEnter, setMouseEnter] = useState(1);

  console.log("mouseEnter", mouseEnter);

  return (
    <>
      <section className="w-[80%] h-auto mt-40 flex justify-center items-center  max-xl:scale-80 max-lg:scale-60 max-xl:pl-0 max-md:scale-70 max-sm:scale-55">
        <div className="w-[100%] h-auto flex  justify-center gap-10 items-center">
          <h1 className="w-[70%] h-auto text-8xl flex-col flex justify-center items-start max-xl:w-full ">
            <span className="flex justify-center items-center max-md:flex-col">
              DELICIOUS{" "}
              <span className="pr-5 pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                >
                  <path
                    d="M28.6456 0.59713C28.6043 0.230201 28.0805 0.22852 28.0372 0.595229C26.91 10.1528 26.336 16.4112 23.9072 20.5703C19.9038 25.7826 13.1791 26.6236 1.26481 27.7309C0.892438 27.7655 0.885489 28.3019 1.25693 28.3455C12.9472 29.7161 19.5156 30.3738 23.5261 35.1434C26.4734 39.2963 27.1907 45.5176 28.0798 55.0861C28.1144 55.4585 28.6505 55.4637 28.694 55.0923C30.1797 42.422 30.829 35.7689 36.782 31.8674C40.9319 29.863 46.9464 29.2891 55.7529 28.2968C56.1198 28.2555 56.1202 27.7318 55.7535 27.6886C44.6341 26.3771 37.9798 25.8145 33.9023 22.2086C30.4599 18.1047 29.8723 11.4843 28.6456 0.59713Z"
                    fill="#202023"
                  />
                </svg>
              </span>{" "}
              SOLUTIONS
            </span>
            <span>FOR YOUR BUSINESS</span>
          </h1>
          <span className=" w-[20%] h-auto flex justify-end items-center max-sm:w-[50%] max-sm:pt-10">
            <span className="w-[70px] h-[70px]  border-black border-4 rounded-full flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="35"
                viewBox="0 0 22 20"
                fill="none"
                className="anime1"
              >
                <path
                  d="M21.4279 4.59539C21.5689 4.59539 21.6831 4.70965 21.6831 4.8506V11.7728C21.6831 14.5552 20.8192 16.6101 19.0914 17.9377C17.3869 19.247 14.7134 19.9017 11.071 19.9017C7.38182 19.9017 4.66165 19.238 2.91047 17.9104C1.18264 16.5647 0.318718 14.5006 0.318718 11.7182V4.8506C0.318718 4.70965 0.432978 4.59539 0.573925 4.59539H5.5272C5.66815 4.59539 5.78241 4.70965 5.78241 4.8506V11.7182C5.78241 13.3004 6.16767 14.4733 6.93819 15.2371C7.70871 16.0009 9.10965 16.3828 11.141 16.3828C13.1024 16.3828 14.4333 16.0009 15.1337 15.2371C15.8575 14.4733 16.2195 13.3004 16.2195 11.7182V4.8506C16.2195 4.70965 16.3337 4.59539 16.4747 4.59539H21.4279Z"
                  fill="#202023"
                />
                <path
                  d="M5.52039 0.0976562C5.66073 0.0976562 5.77473 0.210964 5.77559 0.351297L5.79473 3.47132C5.7956 3.61288 5.68109 3.7281 5.53953 3.7281H0.576702C0.436366 3.7281 0.322361 3.61479 0.3215 3.47446L0.302357 0.354429C0.301488 0.212873 0.416 0.0976562 0.557559 0.0976562H5.52039Z"
                  fill="#202023"
                />
                <path
                  d="M21.4227 0.0976562C21.563 0.0976562 21.677 0.210964 21.6779 0.351297L21.697 3.47132C21.6979 3.61288 21.5834 3.7281 21.4418 3.7281H16.479C16.3386 3.7281 16.2246 3.61479 16.2238 3.47446L16.2046 0.354429C16.2038 0.212873 16.3183 0.0976562 16.4598 0.0976562H21.4227Z"
                  fill="#202023"
                />
              </svg>
            </span>
          </span>
        </div>
      </section>
      <section className="w-full h-[100vh] pr-20 pl-20 flex justify-center items-center flex-col gap-20 max-sm:pr-0 max-sm:pl-0">
        <div className="w-full h-[50%] bg-[var(--UlBoxBg)]  rounded-full  max-lg:h-full max-xl:rounded-2xl">
          <ul className="flex justify-center items-center gap-3 w-full h-full max-sm:flex-col max-xl:flex-col">
            {data.map((val) => (
              <li
                key={val.id}
                onMouseEnter={() => setMouseEnter(val.id)}
                className="w-[24%] h-[90%] flex justify-center items-center bg-[var(--BoxColor)] rounded-full UlBo2 max-sm:w-[90%] max-sm:flex-col max-sm:h-[24%] max-xl:w-[90%] max-xl:h-[22%] "
              >
                <div className="w-full h-full flex justify-start items-center pl-10 gap-10 ">
                  <span className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center  text-5xl anime2 max-sm:w-[60px]  max-sm:h-[60px] ">
                    {val.desc}
                  </span>
                  <p className="w-[60%] h-[10%] text-3xl font-bold flex justify-center items-center max-sm:text-[16px]">
                    {val.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full h-[50%] ">
          <ul className="w-full h-full flex justify-center items-center pt-20">
            <li
              className='flex justify-center items-start g w-full h-full max-xl:flex-col max-xl:items-center'
            >
              <p className="text-4xl w-[20%] flex justify-center items-start max-xl:w-full ">{data[mouseEnter - 1]?.title}</p>
              <p className="text-2xl w-[30%] text-[var(--FontColor)] max-xl:w-full">
               {data[mouseEnter -1]?.TitleP}
              </p>
            </li>
          </ul>
        </div>
        
      </section>
    </>
  );
}

export default SecTop;
