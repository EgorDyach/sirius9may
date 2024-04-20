import './gallarypagination.css';
import { useSwiper } from 'swiper/react';
import { Text } from '../../../../components/Text';
import { useLayoutEffect, useState } from 'react';
export function GallaryPagination({activeIndex, setActiveIndex}: {activeIndex: number; setActiveIndex: React.Dispatch<React.SetStateAction<number>>}) {
  const swiper = useSwiper();
  const [slides, setSlides] = useState<JSX.Element[]>([]);
  useLayoutEffect(() => {
    setSlides([]);
    const v: JSX.Element[] = [];
    if (typeof swiper.slides !== 'undefined') {
      for (let i = 0; i < swiper.slides.length; i++) {
        v.push(<button key={i} className={activeIndex === i ? 'gallary__pagination-btn gallary__pagination-btn-active' : 'gallary__pagination-btn'} onClick={() => { swiper.slideTo(i); setActiveIndex(i) }}>
        <Text color={activeIndex !== i ? "#8D8B82" : "#000"} font='Lora' size={40}>{i+1}</Text>
      </button>)
      }
      setSlides(v)
    }
  }, [swiper, swiper.slides, swiper.activeIndex, activeIndex, setActiveIndex])
  return (
    <div className='gallary__pagination'>
      {slides.map(e => {
        return e;
      })}
    </div>
  );
}
