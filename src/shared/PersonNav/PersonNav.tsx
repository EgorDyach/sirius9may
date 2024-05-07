import React, { useLayoutEffect, useState } from 'react';
import './personnav.css';
import { useSwiper } from 'swiper/react';

export function PersonNav({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: React.Dispatch<React.SetStateAction<number>> }) {
  const swiper = useSwiper();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    });
    (() => {
      setWindowWidth(window.innerWidth)
    })();
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
      });
    };
  }, [windowWidth])
  return (
    <div className="gallary__controls">
      <div className='gallary__nav'>
        <button disabled={activeIndex <= 0} onClick={() => { swiper.slidePrev(); setActiveIndex(activeIndex - (windowWidth > 1000 ? 4 : 1)) }} className='gal-swiper-button-prev'>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" transform="matrix(-1 0 0 1 50 0)" fill="#52575D" />
            <path d="M32.1042 34.5625L22.5626 25L32.1042 15.4375L29.1667 12.5L16.6667 25L29.1667 37.5L32.1042 34.5625Z" fill="white" fillOpacity="0.87" />
          </svg>
        </button>
        <button disabled={activeIndex >= swiper.slides.length - 1} onClick={() => { swiper.slideNext(); setActiveIndex(activeIndex + (windowWidth > 1000 ? 4 : 1)) }} className='gal-swiper-button-next'>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill="#52575D" />
            <path d="M17.8958 34.5625L27.4374 25L17.8958 15.4375L20.8333 12.5L33.3333 25L20.8333 37.5L17.8958 34.5625Z" fill="white" fillOpacity="0.87" />
          </svg>
        </button>
      </div>
    </div>
  );
}