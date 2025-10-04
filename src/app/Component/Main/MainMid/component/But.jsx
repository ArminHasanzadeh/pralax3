"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Img1 from "../../../../../../public/skvorcy_angl.jpg";
import Img2 from "../../../../../../public/rocks_eng1.jpg";
import Img3 from "../../../../../../public/okwood_eng1.jpg";
import Img4 from "../../../../../../public/mindvalley_eng.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function But() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const images = gsap.utils.toArray(".project-img");

      images.forEach((img, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top 70%", // وقتی عکس وارد viewport میشه
            end: "bottom 60%", // وقتی از اون رد میشه
            scrub: 1.5,
            onEnter: () => {
              // وقتی وارد viewport شد → بزرگ بشه
              gsap.to(img, { scale: 2, duration: 1, ease: "power2.out" });
              // بقیه عکس‌ها برگردن به scale=1
              images.forEach((other, j) => {
                if (j !== i) gsap.to(other, { scale: 1, duration: 1 });
              });
            },
            onEnterBack: () => {
              // وقتی برگردی بالا هم همین کار رو بکن
              gsap.to(img, { scale: 2, duration: 1, ease: "power2.out" });
              images.forEach((other, j) => {
                if (j !== i) gsap.to(other, { scale: 1, duration: 1 });
              });
            },
          },
        });
      });
    }
    
    const title = document.querySelector(".project-title");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // وقتی به 3300 رسید شروع کنه به بزرگ شدن
      if (scrollY >= 3300 && scrollY <= 3500) {
        gsap.to(title, {
           translateY: -100,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(title, {
          translateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center mt-40 relative pb-50">
      {/* عنوان بالا */}
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="35"
            viewBox="0 0 22 20"
            fill="none"
            
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

        <h5 className="w-[50%] text-center text-3xl leading-relaxed">
          Our work is the product of careful analysis, creative thinking, and a
          commitment to excellence.
        </h5>

        <span className="border w-[1px] h-[100px]"></span>

        <div className="text-center w-full z-10">
          <h2 className=" text-[200px] max-xl:text-[150px] max-md:text-[100px] max-sm:text-[60px] w-full FontScorl tracking-tight leading-none project-title">
            PROJECT
          </h2>
        </div>
      </div>

      {/* بخش عکس‌ها */}
      <div className="w-full flex flex-col justify-center items-center mt-60 gap-[15rem]">
        <figure className="project-img flex justify-center items-center">
          <Image
            className="w-[40%] rounded-2xl  transition-transform duration-500"
            src={Img1}
            alt="Project 1"
          />
        </figure>

        <figure className="project-img flex justify-center items-center">
          <Image
            className="w-[40%] rounded-2xl  transition-transform duration-500"
            src={Img2}
            alt="Project 2"
          />
        </figure>

        <figure className="project-img flex justify-center items-center">
          <Image
            className="w-[40%] h- rounded-2xl  transition-transform duration-500"
            src={Img3}
            alt="Project 3"
          />
        </figure>
        <figure className="project-img flex justify-center items-center">
          <Image
            className="w-[40%] h- rounded-2xl  transition-transform duration-500"
            src={Img4}
            alt="Project 3"
          />
        </figure>
      </div>
    </section>
  );
}

export default But;
