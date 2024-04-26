import { Text } from '../../../components/Text';
import { PersonType } from '../../../store/personsSlice';
import unknown from '../../../assets/UnknownSoldier.jpg'
import { useNavigate } from 'react-router-dom';

export function HeroSlide({e}: {e: PersonType;}) {
  // const swiper = useSwiperSlide();
  const navigate = useNavigate();
  return (
      <div onClick={() => navigate(`/histories/${e.id}`)} className={'hero__slide-content'} style={{    transition: '.55s ease-in-out', backgroundImage: `url(${e.mainPhoto === '' ? unknown : e.mainPhoto})` }}>
        <Text As='p' className='hero__slide-text' size={20} color='#fff' font="Lora" weight={400}>
          {e.name}
          <br />
          ({e.dateOfBirth} - {e.dateOfDeath})
        </Text>
      </div>
  );
}
