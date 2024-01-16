"use client";
import React from "react";
import { work } from "./common/Helper";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const WeWork = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.to(
      sectionRef.current,
      {
        translateY: 0,
      },
      {
        translateY: "-200vw",
        ease: "none",
        duration: 1,
        ScrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "20 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <>
      <div>
        <section className="pt-[44px] bg_work">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="container ">
              <h2 className="text-main font-Matter font-semibold text-[28px] md:text-[33px] lg:text-[35px] xl:text-[40px] leading-[135%] text-center max-w-[797px] mx-auto">
                We work with you to create scalable, repeatable full-stack
                marketing
              </h2>
              <div className="flex content-wrapper sticky justify-center flex-wrap items-center md:justify-between mt-[66px]">
                {work.map((process) => {
                  return (
                    <>
                      <div
                        className="md:w-6/12 w-10/12 px-3 mb-[50px] sticky  md:mb-[100px] xl:mb-[140px]"
                        key={process.id}
                      >
                        <Image
                          classsName="sticky"
                          src={process.img}
                          width={512}
                          height={447}
                        ></Image>
                      </div>
                      <div
                        className="md:w-5/12 w-10/12 sticky px-3 md:mb-[100px] mb-[70px] xl:mb-[140px]"
                        key={process.id}
                      >
                        <h4 className="text-start text-black font-Matter text-[28px] leading-[140%]">
                          {process.Heading}
                        </h4>
                        <div className="flex items-center mt-[26px] md:mt-[36px]">
                          <Image
                            className="me-2"
                            src={process.check}
                            width={28}
                            height={28}
                          ></Image>
                          <p className="font-matter text-secondblack text-[18px] lg:text-[20px] leading-[145%] font-normal">
                            {process.pera1}
                          </p>
                        </div>
                        <div className="flex items-center mt-[13px]">
                          <Image
                            className="me-2"
                            src={process.check}
                            width={28}
                            height={28}
                          ></Image>
                          <p className="font-matter text-secondblack text-[18px] lg:text-[20px] leading-[145%] font-normal">
                            {process.pera2}
                          </p>
                        </div>
                        <div className="flex items-center mt-[13px]">
                          <Image
                            className="me-2"
                            src={process.check}
                            width={28}
                            height={28}
                          ></Image>
                          <p className="font-matter text-secondblack text-[18px] lg:text-[20px] leading-[145%] font-normal">
                            {process.pera3}
                          </p>
                        </div>
                        <div className="flex items-center mt-[13px]">
                          <div>{process.check2}</div>
                          <p className="font-matter text-secondblack text-[18px] lg:text-[20px] leading-[145%] font-normal">
                            {process.pera4}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeWork;
