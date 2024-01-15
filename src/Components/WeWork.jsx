import React from "react";
import { work } from "./common/Helper";
import Image from "next/image";
const WeWork = () => {
  return (
    <>
      <section className="pt-[44px]">
        <div className="container">
          <h2 className="text-main font-Matter font-semibold xl:text-[40px] leading-[135%] text-center max-w-[797px] mx-auto">
            We work with you to create scalable, repeatable full-stack marketing
          </h2>
          <div className="flex flex-wrap items-center justify-between mt-[66px]">
            {work.map((process) => {
              return (
                <>
                  <div className="w-6/12 px-3 mb-[140px]" key={process.id}>
                    <Image src={process.img} width={512} height={447}></Image>
                  </div>
                  <div className="w-5/12 px-3 mb-[140px]" key={process.id}>
                    <h4 className="text-start text-black font-Matter text-[28px] leading-[140%]">
                      {process.Heading}
                    </h4>
                    <div className="flex items-center mt-[36px">
                      <Image
                        className="me-2"
                        src={process.check}
                        width={28}
                        height={28}
                      ></Image>
                      <p className="font-matter text-secondblack text-[20px] leading-[145%] font-normal">
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
                      <p className="font-matter text-secondblack text-[20px] leading-[145%] font-normal">
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
                      <p className="font-matter text-secondblack text-[20px] leading-[145%] font-normal">
                        {process.pera3}
                      </p>
                    </div>
                    <div className="flex items-center mt-[13px]">
                      <Image
                        className="me-2"
                        src={process.check}
                        width={28}
                        height={28}
                      ></Image>
                      <p className="font-matter text-secondblack text-[20px] leading-[145%] font-normal">
                        {process.pera4}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WeWork;
