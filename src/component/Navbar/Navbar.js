import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-20 py-6'>
            <div>
                <h1 className='text-white text-4xl'>legalexbox</h1>
            </div>
            <div>
                <ul className='flex text-white gap-12 text-lg font-semibold '>
                    <li>Service</li>
                    <li>Service</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className='flex text-white items-center gap-10'>
                <h3 className='text-lg font-medium'>Client Login</h3>
                <h3 className='text-lg font-medium bg-[#375E93] px-8 py-3 rounded-md'>Let's Get Started</h3>
            </div>
        </div>
    );
};

export default Navbar;