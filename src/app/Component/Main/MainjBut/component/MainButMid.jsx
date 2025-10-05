"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ButImg from "../../../../../../public/stage1.jpg";
import ButImg2 from "../../../../../../public/stage2.jpg";
import ButImg3 from "../../../../../../public/stage3_2boys.jpg";
import Aloo from "../../../../../../public/izum_cover.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MainButMid(props) {
  const [text, setText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 15000) {
        setText(true);
      } else {
        setText(false);
      }
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const horizontalWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".horizontal-section");
      const totalWidth = sections.length * window.innerWidth;

      // تنظیم عرض کل کانتینر افقی
      gsap.set(horizontalWrapRef.current, {
        width: totalWidth,
      });

      // انیمیشن اسکرول افقی
      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          pin: true,
          pinSpacing: false,
          scrub: 1,
          anticipatePin: 0.3,
        },
      });

      horizontalTl.to(contentRef.current, {
        x: -(totalWidth - window.innerWidth),
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex ">
      <div ref={contentRef} className="h-full flex relative ">
        <div ref={horizontalWrapRef} className="h-full flex">
          <div className="horizontal-section flex-shrink-0 w-screen h-full flex justify-center items-center max-lg:flex-col ">
            <div className="w-[50%] h-[80%] flex justify-center items-center border-r-1 border-black max-lg:hidden">
              <figure>
                <Image
                  className="w-[80%] h-[80%] rounded-full  "
                  src={ButImg}
                  alt="ButImg1"
                />
              </figure>
            </div>
            <div className="w-[40%] h-[80%] flex justify-center items-center  border-r-1  border-black max-lg:w-full max-h-full">
              <div className="flex-col h-full justify-center items-center flex w-full">
                <div className="w-[80%] h-[50%] flex-col flex justify-start items-center gap-10 border-b-1 border-black max-lg:border-0">
                  <h6 className="text-6xl">BRIEFING</h6>
                  <p className="text-2xl text-center w-[90%]">
                    Meeting (in person or via video call) and discussion of the
                    project idea. We listen to your wishes and goals to
                    understand exactly what you want to achieve.
                  </p>
                </div>
                <div className="w-[80%] h-[50%] flex-col flex justify-center items-center text-2xl">
                  <span>(Step)</span>
                  <p className="text-[200px] max-lg:text-[100px]">01</p>
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-section flex-shrink-0 w-screen h-full flex justify-start items-center max-lg:flex-col  ">
            <div className="w-[50%] h-[80%] flex justify-center items-center  border-r-1  border-black max-lg:w-full max-lg:h-full">
              <div className="flex-col h-full justify-center items-center flex w-full">
                <div className="w-[80%] h-[50%] max-lg:h-[30%] flex-col flex justify-center items-center text-2xl mb-20 max-lg:mb-0">
                  <span>(Step)</span>
                  <p className="text-[200px] max-lg:text-[100px]">02</p>
                </div>
                <div className="w-[80%] h-[50%] max-lg:h-[60%] flex-col flex justify-start items-center gap-10 max-lg:gap-0 pt-10 border-t-1 border-black max-lg:border-0">
                  <h6 className="text-6xl">ANALYTICS</h6>
                  <p className="text-2xl text-center w-full">
                    After prepayment, we conduct a comprehensive market
                    analysis, study competitors, and identify the target
                    audience. Based on the collected information, we prepare the
                    project’s technical specification (TS) and agree on it with
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[80%] flex justify-center items-center border-r-1 border-black max-lg:hidden">
              <figure className="flex justify-center items-center ">
                <Image
                  className="w-[55%] h-[50%] rounded-3xl   "
                  src={ButImg2}
                  alt="ButImg1"
                />
              </figure>
            </div>
          </div>

          <div className="horizontal-section flex-shrink-0 w-screen h-full flex justify-start items-center  max-lg:flex-col  ">
            <div className="w-[50%] h-[80%] flex justify-center items-center  border-r-1  border-black max-lg:w-full max-lg:h-full">
              <div className="flex-col h-full justify-center items-center flex w-full">
                <div className="w-[80%] h-[50%] max-lg:h-[30%] flex-col flex justify-center items-center text-2xl">
                  <span>(Step)</span>
                  <p className="text-[200px] max-lg:text-[100px]">03</p>
                </div>
                <div className="w-[80%] h-[50%] max-lg:h-[60%] flex-col flex justify-start items-center pt-10 gap-10 border-t-1 border-black max-lg:border-0">
                  <h6 className="text-6xl">CONCEPT</h6>
                  <p className="text-2xl text-center w-[90%]">
                    We are starting to develop the design of the first page. We
                    create a concept and present it to you. After receiving
                    feedback, we make the necessary adjustments and approve the
                    final version.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[80%] flex justify-center items-center border-r-1 border-black max-lg:hidden ">
              <figure className="flex justify-center items-center">
                <Image
                  className="w-[80%] h-[80%] rounded-full"
                  src={ButImg3}
                  alt="ButImg1"
                />
              </figure>
            </div>
          </div>

          <div className="horizontal-section flex-shrink-0 w-screen h-full flex justify-start items-center max-lg:flex-col   ">
            <div className="w-[50%] h-[80%] flex justify-center items-center  border-r-1  border-black  max-lg:w-full max-lg:h-full">
              <div className="flex-col h-full justify-center items-center flex w-full">
                <div className="w-[80%] h-[50%] flex-col flex justify-start items-center gap-10 border-b-1 border-black max-lg:border-0">
                  <h6 className="text-6xl">DESIGN-PROJECT</h6>
                  <p className="text-2xl text-center w-[80%]">
                    Based on the approved concept, we are developing the design
                    of all other pages. We present each page and coordinate it
                    with you to make sure that the result meets your
                    expectations.
                  </p>
                </div>
                <div className="w-[80%] h-[50%] flex-col flex justify-center items-center text-2xl">
                  <span>(Step)</span>
                  <p className="text-[200px] max-lg:text-[100px]">04</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[80%] flex justify-center items-center  border-r-1  border-black max-lg:hidden">
              <div className="flex-col h-full justify-center items-center flex w-full">
                <div className="w-[80%] h-[50%] flex-col flex justify-center items-center text-2xl">
                  <span>(Step)</span>
                  <p className="text-[200px]">05</p>
                </div>
                <div className="w-[80%] h-[50%] flex-col flex justify-start items-center pt-10 gap-10 border-t-1 border-black ">
                  <h6 className="text-6xl">DEVELOPMENT</h6>
                  <p className="text-2xl text-center w-[90%]">
                    At the final stage, we begin the project's layout and
                    development. We are presenting the completed website to you
                    for review. We make any necessary adjustments, if required,
                    and upon completion, sign the acceptance certificate,
                    finalizing the project in accordance with all your
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal-section flex-shrink-0 w-screen h-full flex justify-center items-center pt-30 max-lg:hidden  ">
            <section
              className={` w-full h-full  flex justify-start items-center flex-col opacity-0  TransitionForBox ${
                text ? "opacity-100" : ""
              }`}
            >
              <div className="flex w-full h-[30%] justify-center items-center flex-col text-2xl ">
                <div className='w-full h-[30%] flex justify-center items-center gap-3 '>
                  <span className={`flex justify-center items-center w-[5%] h-[90%] TransitionForBox BoxStart bg-black text-white rounded-4xl ${text ? '-translate-y-10':''}`}>
                    {" "}
                    Start
                  </span>
                  <span className={`flex justify-center items-center w-[5%] h-[90%] rounded-2xl BoxYour bg-[var(--UlBoxBg)] ${text ? '-translate-y-10':''}`}>
                    Your
                  </span>
                  <span className={` flex justify-center items-center w-[7%] h-[90%] rounded-4xl BoxProject  bg-[var(--UlBoxBg)] ${text ? '-translate-y-10':''}`}>
                    Project
                  </span>
                </div>
                <div className="w-full h-[30%] flex justify-center items-center gap-1">
                  <span className={` flex justify-center items-center w-[6%] h-[90%] rounded-4xl BoxStart2 bg-[var(--UlBoxBg)] ${text ? '-translate-y-10':''}`}>
                    Today
                  </span>
                  <span className={` flex justify-center items-center w-[5%] h-[90%] rounded-2xl BoxYour2 bg-[var(--UlBoxBg)] ${text ? '-translate-y-10':''}`}>
                    Whit
                  </span>
                  <span className={` flex justify-center items-center w-[3%] h-[90%] rounded-2xl BoxProject2 bg-[var(--UlBoxBg)] ${text ? '-translate-y-10':''}`}>
                    us
                  </span>
                </div>
              </div>
              <div className="w-full h-[30%] flex justify-center items-center">
                <figure className="w-full h-full flex justify-center items-center">
                  <Image className="w-[10%] h-full" src={Aloo} alt="Aloo" />
                </figure>
              </div>
              <div className="w-full h-[30%] flex justify-center items-center">
                <p className="flex justify-center items-center text-2xl w-[25%] text-center">
                  We are ready to hear your ideas and offer creative solutions
                  that will highlight the uniqueness of your project.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainButMid;
