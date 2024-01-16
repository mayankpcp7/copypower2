import React from "react";
import Image from "next/image";
import headerimg from "../../public/images/webp/headerimg.webp";
import headerupperellipse from "../../public/images/webp/ellipse_upper_img.webp";
import headerrightellipse from "../../public/images/webp/headerrightellipse.webp";
import headerredellipse from "../../public/images/webp/red_eelipse_header.webp";
import NavBar from "./MyNav";
const Header = () => {
  return (
    <>
      <header className="2xl:min-h-screen flex flex-col justify-center relative">
        <main className="flex flex-col 2xl:mt-0 sm:mt-[97px] mt-[57px] items-center jsutify-center pb-[80px] md:pb-[123px]">
          <div className="container">
            <div className="flex flex-col items-center  relative">
              <Image
                src={headerredellipse}
                width={772}
                height={677}
                className="absolute  top-[10%] z-0 start-[-40%]"
              ></Image>
              <Image
                className="absolute z-0 end-[-10%]"
                src={headerrightellipse}
                width={552}
                height={626}
                alt="haederellipseimg"
              ></Image>
              <Image
                className="absolute hidden lg:block z-0 end-[-1%] top-[30%]"
                src={headerimg}
                width={180}
                height={226}
                alt="haederellipseimg"
              ></Image>
              <h1 className="font-Matter relative tracking-[-1.44px] z-[1] sm:text-[55px] text-[50px] md:text-[60px] lg:text-[65px] xl:text-[72px] font-bold max-w-[899px] text-center text-main leading-[115%]">
                Your A-Level Marketing Execution Team
              </h1>
              <p className="font-Matter relative z-[1] text-secondblack text-[24px] max-w-[599px] leading-[140%] pt-5 text-center">
                We partner with e-com brands to accelerate growth & revenue with
                full funnel marketing
              </p>
              <button className="bg-purple relative z-[1] leading-[120%] hover:bg-white hover:text-purple hover:border-[2px] border-solid border-purple duration-150 border-[2px] font-Matter font-semibold text-[16px] lg:text-[18px] rounded-[8px]  lg:w-[248px] whitespace-nowrap h-[62px] mt-[35px] sm:mt-[47px] text-white md:py-[12px] lg:py-[19px] px-[20px] lg:px-[31px]">
                Book Free Consultation
              </button>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
