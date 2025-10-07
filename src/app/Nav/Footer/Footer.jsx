import Image from "next/image";
import React from "react";
import Aloo from "../../../../public/izum_cover.png";
const Footer = () => {
  return (
    <section className="w-full h-[100vh] flex-col flex justify-start items-center max-lg:flex-col ">
      <div className="w-[95%] h-[30%] flex justify-start  items-end max-lg:flex-col max-md:items-center">
        <div className="w-[16%] h-full flex justify-start items-center max-lg:flex-col">
          <span className="w-fit h-fit SvgHover transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="40"
              viewBox="0 0 128 33"
              fill="none"
            >
              <path
                d="M8.73738 7.49468C8.97224 7.49468 9.16264 7.68508 9.16264 7.91994V31.9384C9.16264 32.1732 8.97224 32.3636 8.73738 32.3636H0.425258C0.190395 32.3636 0 32.1732 0 31.9384V7.91994C0 7.68508 0.190394 7.49468 0.425258 7.49468H8.73738Z"
                fill="#202023"
              />
              <path
                d="M44.4616 0C44.6965 0 44.8869 0.190394 44.8869 0.425258V5.82355C44.8869 5.99279 44.8148 6.15404 44.6888 6.26697L22.6909 25.9759C22.5746 26.0801 22.6483 26.2727 22.8044 26.2727H44.478C44.7128 26.2727 44.9032 26.4631 44.9032 26.698V31.9384C44.9032 32.1732 44.7128 32.3636 44.478 32.3636H10.8793C10.6444 32.3636 10.454 32.1732 10.454 31.9384V26.5994C10.454 26.4315 10.5249 26.2714 10.6492 26.1586L32.4801 6.34151C32.5952 6.23696 32.5213 6.04545 32.3657 6.04545H10.8855C10.6506 6.04545 10.4603 5.85506 10.4603 5.6202V0.425258C10.4603 0.190394 10.6506 0 10.8855 0H44.4616Z"
                fill="#202023"
              />
              <path
                d="M81.3839 7.49468C81.6187 7.49468 81.8091 7.68508 81.8091 7.91994V19.4545C81.8091 24.0909 80.3695 27.5152 77.4904 29.7273C74.6502 31.9091 70.1953 33 64.1258 33C57.9785 33 53.4458 31.8939 50.5277 29.6818C47.6486 27.4394 46.209 24 46.209 19.3636V7.91994C46.209 7.68508 46.3994 7.49468 46.6343 7.49468H54.8881C55.1229 7.49468 55.3133 7.68508 55.3133 7.91994V19.3636C55.3133 22 55.9553 23.9545 57.2392 25.2273C58.5232 26.5 60.8576 27.1364 64.2425 27.1364C67.5107 27.1364 69.7284 26.5 70.8956 25.2273C72.1018 23.9545 72.7048 22 72.7048 19.3636V7.91994C72.7048 7.68508 72.8952 7.49468 73.1301 7.49468H81.3839Z"
                fill="#202023"
              />
              <path
                d="M83.5458 32.3636C83.311 32.3636 83.1206 32.1732 83.1206 31.9384V0.425259C83.1206 0.190396 83.311 0 83.5458 0H95.7451C95.9819 0 96.1962 0.140374 96.2908 0.357483L105.665 21.8651C105.725 22.002 105.919 22.0011 105.978 21.8638L115.123 0.362326C115.217 0.142625 115.432 0 115.671 0H127.575C127.81 0 128 0.190394 128 0.425258V31.9384C128 32.1732 127.81 32.3636 127.575 32.3636H119.846C119.611 32.3636 119.421 32.1732 119.421 31.9384V10.1658C119.421 9.98209 119.17 9.92887 119.095 10.0968L109.365 32.0099C109.269 32.225 109.056 32.3636 108.821 32.3636H102.53C102.296 32.3636 102.084 32.227 101.988 32.0142L92.1414 10.3074C92.0658 10.1408 91.8163 10.1947 91.8163 10.3777V31.9384C91.8163 32.1732 91.626 32.3636 91.3911 32.3636H83.5458Z"
                fill="#202023"
              />
              <path
                d="M8.72481 0.0152111C8.95837 0.0156186 9.14789 0.204308 9.14932 0.437859L9.18122 5.63683C9.18267 5.873 8.9914 6.0651 8.75523 6.06469L0.464338 6.05023C0.230783 6.04982 0.0412635 5.86113 0.0398306 5.62758L0.00793217 0.428614C0.00648316 0.192445 0.197751 0.000335725 0.433924 0.000747727L8.72481 0.0152111Z"
                fill="#202023"
              />
              <path
                d="M54.8767 0C55.1106 0 55.3005 0.188808 55.302 0.422649L55.3339 5.62163C55.3353 5.8575 55.1445 6.04949 54.9086 6.04949H46.6389C46.4051 6.04949 46.2151 5.86069 46.2137 5.62684L46.1818 0.427867C46.1803 0.191989 46.3711 0 46.607 0H54.8767Z"
                fill="#202023"
              />
              <path
                d="M81.3751 0C81.6089 0 81.7989 0.188808 81.8003 0.422649L81.8322 5.62163C81.8337 5.8575 81.6429 6.04949 81.407 6.04949H73.1373C72.9034 6.04949 72.7135 5.86069 72.712 5.62684L72.6801 0.427867C72.6787 0.191989 72.8695 0 73.1054 0H81.3751Z"
                fill="#202023"
              />
            </svg>
          </span>
        </div>
        <div className="w-[30%] h-full flex justify-center items-center gap-30 text-2xl UlFooter ">
          <ul className="max-lg:flex-col">
            <li>
              <a href={""}> Contact</a>
            </li>
            <li>
              <a href={"https://my-web-black-one.vercel.app/"}> website</a>
            </li>
          </ul>
          <ul>
            <li>
                Arminhsnzadeh@gmail.com
            </li>
            <li>
              <a href={"https://my-web-black-one.vercel.app/work"}>Web</a>
            </li>
          </ul>
        </div>
        <div className="w-[50%] h-full flex justify-end items-center gap-10">
          <span className="w-fit h-fit">
            <a href={"https://github.com/ArminHasanzadeh"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </span>
          <span className="w-fit h-fit ">
            <a href={"https://www.instagram.com/armin__hasnzadeh?igsh=cndnejBxcXo5cTh6"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </span>
          <span className="w-fit h-fit ">
            <a href={"https://www.linkedin.com/in/armin-hasanzadeh-687554333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="w-[90%] h-[70%] flex justify-start items-center relative flex-col">
        <figure className="w-full h-full absolute right-0 top-0 flex justify-center items-center">
          <Image className="w-[35%] h-[100%] max-md:w-full " src={Aloo} alt="Aloo" />
        </figure>
        <div className="absolute bottom-0 left-0 text-9xl max-md:text-4xl max-lg:text-5xl max-xl:text-6xl">
          {" "}
          WE'LL BE IN TOUCH HELLO@IZUM.DIGITAL
        </div>
      </div>
    </section>
  );
};

export default Footer;
