import { useSwiper } from 'swiper/react';

export function HeroSwiperNext() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className='swiper-button-next'>
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" fill="#52575D" />
      <path d="M17.8958 34.5625L27.4374 25L17.8958 15.4375L20.8333 12.5L33.3333 25L20.8333 37.5L17.8958 34.5625Z" fill="white" fill-opacity="0.87" />
    </svg>
  </button>
  );
}
