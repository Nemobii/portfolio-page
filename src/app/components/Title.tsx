import React from 'react';
import Quote from './Quote';

interface TitleProps {
    text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {

    return (
        <div className="relative w-full min-h-60 flex justify-center overflow-hidden mb-16">
            <div className="absolute inset-0 bg-hero-image bg-cover bg-center animate-scale-in"></div>
            <div className='self-center flex flex-col justify-center z-10'>
            <h1 className="self-center text-white drop-shadow-lg relative mb-6">{ text }</h1>
            <Quote />
            </div>
        </div>
    );
};

export default Title;
