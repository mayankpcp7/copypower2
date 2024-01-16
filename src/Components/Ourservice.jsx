import React from "react";
import Image from "next/image";
import seo from "../../public/images/webp/seo.webp";
import email from "../../public/images/webp/mail.webp";
import sales from "../../public/images/webp/sales.webp";
import martech from "../../public/images/webp/martech.webp";
import tick from "../../public/images/webp/tick.webp";
import blue from "../../public/images/webp/learn.webp";
import upperellipse from "../../public/images/webp/service_upper_yellow.webp";
import rightellipse from "../../public/images/webp/service_right.webp";
import bottomred from "../../public/images/webp/service_bottom_red.webp";
const Ourservice = () => {
  return (
    <section className="max-w-[1920px] mx-auto">
      <div className="py-[48px] md:py-[60px] lg:py-[80px] xl:py-[150px] relative">
        <Image className="absolute top-[-10%] z-0" src={upperellipse} alt="upperellipse"></Image>
        <Image className="absolute top-[20%] end-[-25%] z-0" src={rightellipse} alt="rightellipse"></Image>
        <Image className="absolute bottom-[-30%] start-[-20%] z-0" src={bottomred} alt="bottomred"></Image>
        <div className="container">
          <h2 className="text-center relative z-10 font-Matter font-semibold text-[32px] md:text-[35px] lg:text-[40px] leading-[135%] tracking-[-0.8px] mx-auto">
            Our Services
          </h2>
          <div className="flex items-center pt-[24] sm:pt-[35px] md:pt-[50px] lg:pt-[77px] justify-center flex-wrap relative z-20">
            <div className="md:w-10/12 w-full lg:w-6/12  lg:pe-5 lg:pb-5 pb-4">
              <div className="flex flex-col rounded-[28px] xl:w-[550px] h-[465px] items-start pt-[32px] bg-white sm:px-[25px] px-3 xl:px-[42px] ">
                <Image src={seo} width={80} height={80} alt="seo"></Image>
                <h5 className="text-secondblack font-Matter pt-6 font-semibold text-[22px] sm:text-[24px] md:text-[28px] tracking-[0.56px] leading-[120%]">
                  Content & SEO
                </h5>
                <p className="font-Matter leading-[155%] text-secondblack text-[16px] sm:text-[18px] max-w-[423px] pt-5 opacity-80">
                  Drive organic traffic to your website with flawless
                  implementation of Google E-E-A-T guidelines.
                </p>
                <div className="flex pt-6 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Content & SEO Strategy
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Content Writing
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Content Publishing & Distribution
                  </p>
                </div>
                <div className="flex items-center pt-4 lg:pt-11 cursor-pointer">
                  <p className="font-Matter font-bold leading-[155%] me-[10px] text-skyblue">
                    Learn More
                  </p>
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={blue}
                    alt="arrow"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="md:w-10/12 w-full lg:w-6/12  lg:ps-5 lg:pb-5 pb-4">
              <div className="flex flex-col rounded-[28px] xl:w-[550px] h-[465px] items-start  pt-[32px] bg-white sm:px-[25px] px-3 xl:px-[42px] ">
                <Image src={email} width={80} height={80} alt="seo"></Image>
                <h5 className="text-secondblack font-Matter pt-6 font-semibold text-[22px] sm:text-[24px] md:text-[28px] tracking-[0.56px] leading-[120%]">
                  Email & Automation
                </h5>
                <p className="font-Matter leading-[155%] text-secondblack text-[18px] max-w-[423px] pt-5 opacity-80">
                  Nurture relationships and generate revenue on auto-pilot with
                  email and automation.
                </p>
                <div className="flex pt-6 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Email Marketing Strategy
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Email Campaign Management
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Email Marketing Automation
                  </p>
                </div>
                <div className="flex items-center pt-4 lg:pt-11 cursor-pointer">
                  <p className="font-Matter font-bold leading-[155%] me-[10px] text-skyblue">
                    Learn More
                  </p>
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={blue}
                    alt="arrow"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="md:w-10/12 w-full lg:w-6/12  lg:pe-5 lg:pt-5 pb-4">
              <div className="flex flex-col rounded-[28px] xl:w-[550px] h-[465px] items-start  pt-[32px] bg-white sm:px-[25px] px-3 xl:px-[42px] ">
                <Image src={sales} width={80} height={80} alt="seo"></Image>
                <h5 className="text-secondblack font-Matter pt-6 font-semibold text-[22px] sm:text-[24px] md:text-[28px]  tracking-[0.56px] leading-[120%]">
                  Sales Funnels
                </h5>
                <p className="font-Matter leading-[155%] text-secondblack text-[18px] max-w-[423px] pt-5 opacity-80">
                  Improve conversions with landing pages, sales pages, and CRO
                  services.
                </p>
                <div className="flex pt-6 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Landing Pages
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Marketing & Sales Funnels
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Conversion Rate Optimization
                  </p>
                </div>
                <div className="flex items-center pt-4 lg:pt-11 cursor-pointer">
                  <p className="font-Matter font-bold leading-[155%] me-[10px] text-skyblue">
                    Learn More
                  </p>
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={blue}
                    alt="arrow"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="md:w-10/12 w-full lg:w-6/12  lg:ps-5 lg:pt-5 pb-4">
              <div className="flex flex-col rounded-[28px] xl:w-[550px] h-[465px] items-start  pt-[32px] bg-white sm:px-[25px] px-3 xl:px-[42px] ">
                <Image src={martech} width={80} height={80} alt="seo"></Image>
                <h5 className="text-secondblack font-Matter pt-6 font-semibold text-[22px] sm:text-[24px] md:text-[28px] tracking-[0.56px] leading-[120%]">
                  MarTech Services
                </h5>
                <p className="font-Matter leading-[155%] text-secondblack text-[18px] pt-5 opacity-80">
                  Leverage the power of MarTech to accelerate growth.
                </p>
                <div className="flex pt-6 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Chat Bots
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Referral & Affiliate Programs
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={tick}
                    alt="tick"
                  ></Image>
                  <p className="font-Matter text-secondblack text-[16px] leading-[155%]">
                    Paid Campaigns
                  </p>
                </div>
                <div className="flex items-center pt-4 lg:pt-11 cursor-pointer">
                  <p className="font-Matter font-bold leading-[155%] me-[10px] text-skyblue">
                    Learn More
                  </p>
                  <Image
                    className="me-[10px]"
                    width={20}
                    height={20}
                    src={blue}
                    alt="arrow"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservice;
