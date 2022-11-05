import React from 'react';

const SixthSection = () => {
    return (
        <div className='mx-28 pt-32'>
            <h1 className='text-4xl text-white text-center font-semibold'>Client Success</h1>
            <div className='flex justify-center items-center gap-20 pt-16'>
                <div className='w-2/5'>
                    <div>
                        <img src="/img-client-success2.png.webp" />
                    </div>
                    <div>
                        <h5 className='text-lg text-gray-300 font-semibold pt-12'>ELIZABETH PERSONAL INJURY</h5>
                        <h4 className='text-3xl text-white font-bold pt-3'>Ashton E. Thomas Law Office</h4>
                        <p className='text-lg text-gray-400 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repudiandae amet laborum eveniet iusto.</p>
                    </div>
                </div>
                <div className='w-2/5'>
                    <div>
                        <img src="/img-client-success6.png.webp" />
                    </div>
                    <div>
                        <h5 className='text-lg text-gray-300 font-semibold pt-12'>PROVO PERSONAL INJURY AND BUSINESS</h5>
                        <h4 className='text-3xl text-white font-bold pt-3'>Howard Lewis & Petersen</h4>
                        <p className='text-lg text-gray-400 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repudiandae amet laborum eveniet iusto.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthSection;