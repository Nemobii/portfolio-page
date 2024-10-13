'use client';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {images.map((image, idx) => (
                    <div key={image} className="overflow-hidden hover:-translate-y-2 transition-all duration-300">
                        <img
                            src={image}
                            alt={`Image ${idx + 1}`}
                            className="w-full h-auto cursor-pointer aspect-[1/1]"
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
        </>
    );
};

export default Gallery;
