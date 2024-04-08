import './gallarypagination.css';
import { useSwiper } from 'swiper/react';
import { Text } from '../../../../components/Text';
export function GallaryPagination({activeIndex, setActiveIndex}: {activeIndex: number; setActiveIndex: React.Dispatch<React.SetStateAction<number>>}) {
  const swiper = useSwiper();
  const slides = [];
  for (let i = 0; i < swiper.slides.length; i++) {
    slides.push( <button key={i } className={activeIndex === i ? 'gallary__pagination-btn gallary__pagination-btn-active' : 'gallary__pagination-btn'} onClick={() => { swiper.slideTo(i); setActiveIndex(i) }}>
    <Text color={activeIndex !== i ? "#8D8B82" : "#000"} font='Lora' size={40}>{i+1}</Text>
  </button>)
  }
  return (
    <div className='gallary__pagination'>
      {slides.map(e => {
        return e;
      })}
    </div>
  );
}
