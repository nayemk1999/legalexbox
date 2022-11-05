import React from 'react';

const ThirdSection = () => {
    return (
        <div className='flex gap-12 mx-28 mt-24'>
            <div className='thirdSection w-8/12 h-[90%]'>
                <img src="/img-content-graph.png" alt="" />
            </div>
            <div className='w-2/5'>
                <h1 className="text-4xl text-white font-bold w-12/12 ">Get More Cases, Completely Organically.</h1>
                <p className="pt-8 text-gray-500 text-lg w-11/12 font-semibold">Our SEO experts work tirelessly to get you the results you’re hoping for. If you don’t see what you like, you don’t pay.</p>
                <h3 className="text-xl font-semibold text-white pt-10">What We Offer</h3>
                <p className="pt-5 text-lg text-gray-500">On-page SEO, Off-page SEO, Directory Listings, Social media Posting, Monthly SEO Reports, Dedicated SEO Manager, Local SEO, Content Marketing.</p>
                <button className="bg-[#4E89E1] mt-16 rounded-md px-12 py-3 text-white font-semibold">
                    LEARN MORE
                </button>
            </div>
        </div>
    );
};

export default ThirdSection;