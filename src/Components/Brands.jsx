import React from "react";
import Image from "next/image";
import crunchtime from "../../public/images/webp/crunchtimecoaching.webp";
import drone from "../../public/images/webp/drone.webp";
import handpan from "../../public/images/webp/handpan.webp";
import hrm from "../../public/images/webp/hrm.webp";
import hoc from "../../public/images/webp/hoc.webp";
import crna from "../../public/images/webp/crnaschools.webp";
import austim from "../../public/images/webp/autim360.webp";
import ustherapy from "../../public/images/webp/ustherapy.webp";
const Brands = () => {
  return (
    <section className="overflow-hidden z-10">
      <div className="pb-[48px] pt-[6px] md:pt-0 md:pb-[60px] lg:pb-[80px] xl:py-[100px]">
        <div className="container">
          <h2 className="text-center max-w-[738px] font-Matter font-semibold text-[28px] sm:text-[30px] md:text-[35px] lg:text-[40px] leading-[135%] tracking-[-0.8px] mx-auto">
            We are proud to have worked with these amazing brands
          </h2>
          <div className="flex items-center pt-5 sm:pt-10 md:pt-12 lg:pt-[56px] max-w-[1031px] mx-auto justify-center flex-wrap relative z-20">
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image
                  src={crunchtime}
                  width={170}
                  height={46}
                  alt="crunchtime"
                ></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={drone} width={174} height={26}></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={handpan} width={80} height={55}></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={hrm} width={149} height={48}></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={hoc} width={75} height={64}></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={crna} width={148} height={54}></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={austim} width={152} height={44}></Image>
              </div>
            </div>
            <div className="md:w-4/12 sm:6/12 xs:w-10/12 lg:w-3/12 p-3">
              <div className="flex justify-center items-center border bg-white border-solid border-[#e5e5e5] rounded-[15px] w-[225px] box_shadow transition-all duration-150 h-[100px]">
                <Image src={ustherapy} width={165} height={27}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
