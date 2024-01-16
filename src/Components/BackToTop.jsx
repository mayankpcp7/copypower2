import React from 'react'
import topUp from '../../public/images/png/Up_arrow.png'
import { useState } from 'react';
import Image from 'next/image';


const BackToTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='max-w-[1920px] mx-auto'>
                <div
                    onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="circle" ref={scrollTop}>
                    <div className='relative z-[50]'>
                        <Image src={topUp} alt='topup'></Image>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BackToTop
