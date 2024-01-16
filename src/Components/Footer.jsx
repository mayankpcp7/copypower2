import React from 'react'
import logoimg from '../../public/images/webp/Footer_logo.webp'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='overflow-hidden'>
            <div className='bg-secondblack pt-12 md:pt-[69px] pb-5 md:pb-[32px] relative z-[1]'>
                <div className='max-w-[1140px] mx-auto px-3'>
                    <div className='flex justify-between gap-10 flex-wrap'>

                        <div className='w-full sm:max-w-[272px]'>
                            <ul>
                                <li className='text-white font-Matter text-[20px] font-semibold leading-[160%]'>Services</li>
                                <li className=' mt-5'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Email Marketing Strategy & Audit</a></li>
                                <li className=' mt-3'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Email Campaign Management</a></li>
                                <li className=' mt-3'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Email Template Production</a></li>
                                <li className=' mt-3'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Email Deliverability</a></li>
                                <li className=' mt-3'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>ESP Vendor Evaluation & Migration</a></li>
                            </ul>

                            <ul className='mt-10 sm:mt-[109px]'>
                                <li className='text-white font-Matter text-[20px] font-semibold leading-[160%]'>Verticals</li>
                                <li className='mt-5'><a className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]' href="#">B2B Email Marketing Agency</a></li>
                                <li className='mt-3'><a className='text-light_white font-Mater font-normal text-[16px] leading-[155%]  whitespace-nowrap' href="#">E-commerce Email Marketing Agency</a></li>

                            </ul>
                        </div>

                        <div className='sm:max-w-[273px]'>
                            <ul>
                                <li className='text-white font-Matter text-[20px] font-semibold leading-[160%]'>Platforms</li>
                                <li className=' mt-5' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Klaviyo Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Hubspot Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Mailchimp Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>SendinBlue Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Aweber Email Markeing Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Active Campaign Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Infusionsoft Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Campaign Monitor Email Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Braze Email Expert</a></li>
                                <li className=' mt-4' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Omnisend Emaill Experts</a></li>
                                <li className=' mt-3' ><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Keap Emall Experts</a></li>
                            </ul>
                        </div>

                        <div className='w-full sm:max-w-[171px] xl:ps-3'>
                            <ul>
                                <li className='text-white font-Matter text-[20px] font-semibold leading-[160%]'>About</li>
                                <li className=' mt-5'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Who we are?</a></li>
                                <li className=' mt-3'><a className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]' href="#">Testimonials</a></li>
                                <li className=' mt-3'><a className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]' href="#">Careers</a></li>
                                <li className=' mt-3'><a className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]' href="#">Contact us</a></li>
                                <li className=' mt-3'><a className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]' href="#">For Agencies</a></li>
                            </ul>

                            <ul className='mt-10'>
                                <li className='text-white font-Matter text-[20px] font-semibold leading-[160%]'>Resources</li>
                                <li className=' mt-5'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%]'>Blog</a></li>
                                <li className=' mt-3'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%] whitespace-nowrap'>Case Studies</a></li>
                                <li className=' mt-3 '><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%] whitespace-nowrap'>Email Marketing Guides</a></li>
                                <li className=' mt-3'><a href="#" className='text-light_white font-Mater font-normal  text-[16px] leading-[155%] whitespace-nowrap'>Ebooks & Downloads</a></li>

                            </ul>
                        </div>

                        <div className='w-full sm:max-w-[297px] sm:ps-3'>
                            <h3 className='font-Matter text-[24px] font-normal leading-[140%] text-white'>Subscribe to Our Marketing Newsletter &
                                <span className='font-Opensans'>  Get 21+ Proven Email Campaign Ideas for Free</span></h3>

                            <p className='opacity-80 text-white font-Matter text-[16px] font-normal leading-[155%] mt-4'>Super charge your email marketing instantly with these proven email marketing campaigns</p>

                            <div className='max-w-[400px] sm:max-w-[287px] border border-white rounded-lg overflow-hidden p-2.5 bg-white mt-6'>
                                <input type="text" placeholder='Your Name' className='w-full bg-white text-black opacity-60 outline-none' />
                            </div>

                            <div className='max-w-[400px] sm:max-w-[287px] border border-white rounded-lg overflow-hidden p-2.5 bg-white mt-4'>
                                <input type="text" placeholder='Your Email' className='w-full bg-white text-black opacity-60 outline-none' />
                            </div>

                            <div className='max-w-[135px] mt-6 sm:mt-8 md:mt-10'>
                                <button className='font-Matter font-semibold leading-[120%] text-secondblack rounded-lg bg-Mustard_color w-full hover:bg-white transition-all duration-200 py-4'>Subscribe</button>
                            </div>

                        </div>
                    </div>

                    <div className='flex itmes-center mt-10 md:mt-12 lg:mt-16 xl:mt-24 gap-4 md:gap-6 lg:gap-8 xl:gap-11 flex-wrap'>
                        <Image width={273} height={42} src={logoimg}></Image>

                        <div className='flex items-center gap-3 flex-wrap'>
                            <a href="#" className='flex items-center text-white opacity-80'>Privacy Policy | .</a>
                            <a href="#" className='flex items-center text-white opacity-80'>Terms of use | . </a>
                            <p className='flex items-center text-white opacity-80'>Copyright {currentYear} . Copypower Media |</p>
                            <p className='flex items-center text-white opacity-80'>All Rights Reserved.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer