import React from 'react';

const Banner = () => {
    return (
        <div className='flex pl-20 '>
            <div className='w-2/5 pt-14'>
                <h1 className='text-white text-6xl font-semibold py-2'>Websites.</h1>
                <h1 className='text-white text-6xl font-semibold py-2'>Marketing.</h1>
                <h1 className='text-[#4E89E1] text-6xl font-semibold py-2'>Just for Lawyers.</h1>
                <p className='text-2xl pt-8'>
                    <span className='text-white'>At </span>
                    <span className='text-[#4E89E1]'>Law Firm Sites</span>
                    <span className='text-white'>, we are dedicated to helping you get more cases through stunning website design and SEO.</span>
                </p>
                <button className='bg-[#4E89E1] mt-16 rounded-md px-8 py-3 text-white font-semibold'>
                    LET'S GO
                </button>
            </div>
            <div className='w-3/5 pt-16'>
                <img className='w-[728px] h-[560px]' src="/img-banner-v2.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;