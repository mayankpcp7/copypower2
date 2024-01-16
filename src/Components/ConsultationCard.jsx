import React from 'react'
import man_img from '../../public/images/webp/man_img.webp'
import Image from 'next/image'
import ellipse_67 from '../../public/images/webp/ellipse_67.webp'
import ellipse_64 from '../../public/images/webp/ellipse_64.webp'
import ellipse_68 from '../../public/images/webp/ellipse_68.webp'

const ConsultationCard = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <div className='relative'>
                <Image className='absolute top-[-80%] start-[-20%] lg:top-[-100%] lg:start-[-30%]' src={ellipse_67}></Image>
                <Image className='absolute bottom-[-80%] xl:bottom-[-64%] end-[0%] xl:end-[-40%]' src={ellipse_64}></Image>
                <Image className='absolute bottom-0 lg:bottom-[-100%] xl:bottom-[-60%] start-[0%]' src={ellipse_68}></Image>
                <div className='pb-12 md:pb-[60px] lg:pb-20 xl:pb-[150px] mx-auto max-w-[1140px] px-3 relative z-[50]'>
                    <div className='max-w-[650px] lg:max-w-[1140px] mx-auto !w-full border-white rounded-[22px] bg-white overflow-hidden consltation_card_shadow mt-12 sm:mt-0'>
                        <div className='flex items-center justify-between flex-col-reverse lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-[80px] xl:gap-[150px]'>

                            <div className='px-3 sm:pe-0 lg:ps-[48px] xl:ps-[72px]'>
                                <h3 className='font-Matter text-[32px] md:text-[38px] lg:text-[40px] font-semibold leading-[135%] tracking-[-0.8%] text-secondblack'>Get Free Consultation</h3>
                                <p className='font-Matter text-[18px] font-normal leading-[155%] text-secondblack mt-2 lg:mt-4'>Get in touch today to qualify for a FREE personalized marketing plan.</p>
                                <div className='mb-3 mt-6 sm:mb-6 md:mb-8 md:mt-8 lg:mb-0'>
                                    <button className="bg-purple leading-[120%] hover:bg-white hover:text-purple hover:border-[2px] border-solid border-purple duration-150 border-[2px] font-Matter font-semibold text-[16px] md:text-[18px] rounded-[8px] w-[150px] h-[52px] md:w-[189px] whitespace-nowrap md:h-[62px] text-white py-[15px] md:py-[19px]  px-[15px] md:px-[31px]">Download Now</button>
                                </div>
                            </div>
                            <Image width={461} height={328} src={man_img} alt='man_img'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultationCard