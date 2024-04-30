import './historiespage.css';
import { useLayoutEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { PersonType } from '../../store/personsSlice';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { HistoriesCard } from '../../shared/HistoriesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HistoriesSwiperNav } from '../../shared/HistoriesSwiperNav';
import { MainPreloader } from '../../shared/MainPreloader';


export function HistoriesPage() {
  const newPersons = useAppSelector(state => state.newPersons.persons);
  const isPersonsLoading = useAppSelector(state => state.persons.isPersonLoading);
  const persons = useAppSelector(state => state.persons.persons);
  const [activeIndex, setActiveIndex] = useState(0);
  const [historiesArrays, setHistoriesArrays] = useState<PersonType[][]>([[]]);
  const [offset, setOffset] = useState(6);
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

  useLayoutEffect(() => {
    setHistoriesArrays([])
    const q: PersonType[][] = [];
    if (typeof newPersons !== 'undefined') {
      for (let i = 0; i < newPersons.length; i++) {
        if (typeof newPersons[i] !== 'undefined') {
          if (i % (windowWidth > 1200 ? 3 : (window.innerHeight > 600 ? 2 : 1)) === 0) {
            q.push([])
          }
          q[q.length - 1].push(newPersons[i])
        }
        setHistoriesArrays(q)
      }
    }
  }, [newPersons, windowWidth]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      {isPersonsLoading && <MainPreloader />}
      {!isPersonsLoading && <div className='historiesPage'>
        <Container>
          <Text As='h2' size={80} color='#000' font='Lora' weight={400} >Истории</Text>
          {newPersons.length ? <div className='historiesPage__new'>
            <div className="historiesPage__new-title">
              <Text size={70} color='#000' font='Lora' weight={400} >Новые</Text>
              <span className="historiesPage__new-count">
                <Text size={42} className='' color='#fff' font='Lora' weight={400}>{newPersons.length > 9 ? "9+" : newPersons.length}</Text>
              </span>
            </div>
            <div className="historiesPage__new-wrapper">
              <Swiper
                className='historiesPage__new-swiper'
                slidesPerView={1}
                spaceBetween={windowWidth > 1400 ? 50 : 60}
                speed={850}
                onSlideChange={(q) => { setActiveIndex(q.activeIndex) }}
              >
                {historiesArrays.map(e => {
                  return <SwiperSlide>
                    {e.map(j => {
                      return <HistoriesCard e={j} />
                    })}
                  </SwiperSlide>
                })}
                <HistoriesSwiperNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
              </Swiper>
            </div>
          </div> : ''}
          <div className="historiesPage__all">
            <Text As='h3' size={70} color='#000' font='Lora' weight={400} >Все истории</Text>
            <div className="historiesPage__all-container">
              {[...persons].sort((a, b) => Number(a.id) - Number(b.id)).slice(0, offset).map(e => {
                return <HistoriesCard e={e} />
              })}
            </div>
            {offset >= [...persons].length && <Text className='historiesPage__all-nomore' size={14} color='#999'>Истории закончились, но вы можете отправить заявку и их станет больше!</Text>}
            <button disabled={offset >= [...persons].length} onClick={() => setOffset(offset + 6)} className='historiesPage__all-more'>
              <Text size={24} font='Lora' color='#fff'>Показать ещё</Text></button>
          </div>
        </Container>
      </div>}

    </>
  );
}
