import { useState } from 'react';
import './historiesnav.css';
import { useSwiper } from 'swiper/react';

export function HistoriesNav({plusSlide, minusSlide}: {plusSlide: () => void; minusSlide: () => void;}) {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const swiper = useSwiper();
  return (
    <div className='histories__nav'>
      <button disabled={isPrevDisabled} onClick={() => { 
        swiper.slidePrev(); 
        minusSlide(); 
        setIsPrevDisabled(true); 
        setTimeout(() => {setIsPrevDisabled(false)}, 600)
        }} className='swiper-button-prev'>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-1.5" y="1.5" width="87" height="87" transform="matrix(-1 0 0 1 87 0)" stroke="white" stroke-width="3" />
          <path d="M57.7877 62.2125L40.6127 45L57.7877 27.7875L52.5002 22.5L30.0002 45L52.5002 67.5L57.7877 62.2125Z" fill="white" fill-opacity="0.87" />
        </svg>
      </button>
      <button disabled={isNextDisabled} onClick={() => { 
          swiper.slideNext();
          plusSlide(); 
          setIsNextDisabled(true); 
          setTimeout(() => {setIsNextDisabled(false)}, 600)}
        }
         className='swiper-button-next'>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="87" height="87" stroke="white" stroke-width="3" />
          <path d="M32.2123 62.2125L49.3873 45L32.2123 27.7875L37.4998 22.5L59.9998 45L37.4998 67.5L32.2123 62.2125Z" fill="white" fill-opacity="0.87" />
        </svg>
      </button>
    </div>
  );
}
