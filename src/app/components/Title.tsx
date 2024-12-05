import React from 'react';
import Quote from './Quote';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className="relative w-full min-h-[240px] sm:min-h-[300px] lg:min-h-[400px] flex justify-center items-center overflow-hidden mb-16">

            <div className="absolute inset-0 bg-hero-image bg-cover bg-center animate-scale-in"></div>

            <div className="relative z-10 text-center">
                <h1 className="text-white drop-shadow-lg text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    {text}
                </h1>
                <Quote />
            </div>
        </div>
    );
};

export default Title;
