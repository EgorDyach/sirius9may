import { Text } from '../../../components/Text';
import { HeroSlideType } from '../../../store/contentSlice';

export function HeroSlide({e}: {e: HeroSlideType;}) {
  // const swiper = useSwiperSlide();
  return (
      <div className={'hero__slide-content'} style={{    transition: '.85s ease-in-out', backgroundImage: `url(${e.img})` }}>
        <Text As='p' className='hero__slide-text' size={20} color='#fff' font="Lora" weight={400}>
          {e.name}
          <br />
          {e.dateOfLife}
        </Text>
      </div>
  );
}
