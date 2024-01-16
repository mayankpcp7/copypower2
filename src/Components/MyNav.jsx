"use client";
import Image from "next/image";
import { React, useState } from "react";
import logo from "../../public/images/webp/navlogo.webp";
import droparrow from "../../public/images/webp/droparrow.webp";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
const MyNav = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  // if (!head) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "unset";
  // }
  return (
    <>
      <section className="relative z-[2] animate__rotateInDownRight">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center py-[20px] pe-3 xl:pe-5">
            <div>
              <Image
                className="w-[340px] cursor-pointer"
                src={logo}
                alt="logo"
              ></Image>
            </div>
            <div onClick={showUl} className="z-20 xl:hidden">
              <h3 className="text-purple text-[30px]">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
            <div
              className={`flex flex-col xl:flex-row fixed xl:relative w-full min-h-screen xl:min-h-0 top-[0] left-[-100%] xl:left-0 ttransition-opacity duration-700 xl:transition-none  justify-center xl:justify-end z-20
           items-center ${head ? "" : "!left-0 backdrop-blur-lg"}`}
            >
              <ul className="flex  flex-col xl:flex-row items-center">
                <li className="relative transition-all duration-100 xl:pe-4 pb-4 xl:pb-0">
                  <div className="relative inline-block text-left group">
                    <button className="flex items-center font-Matter text-secondblack">
                      Services
                      <Image
                        className="w-[20px] mt-1 h-[20px]"
                        src={droparrow}
                        alt="arrow"
                      ></Image>
                    </button>
                    <div className="absolute left-0 z-20 font-normal text-base  w-40 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 pointer-events-none mt-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                      <ul className="py-1">
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="#"
                            target="_blank"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 1
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 2
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative transition-all duration-100 xl:pe-4 pb-4 xl:pb-0">
                  <div className="relative inline-block text-left group">
                    <button className="flex items-center font-Matter text-secondblack">
                      Testimonials
                      <Image
                        className="w-[20px] mt-1 h-[20px]"
                        src={droparrow}
                        alt="arrow"
                      ></Image>
                    </button>
                    <div className="absolute left-0 z-10 font-normal text-base  w-40 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 pointer-events-none mt-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                      <ul className="py-1">
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="#"
                            target="_blank"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 1
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 2
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative transition-all duration-100 xl:pe-4 pb-4 xl:pb-0">
                  <div className="relative inline-block text-left group">
                    <button className="flex items-center font-Matter text-secondblack">
                      Case Studies
                      <Image
                        className="w-[20px] mt-1 h-[20px]"
                        src={droparrow}
                        alt="arrow"
                      ></Image>
                    </button>
                    <div className="absolute left-0 z-20 font-normal text-base  w-40 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 pointer-events-none mt-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                      <ul className="py-1">
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="#"
                            target="_blank"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 1
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 2
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative transition-all duration-100 xl:pe-4 pb-4 xl:pb-0">
                  <div className="relative inline-block text-left group">
                    <button className="flex items-center font-Matter text-secondblack">
                      About
                      <Image
                        className="w-[20px] mt-1 h-[20px]"
                        src={droparrow}
                        alt="arrow"
                      ></Image>
                    </button>
                    <div className="absolute left-0 z-20 font-normal text-base  w-40 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 pointer-events-none mt-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                      <ul className="py-1">
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="#"
                            target="_blank"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 1
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 2
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative transition-all duration-100 xl:pe-4 pb-4 xl:pb-0">
                  <div className="relative inline-block text-left group">
                    <button className="flex items-center font-Matter text-secondblack">
                      Resources
                      <Image
                        className="w-[20px] mt-1 h-[20px]"
                        src={droparrow}
                        alt="arrow"
                      ></Image>
                    </button>
                    <div className="absolute left-0 z-20 font-normal text-base  w-40 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 pointer-events-none mt-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-700">
                      <ul className="py-1">
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="#"
                            target="_blank"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 1
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 2
                          </a>
                        </li>
                        <li className=" hover:bg-purple hover:text-white">
                          <a
                            href="xyz.com"
                            className="font-Matter text-[16px] text-seconblack leading-[155%]"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="pb-4 xl:pb-0">
                  <a
                    className="font-Matter text-secondblack text-[16px]"
                    href="#"
                    target="_blank"
                  >
                    Career
                  </a>
                </li>
                <button className="bg-purple font-Matter border xl:ms-[66px] border-solid px-5 py-4 rounded-[8px] text-white   hover:text-purple border-purple hover:bg-white hover:border-purple font-semibold text-[16px] transition-all duration-150">
                  Free Consultation
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyNav;
