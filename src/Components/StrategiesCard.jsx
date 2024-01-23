import React from "react";
import Image from "next/image";
import Card from "../../public/images/webp/Frame 133.webp";
const StrategiesCard = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="relative z-[1]">
        <Image
          width={1395}
          height={840}
          className="absolute md:top-[-130%] lg:top-[-40%] md:end-[-20%] lg:end-[-30%]"
          src="/images/webp/Ellipse_65.webp"
          alt="ellipse_65"
        ></Image>
        <Image
          height={491}
          width={745}
          className="absolute top-[-200%] lg:top-[10%] md:end-[-10%] lg:end-[0%]"
          src="/images/png/Ellipse 64.png"
          alt="ellipse_64"
        ></Image>
        <Image
          width={1008}
          height={593}
          className="absolute top-[-60%] lg:top-[-40%] start-[-20%]"
          src="/images/webp/Ellipse_62.webp"
          alt="ellipse_62"
        ></Image>
        <Image
          width={664}
          height={686}
          className="absolute top-[10%] start-[-10%]"
          src="/images/webp/Ellipse_61.webp"
          alt="ellipse_61"
        ></Image>
        <div className="mb-12 md:mb-[60px] lg:mb-20 xl:mb-[124px] relative z-10  mt-12 sm:mt-0">
          <div className="max-w-[1140px] mx-auto px-3">
            <div className="max-w-[1140px] w-full rounded-[30px] skyblue_bg p-6 md:p-[34px]">
              <div className="flex items-center justify-center flex-wrap">
                <div className="lg:w-5/12">
                  <Image width={413} height={340} src={Card} alt="Card"></Image>
                </div>

                <div className="lg:w-7/12 mt-8 sm:mt-10 md:mt-12 lg:mt-0 lg:ps-12">
                  <p className="text-white ff_montserat text-[24px] font-semibold leading-[135%] tracking-[-0.48px] uppercase">
                    Free Guide
                  </p>
                  <h3 className="text-white font-Matter text-[27px] sm:text-[32px] md:text-[35px] lg:text-[40px] font-semibold leading-[135%] tracking-[-0.8px] mt-4">
                    Avoid Deadly Online Marketing Mistakes With These 7 Key
                    Strategies
                  </h3>
                  <div className="md:max-w-[189px] md:h-[62px] max-w-[150px] h-[52px] mt-4 sm:mt-8 md:mt-12">
                    <button className="font-Matter font-semibold leading-[120%] md:text-[18px] text-secondblack rounded-lg bg-Mustard_color w-full py-4 md:py-5 hover:bg-white transition-all duration-200">
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategiesCard;
