import Link from 'next/link';
import React from 'react';

const Button = ({ url, text }) => {
    return (
        <Link href={`${url}`}>
            <button className='bg-orange-500 px-5 py-2 mt-5 tracking-[4px] hover:bg-white hover:text-black transition-all duration-300'>{text}</button>
        </Link>
    );
};

export default Button;