import React from 'react'
import reloder_img from '../../public/images/webp/navlogo.webp'

const Pre_loder = () => {
    return (
        <div>
            <div className='min-h-100 flex justify-center items-center bg-color fixed w-full top-0 z-[30] start-0' id='preloader'>
                <div><img className='w-[200px] loader' src={reloder_img} alt="logo" /></div>
            </div>
        </div>
    )
}

export default Pre_loder