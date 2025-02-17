import { useSwiper } from 'swiper/react';
import './historiesswipernav.css';
import { HistoriesPagination } from '../HistoriesPagination';
export function HistoriesSwiperNav({ setActiveIndex }: { setActiveIndex: React.Dispatch<React.SetStateAction<number>> }) {
  const swiper = useSwiper();
  return (
    <div className="gallary__controls">
      <HistoriesPagination activeIndex={swiper.activeIndex} setActiveIndex={setActiveIndex} />
      <div className='gallary__nav'>
        <button onClick={() => {
          swiper.slidePrev();
          if (swiper.activeIndex >= 0) {
            setActiveIndex(swiper.activeIndex - 1);
          }
        }} className={`gal-swiper-button-prev ${swiper.activeIndex <= 0 ? `swiper-button-disabled` : ""}`}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" transform="matrix(-1 0 0 1 50 0)" fill="#52575D" />
            <path d="M32.1042 34.5625L22.5626 25L32.1042 15.4375L29.1667 12.5L16.6667 25L29.1667 37.5L32.1042 34.5625Z" fill="white" fillOpacity="0.87" />
          </svg>
        </button>
        <button onClick={() => {
          swiper.slideNext();
          if (swiper.activeIndex <= swiper.slides.length - 1) {
            setActiveIndex(swiper.activeIndex + 1)
          }
        }} className={`gal-swiper-button-next ${swiper.activeIndex >= swiper.slides.length - 1 ? `swiper-button-disabled` : ""}`}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill='#52575D' />
            <path d="M17.8958 34.5625L27.4374 25L17.8958 15.4375L20.8333 12.5L33.3333 25L20.8333 37.5L17.8958 34.5625Z" fill="white" fillOpacity="0.87" />
          </svg>
        </button>
      </div>
      <span style={{ opacity: 0, visibility: 'hidden' }} >
        <HistoriesPagination activeIndex={swiper.activeIndex} setActiveIndex={setActiveIndex} />
      </span>
    </div>
  );
}