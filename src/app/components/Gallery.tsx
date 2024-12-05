'use client';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Image from 'next/image';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [index, setIndex] = React.useState(-1);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, idx) => (
                    <div
                        key={image}
                        className="relative overflow-hidden hover:-translate-y-2 transition-all duration-300 rounded-lg group"
                    >
                        <Image
                            src={image}
                            alt={`Image ${idx + 1}`}
                            width={860}
                            height={860}
                            className="w-full h-full aspect-square object-cover"
                        />
                        <div
                            className="absolute top-0 left-0 text-xl opacity-0 group-hover:opacity-40 transition-all bg-black w-full h-full text-white cursor-pointer"
                            onClick={() => setIndex(idx)}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[64px]">
                                +
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                index={index}
                slides={images.map((src) => ({ src }))}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    );
};

export default Gallery;
