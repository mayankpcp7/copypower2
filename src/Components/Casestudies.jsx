import React from "react";
import caseupright from "../../public/images/webp/case_upper_right.webp";
import caseupleft from "../../public/images/webp/case_upper_left.webp";
import casebottomright from "../../public/images/webp/case_bottom_right.webp";
import casebottomleft from "../../public/images/webp/case_bottom_left.webp";
import case1 from "../../public/images/webp/card1.webp";
import case2 from "../../public/images/webp/card2.webp";
import case3 from "../../public/images/webp/card3.webp";
import bluearrow from "../../public/images/webp/learn.webp";
import Image from "next/image";
const Casestudies = () => {
  return (
    <>
      <section>
        <div className="container relative">
          <Image
            className="absolute top-[-10%] start-[-30%]"
            width={938}
            height={631}
            src={caseupleft}
            alt="upperellipse"
          ></Image>
          <Image
            className="absolute right-[-40%] "
            width={1240}
            height={863}
            src={caseupright}
            alt="uplefellipse"
          ></Image>
          <Image
            className="absolute"
            width={902}
            height={699}
            src={casebottomleft}
            alt="bottomcaseellipse"
          ></Image>
          <Image
            className="absolute"
            width={611}
            height={425}
            src={casebottomright}
            alt="casebottomleft"
          ></Image>
          <h2 className="text-center font-Matter font-semibold text-[40px] leading-[135%] tracking-[-0.8px] mx-auto">
            Case Studies
          </h2>
          <p className="text-center pt-5 font-Matter text-[18px] leading-[155%] font-normal text-secondblack opacity-80">
            Discover the results we have produced for clients.
          </p>
          <div className="flex md:max-w-full max-w-[500px] md:flex-row px-4 md:px-0 flex-col items-center mt-[66px] case_boxshadow bg-white relative z-10 rounded-[20px]">
            <Image
              className="rounded-l-[15px] max-w-full sm:max-w-[451px]  mt-5 md:mt-0 md:rounded-r-[0] rounded-r-[15px]"
              height={196}
              src={case1}
              alt="case1"
            ></Image>
            <div className="flex items-center md:items-start flex-col md:ps-[34px] lg:ps-[64px]">
              <h4 className="font-Matter  max-w-[400px]  mt-4 md:mt-0 text-center md:text-start md:text-[20px] lg:text-[28px] font-semibold leading-[120%] md:max-w-[494px]">
                How Data-Driven Email Marketing Increased Sales for a B2B Office
                Sign Platform.
              </h4>
              <div className="flex items-center pt-2 mb-5 md:mb-0">
                <p className="text-skyblue leading-[155%] text-[18px] font-bold font-Matter">
                  Read case study
                </p>
                <Image
                  className="ms-[10px] "
                  width={20}
                  src={bluearrow}
                  alt="bluearrow"
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex md:max-w-full max-w-[500px] md:flex-row px-4 md:px-0 flex-col items-center mt-[32px] case_boxshadow bg-white relative z-10 rounded-[20px]">
            <Image
              className="rounded-l-[15px] max-w-full sm:max-w-[451px]  mt-5 md:mt-0 md:rounded-r-[0] rounded-r-[15px]"
              height={196}
              src={case2}
              alt="case1"
            ></Image>
            <div className="flex items-center md:items-start flex-col md:ps-[34px] lg:ps-[64px]">
              <h4 className="font-Matter  max-w-[400px]  mt-4 md:mt-0 text-center md:text-start md:text-[20px] lg:text-[28px] font-semibold leading-[120%] md:max-w-[494px]">
                How Data-Driven Email Marketing Increased Sales for a B2B Office
                Sign Platform.
              </h4>
              <div className="flex items-center pt-2 mb-5 md:mb-0">
                <p className="text-skyblue leading-[155%] text-[18px] font-bold font-Matter">
                  Read case study
                </p>
                <Image
                  className="ms-[10px] "
                  width={20}
                  src={bluearrow}
                  alt="bluearrow"
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex md:max-w-full max-w-[500px] md:flex-row px-4 md:px-0 flex-col items-center mt-[32px] case_boxshadow bg-white relative z-10 rounded-[20px]">
            <Image
              className="rounded-l-[15px] max-w-full sm:max-w-[451px]  mt-5 md:mt-0 md:rounded-r-[0] rounded-r-[15px]"
              height={196}
              src={case3}
              alt="case1"
            ></Image>
            <div className="flex items-center md:items-start flex-col md:ps-[34px] lg:ps-[64px]">
              <h4 className="font-Matter  max-w-[400px]  mt-4 md:mt-0 text-center md:text-start md:text-[20px] lg:text-[28px] font-semibold leading-[120%] md:max-w-[494px]">
                How Data-Driven Email Marketing Increased Sales for a B2B Office
                Sign Platform.
              </h4>
              <div className="flex items-center pt-2 mb-5 md:mb-0">
                <p className="text-skyblue leading-[155%] text-[18px] font-bold font-Matter">
                  Read case study
                </p>
                <Image
                  className="ms-[10px] "
                  width={20}
                  src={bluearrow}
                  alt="bluearrow"
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:pt-[78px] pt-[48px]">
            <button className="bg-purple relative z-20 leading-[120%] hover:bg-white hover:text-purple hover:border-[2px] border-solid border-purple duration-150 border-[2px] font-Matter font-semibold text-[16px] lg:text-[18px] rounded-[8px]  lg:w-[220px] flex justify-center whitespace-nowrap h-[62px] text-white md:py-[12px] lg:py-[19px] px-[20px] lg:px-[31px]">
              More Case Studies
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Casestudies;
