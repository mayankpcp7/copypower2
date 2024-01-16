import Image from 'next/image'
import React from 'react'
import Rob_Burdick from "../../public/images/webp/Rob Burdick.webp"
import bubbles_img from "../../public/images/webp/bubbles-img.webp"
import ellipse_52 from "../../public/images/webp/Ellipse_52.webp"
import ellipse_47 from "../../public/images/webp/Ellipse_47.webp"
import ellipse_48 from "../../public/images/webp/Ellipse_48.webp"
import ellipse_45 from "../../public/images/webp/Ellipse_45.webp"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Orgnisation = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        Arrows: true,
        // prevArrow: $(".prev1"),
        // nextArrow: $(".Next1"),
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='relative max-w-[1920px] mx-auto overflow-hidden-bottom'>
            <Image className='absolute top-0' src={ellipse_52} alt='ellipse_52'></Image>
            <Image className='absolute top-[-25%] start-[-24%]' src={ellipse_47} alt='ellipse_47'></Image>
            <Image className='absolute bottom-[-80%] end-[-20%]' src={ellipse_48} alt='ellipse_48'></Image>
            <Image className='absolute top-[-40%] end-[-15%]' src={ellipse_45} alt='ellipse_45'></Image>
            <div className='max-w-[1220px] mx-auto relative'>

                <div className='absolute start-[5%] xl:start-0 top-[95%] md:top-[90%] xl:top-[42%] prev1'>
                    <div className='relative z-[100]'>
                        <svg className='fill sm:w-[40px] w-[30px]' viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20.5" cy="20" r="19.5" stroke="#621C69" />
                            <path d="M24.5 29L15.5 20L24.5 11" stroke="#621C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='absolute end-[5%] xl:end-0 top-[94%] md:top-[90%] xl:top-[42%] Next1'>
                    <div className='relative z-[100]'>
                        <svg className='fill sm:w-[40px] w-[30px]' height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" stroke="#621C69" />
                            <path d="M16 11L25 20L16 29" stroke="#621C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className='max-w-[1140px] mx-auto px-3 relative z-[50] pb-12 md:pb-[60px] lg:pb-[80px] xl:pb-[224px] pt-12 md:pt-[60px] lg:pt-[80px] xl:pt-[155px]'>
                    <Slider {...settings}>
                        <div className='border-transparent border-solid bg-white rounded-[20px] max-w-[1068px] relative orgnisation_card_shadow'>
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

                        <div className='border-transparent border-solid bg-white rounded-[20px] max-w-[1068px] relative orgnisation_card_shadow'>
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

                        <div className='border-transparent border-solid bg-white rounded-[20px] max-w-[1068px] relative orgnisation_card_shadow'>
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

                        <div className='border-transparent border-solid bg-white rounded-[20px] max-w-[1068px] relative orgnisation_card_shadow'>
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

                        <div className='border-transparent border-solid bg-white rounded-[20px] max-w-[1068px] relative orgnisation_card_shadow'>
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



                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Orgnisation