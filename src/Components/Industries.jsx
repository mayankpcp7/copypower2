import React from "react";
import Image from "next/image";
import Industry_1 from "../../public/images/webp/Industries_img_1.webp";
import Industry_2 from "../../public/images/webp/Industries_img_2.webp";
import Industry_3 from "../../public/images/webp/Industries_img_3.webp";
import Industry_4 from "../../public/images/webp/Industries_img_4.webp";
import Industry_5 from "../../public/images/webp/Industries_img_5.webp";
import Industry_6 from "../../public/images/webp/Industries_img_6.webp";
import Industry_7 from "../../public/images/webp/Industries_img_7.webp";
import Industry_8 from "../../public/images/webp/Industries_img_8.webp";
import Industry_9 from "../../public/images/webp/Industries_img_9.webp";
import Industry_10 from "../../public/images/webp/Industries_img_10.webp";
import Industry_11 from "../../public/images/webp/Industries_img_11.webp";
import Industry_12 from "../../public/images/webp/Industries_img_12.webp";
import Industry_13 from "../../public/images/webp/Industries_img_13.webp";
import Industry_14 from "../../public/images/webp/Industries_img_14.webp";
import Industry_15 from "../../public/images/webp/Industries_img_15.webp";
import Industry_16 from "../../public/images/webp/Industries_img_16.webp";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Industries = () => {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]

  };
  return (
    <div className="overflow-hidden bg-white relative z-[1] pt-5 md:pt-0">
      <div className="my-12 md:my-[60px] lg:my-20 xl:my-[123px]">
        <div className="max-w-[1200px] mx-auto px-3">
          <h2 className="text-center font-Matter text-[32px] md:text-[35px] lg:text-[40px] font-semibold leading-[135%] tracking-[-0.8px] text-main">
            Industries & Verticals
          </h2>
          <div className="flex items-center justify-center mt-3 md:mt-5">
            <p className="max-w-[519px] text-[18px] font-normal text-center text-secondblack font-Matter leading-[155%]">
              From startups to renowned companies, we have helped business in 15+
              industries and verticals.
            </p>
          </div>

          <Slider {...settings} className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[144px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_1} alt="industry_1" width={80} height={80}></Image>
                <p className="font-Matter text-[20px] font-semibold leading-[140%] text-center text-main pt-4">
                  E-commerce</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_2} alt="industry_2" width={80} height={80}></Image>
                <p className="font-Matter text-[20px] font-semibold whitespace-nowrap text-center leading-[140%] text-main pt-4">
                  Info-Products</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_3} alt="industry_3" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Jewellery</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_4} alt="industry_4" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Non-profits</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_5} alt="industry_5" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Fashion</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_6} alt="industry_6" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Sports</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_7} alt="industry_7" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Aviation</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-auto max-w-[139px] h-[144px] p-2.5">
                <Image className="mx-auto" src={Industry_8} alt="industry_8" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Apparel</p>
              </div>
            </div>
          </Slider>


          <Slider {...settings}>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[144px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_9} alt="industry_9" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  E-Learning</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-center">
              <div className="flex flex-col items-center max-w-[139px] h-[144px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_10} alt="industry_10" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Travel </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[144px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_11} alt="industry_11" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Finance</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[144px] mx-auto p-2.5">
                <Image src={Industry_12} className="mx-auto" alt="industry_12" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Hospitality</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[196px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_13} alt="industry_13" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Health & Wellness</p>
              </div>
            </div>

            <div className="fkex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[196px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_14} alt="industry_14" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Outdoor & Adventure</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[196px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_15} alt="industry_15" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Food & Beverages</p>
              </div>
            </div>

            <div className="flex itmes-center justify-center">
              <div className="flex flex-col items-center max-w-[139px] h-[196px] mx-auto p-2.5">
                <Image className="mx-auto" src={Industry_16} alt="industry_16" width={80} height={80}></Image>
                <p className="font-Matter text-center text-[20px] font-semibold leading-[140%] text-main pt-4">
                  Accessories</p>
              </div>
            </div>
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default Industries;
