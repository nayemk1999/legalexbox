import React from 'react';

const SecondSection = () => {
    return (
        <div className='pt-24 pl-28 flex'>
            <div className='w-2/5'>
                <h1 className='text-4xl text-white font-bold w-9/12 pt-16'>A Website That Impresses</h1>
                <p className='pt-8 text-gray-500 text-lg w-11/12 font-semibold'>For over 20 years, we’ve created great lawyer websites that create a stunning first impression. You deserve a great website too.</p>
                <h3 className='text-xl font-semibold text-white pt-10'>What We Offer</h3>
                <p className='pt-5 w-10/12 text-lg text-gray-500'>Website Design, Branding Design, Mobile-Friendly Websites, Logo Design, Complete Website Control.</p>
                <button className='bg-[#4E89E1] mt-16 rounded-md px-8 py-3 text-white font-semibold'>
                    LEARN MORE
                </button>
            </div>
            <div>
                <div>
                    <div className='w-[653px] h-[350px] bg-gradient-to-r from-[#03142D] to-[#132238] z-10'>
                        <img src="/img-content-karentosh.png" className='z-20 absolute'  alt="" />
                    </div>
                    <div>
                    </div>
                </div>
                {/* <div className=' rounded-3xl w-[653px] h-[380px]'>
                    <img src="/img-content-karentosh.png" className='w-[653px] h-[457px] bg-gradient-to-r from-[#03142D] to-[#132238]' alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default SecondSection;