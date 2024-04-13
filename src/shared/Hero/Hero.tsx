import './hero.css';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { HeroSwiperPrev } from './HeroSwiperPrev';
import { HeroSwiperNext } from './HeroSwiperNext';
import { HeroSlide } from './HeroSlide';
import { useAppSelector } from '../../hooks/reduxHooks';

export function Hero() {
  const content = useAppSelector(state => state.heroPersons.persons)


  return (
    <section className='hero'>
      <Container>
        <div className="hero__content">
          <div className="hero__info">
            <Text className='hero__title' As='h2' size={80} font='Lora' weight={500}>
              “Никто не забыт, ничто не забыто”
            </Text>
            <Text size={36} className='hero__descr' As='p' weight={400}>
              Расскажи историю своего предка
            </Text>
            <Link to={'/form'} className='hero__link'>
              <Text color="#fff" size={24} font='Lora'>
                Принять участие
              </Text>
            </Link>
          </div>
          <Swiper
            className='hero__swiper'
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            loop
            speed={850}
          >
            {typeof content !== 'undefined' && content.map(e => {
              if (content.indexOf(e) < 10) {
                return <SwiperSlide key={content.indexOf(e)}>
                  <HeroSlide e={e} />
                </SwiperSlide>
              }
            })}
            <div className="hero__slide-navigation">
              <HeroSwiperPrev />
              <HeroSwiperNext />
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
