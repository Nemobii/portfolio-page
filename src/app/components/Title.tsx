import React from 'react';

interface TitleProps {
    text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {

    return (
        <div className="relative w-full min-h-60 flex justify-center overflow-hidden mb-16">
            <div className="absolute inset-0 bg-hero-image bg-cover bg-center animate-scale-in"></div>
            <h1 className="self-center text-white drop-shadow-lg relative z-10">{ text }</h1>
        </div>
    );
};

export default Title;
