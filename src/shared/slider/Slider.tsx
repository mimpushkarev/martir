import {useEffect, useMemo, useRef, useState} from 'react';

import image from './arrow.svg';
import {SliderType} from './types';

const Slider: SliderType = ({images, duration}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const left = useMemo(
    () => (sliderRef.current?.querySelectorAll('.slider')[currentIndex] as HTMLDivElement)?.offsetLeft || 0,
    [currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, images, currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden">
      <div
        className="flex h-[500px] gap-0 transition-transform duration-500 ease-in-out"
        ref={sliderRef}
        style={{transform: `translateX(-${left || 0}px)`}}
      >
        {images.map((image, index) => (
          <div key={index} className="slider h-full flex-shrink-0">
            <img src={image} alt={`Image ${index}`} className="h-full" />
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        <img src={image} alt="back" onClick={handlePrevClick} />
        <div className=" text-paragraph-2">{`${currentIndex + 1} / ${images.length}`}</div>
        <img src={image} alt="forward" className="rotate-180" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Slider;
