import './gallary.css';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { GallaryItemType, RootState } from '../../store/contentSlice';
import { useLayoutEffect, useState } from 'react';
import { GallarySlide } from './GallarySlide';
import { Navigation, A11y } from 'swiper/modules';
import { GallarySwiperNav } from './GallarySwiperNav';
import { Pagination } from 'swiper/modules';

export function Gallary() {
  const gallary = useSelector<RootState, GallaryItemType[]>(state => state.counter.contentForApp.gallaryPage.gallaryItems)
  const [gallaryArrays, setGallaryArrays] = useState<GallaryItemType[][]>([[]]);
  const [activeIndex, setActiveIndex] = useState(0)

  useLayoutEffect(() => {
    setGallaryArrays([])
    const q: GallaryItemType[][] = [];
    for (let i = 0; i<25; i++) {
      if (typeof gallary[i] !== 'undefined') {
        if (i % 5 === 0) {
          q.push([])
        }
        q[q.length-1].push(gallary[i])
      }
      setGallaryArrays(q)
      }
  }, [gallary]);
  return (
    <section className='gallary'>
      <Container>
        <Text As='h2' className='gallary__title' size={80} weight={500} font='Lora'>Галерея</Text>
        <Swiper
          className='gallary__swiper'
          modules={[Navigation, A11y, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          speed={850}>
          {gallaryArrays.map(e => {
            console.log(gallaryArrays)
            if (e.length === 0) {
              return;
            }
            return (<SwiperSlide key={gallaryArrays.indexOf(e)}>
              <GallarySlide e={e} />
            </SwiperSlide>)
          })}
          <GallarySwiperNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Swiper>
      </Container>
    </section>
  );
}
