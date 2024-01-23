import React from "react";
import card_img_1 from "../../public/images/webp/caed_img_1.webp";
import card_img_2 from "../../public/images/webp/card_img_2.webp";
import card_img_3 from "../../public/images/webp/card_img_3.webp";
import ellipse_61 from "/public/images/webp/ellipse_61.webp";
import ellipse_59 from "/public/images/webp/ellipse_59.webp";
import ellipse_57 from "/public/images/webp/ellipse_57.webp";
import ellipse_58 from "/public/images/webp/ellipse_58.webp";
import Arrow from "../../public/images/webp/Arrow.webp";
import Image from "next/image";

const ArticleSec = () => {
  return (
    <div className="mx-auto max-w-[1920px]">
      <div className="relative">
        <Image
          width={1215}
          height={800}
          className="absolute top-[-5%] sm:top-[-10%] md:top-[-14%] lg:top-[-30%] start-[-18%] md:start-[-20%]"
          src="/images/webp/ellipse_56.webp"
        ></Image>
        <Image
          width={563}
          height={745}
          className="absolute top-[0%] sm:top-[-18%] md:top-[-20%] lg:top-[-50%] end-[-25%]"
          src={ellipse_61}
        ></Image>
        <Image className="absolute top-[0%] start-0" src={ellipse_59}></Image>
        <Image
          width={435}
          height={582}
          className="absolute top-[25%] sm:top-[15%] md:top-[10%] start-[-25%] md:start-[-30%]"
          src={ellipse_57}
        ></Image>
        <Image
          height={759}
          width={664}
          className="absolute top-[35%] md:top-[10%] end-[-30%]"
          src={ellipse_58}
        ></Image>
        <div className="py-12 md:py-[60px] lg:py-20 xl:py-[150px] relative z-[10]">
          <div className="max-w-[1140px] mx-auto px-3">
            <h2 className="text-[32px] md:text-[35px] lg:text-[40px] font-Matter font-semibold leading-[135%] tracking-[-0.8px] text-main text-center pb-0.5">
              Recent Articles
            </h2>

            <div className=" py-5 sm:py-12 md:py-16 flex flex-wrap justify-center items-center gap-10">
              <div className="max-w-[345px] w-full rounded-[15px] bg-white card_shadow overflow-hidden cursor-pointer">
                <Image
                  width={347}
                  height={42}
                  src={card_img_1}
                  alt="card_img_1"
                ></Image>

                <h3 className="font-Matter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[145%] max-w-[270px] mx-10 mt-10 pb-5">
                  A comprehensive guide to email marketing automation.
                </h3>

                <div className="flex items-center gap-2.5 pb-14">
                  <a
                    href="#"
                    className="font-Matter text-[18px] font-bold leading-[155%] text-skyblue ps-10"
                  >
                    Read now
                  </a>
                  <Image wi dth={20} src={Arrow} alt="arrow"></Image>
                </div>
              </div>

              <div className="max-w-[345px] w-full rounded-[15px] bg-white card_shadow overflow-hidden cursor-pointer">
                <Image
                  width={347}
                  height={42}
                  src={card_img_2}
                  alt="card_img_1"
                ></Image>

                <h3 className="font-Matter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[145%] max-w-[270px] mx-10 mt-10 pb-5">
                  Everything you need to know about Google E-E-A-T guidelines
                </h3>

                <div className="flex items-center gap-2.5 pb-14">
                  <a
                    href="#"
                    className="font-Matter text-[16px] sm:text-[18px] font-bold leading-[155%] text-skyblue ps-10"
                  >
                    Read now
                  </a>
                  <Image width={20} src={Arrow} alt="arrow"></Image>
                </div>
              </div>

              <div className="max-w-[345px] w-full rounded-[15px] bg-white card_shadow overflow-hidden cursor-pointer">
                <Image
                  width={347}
                  height={42}
                  src={card_img_3}
                  alt="card_img_1"
                ></Image>
                <p className="font-Matter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[145%] max-w-[270px] mx-10 mt-10 pb-5">
                  Which marketing automation platform is right for you?{" "}
                </p>

                <div className="flex items-center gap-2.5 pb-14">
                  <a
                    href="#"
                    className="font-Matter text-[16px] sm:text-[18px] font-bold leading-[155%] text-skyblue ps-10"
                  >
                    Read now
                  </a>
                  <Image width={20} src={Arrow} alt="arrow"></Image>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-3 pt-0.5">
              <button className="text-[16px] md:text-[18px] font-semibold font-Matter leading-[120%] text-secondblack border-solid border border-secondblack py-2.5 md:py-5 px-3 md:px-7 h-[52px] md:h-[62px] w-[150px] md:w-[176px] rounded-lg hover:bg-secondblack hover:text-white transition-all duration-300">
                More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSec;
