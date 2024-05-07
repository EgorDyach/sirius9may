import './gallary.css';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GallaryItemType } from '../../store/gallarySlice';
import { useLayoutEffect, useState } from 'react';
import { GallarySlide } from './GallarySlide';
import { A11y } from 'swiper/modules';
import { GallarySwiperNav } from './GallarySwiperNav';
import { Pagination } from 'swiper/modules';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Link } from 'react-router-dom';

const links = [
  'https://sirius-ft.ru/upload/iblock/c74/nfxgg0uoekrarpcf9cs9kzjgqtyewkq5.jpg',
  'https://sirius-ft.ru/upload/iblock/6fc/02moecnhrgjnt2m9q73sj5v8uxwc9ppx.jpg',
  'https://sirius-ft.ru/upload/iblock/594/jkwxg8zjn25btp4ya6opqlo6f3z63n61.jpg',
  'https://sirius-ft.ru/upload/iblock/38a/8sibop0ijlyui6cumqy0o0200eh25pf6.jpg',
  'https://sirius-ft.ru/upload/iblock/8d6/l70hr3c4bybz99cz8oxwg4krb88s7iyj.jpg',
  'https://sirius-ft.ru/upload/tpost/c0a/r7y2gfzxbcf98v3y7uo7ny62sjsdxl1n.jpg',
  'https://sirius-ft.ru/upload/iblock/f29/xfc0om2j2uaiv9ctirh9ge9y8k834z52.jpg',
  'https://sun9-38.userapi.com/impg/tC0r-2GNLKDxwHtga3vlnyT-b9LkwZntszrwdQ/ERP8Uxs4zNU.jpg?size=2560x1703&quality=95&sign=6b6db191b25c5e587d440b44f6f886a1&type=album',
  'https://siriuslyceum.ru/pr_img/1918100371/20220503/07379481/0045_(1).jpg',
  'https://s1.sochi-bloknot.ru/thumb/1200x0xcut/upload/iblock/39e/s6ox9bb5jnegigotme7tww1ytdm010ju/Bessmertnyy-polk-v-Siriuse-_4_.JPG',
  'https://sirius-ft.ru/upload/iblock/ad6/36jmei42wqf9jeef2spgepgq3wksk2nb.jpg',
  'https://s1.sochi-bloknot.ru/thumb/1200x0xcut/upload/iblock/7de/ll3b0bh9kqhdca1kgt5u6c9i3vqcw10l/Bessmertnyy-polk-v-Siriuse-_37_.JPG',
  'https://sochisirius.ru/uploads/post/645a2705968ce-large.jpg?p=1683704648',
  'https://sochisirius.ru/uploads/2023/05/DSC_4383.jpg',
  'https://sochisirius.ru/uploads/2023/05/DSC_4467.jpg',
]

export function Gallary() {
  const gallary = useAppSelector(state => state.mainGallary.gallary);
  const [gallaryArrays, setGallaryArrays] = useState<GallaryItemType[][]>([[]]);
  const [activeIndex, setActiveIndex] = useState(0)
  useLayoutEffect(() => {
    setGallaryArrays([])
    const q: GallaryItemType[][] = [];
    if (typeof gallary !== 'undefined') {
      for (let i = 0; i < links.length; i++) {
        if (typeof links[i] !== 'undefined') {
          if (i % (window.innerWidth > 1700 ? 5 : (window.innerWidth > 1200 ? 3 : (window.innerWidth > 1000 ? 2 : 1))) === 0) {
            q.push([])
          }
          q[q.length - 1].push({ img: links[i] } as GallaryItemType)
        }
        setGallaryArrays(q)
      }
    }
  }, [gallary]);

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


  return (
    <section className='gallary'>
      <Container>
        <Text As='h2' className='gallary__title' size={80} weight={500} font='Lora'>Галерея</Text>
        <Swiper
          className='gallary__swiper'
          modules={[A11y, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={(q) => { setActiveIndex(q.activeIndex) }}
          speed={850}>
          {typeof gallaryArrays !== 'undefined' && gallaryArrays.map(e => {
            if (e.length === 0) {
              return;
            }
            return (<SwiperSlide key={gallaryArrays.indexOf(e)}>
              <GallarySlide e={e} />
            </SwiperSlide>)
          })}
          <GallarySwiperNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          {windowWidth <= 1200 && <Link to={'/gallary'}>
            <Text size={36} className='gallary__nav-link-mob' font='Lora' color='#000'>Все материалы</Text>
          </Link>}
        </Swiper>
      </Container>
    </section>
  );
}
