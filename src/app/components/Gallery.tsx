'use client';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Image from 'next/image'

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [index, setIndex] = React.useState(-1);


    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {images.map((image, idx) => (
                    <div key={image} className="overflow-hidden hover:-translate-y-2 transition-all duration-300">
                        <Image
                            src={`portfolio-page/${image}`}
                            alt={`Image ${idx + 1}`}
                            width={860}
                            height={860}
                            className="w-full h-auto cursor-pointer aspect-[1/1] object-cover"
                            onClick={() => setIndex(idx)}
                        />
                    </div>
                ))}
            </div>
            <Lightbox
                index={index}
                slides={images.map(src => ({ src }))}
                open={index >= 0}
                close={() => setIndex(-1)} // Close lightbox
            />
        </div>
    );
};

export default Gallery;
