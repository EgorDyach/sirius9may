import { Text } from '../../../components/Text';
import { PersonType } from '../../../store/personsSlice';

export function HeroSlide({e}: {e: PersonType;}) {
  // const swiper = useSwiperSlide();
  return (
      <div className={'hero__slide-content'} style={{    transition: '.85s ease-in-out', backgroundImage: `url(${e.mainPhoto})` }}>
        <Text As='p' className='hero__slide-text' size={20} color='#fff' font="Lora" weight={400}>
          {e.name}
          <br />
          ({e.dateOfBirth} - {e.dateOfDeath})
        </Text>
      </div>
  );
}
