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
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Industries = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-[123px]">
      {/* <DynamicImageSlide /> */}
      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="text-center font-Matter text-[40px] font-semibold leading-[135%] tracking-[-0.8px] text-main">
          Industries & Verticals
        </h2>
        <div className="flex items-center justify-center mt-5">
          <p className="max-w-[519px] text-[18px] font-normal text-center text-secondblack font-Matter leading-[155%]">
            From startups to renowned companies, we have helped business in 15+
            industries and verticals.
          </p>
        </div>

         <Slider {...settings}>
          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_1}
              alt="industry_1"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              E-commerce
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_2}
              alt="industry_2"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Info-Products
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_3}
              alt="industry_3"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Jewellery
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_4}
              alt="industry_4"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Non-profits
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_5}
              alt="industry_5"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Fashion
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_6}
              alt="industry_6"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Sports
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_7}
              alt="industry_7"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Aviation
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_8}
              alt="industry_8"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Apparel
            </p>
          </div>
        </Slider> 

        <Slider {...settings}>
          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_9}
              alt="industry_9"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              E-Learning
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_10}
              alt="industry_10"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Travel
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_11}
              alt="industry_11"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Finance
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_12}
              alt="industry_12"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Hospitality
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_13}
              alt="industry_13"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Health & Wellness
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_14}
              alt="industry_14"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Outdoor & Adventure
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_15}
              alt="industry_15"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Food & Beverages
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[139px]">
            <Image
              src={Industry_16}
              alt="industry_16"
              width={80}
              height={80}
            ></Image>
            <p className="font-Matter text-[20px] font-semibold leading-[140%] text-main pt-4">
              Accessories
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Industries;
