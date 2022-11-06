import React from 'react';

const FifthSection = () => {
    return (
        <div className='flex items-center mx-28 gap-5 pt-28'>
            <div className='w-1/3'>
                <h1 className='text-[44px] text-white font-medium'>The Faces <br /> of Law Firm Sites</h1>
                <p className='pt-10 text-gray-400 text-lg'>It’s our job to make you look great. When you choose our services, we fully see ourselves as part of your team. We pride ourselves in being ridiculously responsive and invested in your success.</p>
                <button className="bg-[#4E89E1] mt-10 rounded-md px-12 py-3 text-white font-semibold">
                    MEET THE TEAM
                </button>
            </div>
            <div className='grid grid-cols-3 w-2/3 gap-8'>
                <div><img src="/img-jo.jpg.webp"/></div>
                <div><img src="/img-dirk.jpg.webp"/></div>
                <div><img src="/img-emma.jpg.webp"/></div>
            </div>
        </div>
    );
};

export default FifthSection;