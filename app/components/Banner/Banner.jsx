import React from 'react';
import Button from '../Button/Button';

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute z-10 w-full">
                <iframe
                    className="w-full h-screen object-fill"
                    src="https://www.youtube.com/embed/dlgB6updOh8?autoplay=1&mute=1&controls=0&playlist=dlgB6updOh8&loop=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="w-full h-screen absolute z-40 top-0 bg-black opacity-85">
                <div className='flex flex-col justify-center items-center h-full text-white'>
                    <div className='border-l-4 border-orange-500 pl-5'>
                        <h1 className='lg:text-6xl text-2xl font-bold'>Muhammad Jahirul Islam</h1>
                        <h4 className='lg:text-2xl font-semibold py-4'>Entrepreneur <span className='text-orange-500'>|</span> Teacher <span className='text-orange-500'>|</span> Author</h4>
                        <Button url={'#about'} text={'About Me'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;