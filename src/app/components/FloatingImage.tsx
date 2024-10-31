import { useEffect, useState } from 'react';

import Image from 'next/image'

interface FloatingImageProps {
  src: string;
  alt: string;
  delay: string;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showImage = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 3000);
    };

    showImage();

    const interval = setInterval(showImage, parseInt(delay));

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className={`relative opacity-0 translate-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 !translate-y-0' : ''}`}>
      <Image height={200} width={200} src={src} alt={alt} className="h-auto block rounded-full shadow-lg" />
    </div>
  );
};

export default FloatingImage;
