import { useState } from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { HistoriesActive } from './HistoriesActive';
import './histories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { A11y, Navigation, Pagination } from 'swiper/modules';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HistoriesNav } from './HistoriesNav';
import unkown from '../../assets/UnknownSoldier.jpg'
export function Histories() {
  const persons = useAppSelector(state => state.heroPersons.persons);
  const [activePerson, setActivePerson] = useState(persons[0]);
  const [fadingDown, setFadingDown] = useState(false);
  const [fadingUp, setFadingUp] = useState(false);
  
  return (
    <section className='histories'>
      <Container>
        <Text As='h2' className='histories__title' color='#fff' font='Lora' size={80}>Истории</Text>
        <HistoriesActive fadingDown={fadingDown} fadingUp={fadingUp} active={activePerson} />
        <Swiper
          className='histories__swiper'
          // modules={[Navigation, A11y, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop
          // onSlideChange={(q) => {}}
          speed={550}
        >
          {persons.map(e => {
            return <SwiperSlide key={e.id} className={e.id === activePerson.id ? "history__slide-active" : ""} onClick={() => setActivePerson(persons[persons.indexOf(e)])}>
              <img src={e.mainPhoto ? e.mainPhoto : unkown} className='histories__nav-img' />
            </SwiperSlide>
          })}
          <HistoriesNav
          
          minusSlide={() => {
            setFadingDown(true)
            setTimeout(() => {
              setActivePerson(persons[persons.indexOf(activePerson)-1 < 0 ? persons.length-1 : persons.indexOf(activePerson)-1])
              setFadingUp(true)
              setFadingDown(false)
              setTimeout(() => {
                setFadingUp(false)
              }, 300)
            }, 250)
          }}
          plusSlide={() => {
            setFadingDown(true)
            setTimeout(() => {
              setActivePerson(persons[persons.indexOf(activePerson)+1 === persons.length ? 0 : persons.indexOf(activePerson)+1])
              setFadingDown(false)
              setFadingUp(true)
              setTimeout(() => {
                setFadingUp(false)
              }, 300)
            },250)
            
          }}
           />
        </Swiper>
      </Container>
    </section>
  );
}
