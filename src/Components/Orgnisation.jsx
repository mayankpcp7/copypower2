import Image from 'next/image'
import React from 'react'
import Rob_Burdick from "../../public/images/webp/Rob Burdick.webp"
import bubbles_img from "../../public/images/webp/bubbles-img.webp"
const Orgnisation = () => {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-3 relative z-[50]'>
                <div className='border border-solid border-black bg-white rounded-[20px] max-w-[1068px] relative'>
                    <Image className='absolute bottom-[60%] start-[65%] md:bottom-[3%] md:start-[20%]' src={bubbles_img} alt='bubbles_img'></Image>
                    <div className='flex items-center md:items-start flex-col md:flex-row py-[30px] md:py-[48px] lg:py-[56px] px-3 sm:px-[30px] md:px-[48px] lg:px-[86px] gap-[48px] lg:gap-[82px]'>

                        <div className='max-w-[225px] h-[225px] relative z-1'>
                            <Image src={Rob_Burdick} alt='Rob_Burdick'></Image>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='font-Matter text-[24px] font-semibold leading-[145%] text-secondblack'>They have an amazing ability to adapt to the needs of your organization</h3>
                            <p className='font-Matter text-[20px] font-normal leading-[155%] text-secondblack opacity-80 my-4'>Before Copypower Media, we sent out a bland email each week that was getting less and less reads. Now that we use their services we send out unique and engaging emails that more of our list actually reads. </p>
                            <p className='leading-[140%] font-Matter font-semibold text-[20px] text-yellow mt-3'>Rob Burdick</p>
                            <p className='leading-[155%] font-Matter font-normal text-base text-yellow mt-0.5'>Co-founder & COO Drone U</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orgnisation