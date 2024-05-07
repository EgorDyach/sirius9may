import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useLayoutEffect, useState } from 'react';
import './personpage.css';
import { useParams } from "react-router-dom";
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MedalComponent } from '../../assets/medals/medal';
import { PersonNav } from '../../shared/PersonNav';
import unknown from "../../assets/UnknownSoldier.jpg";
import { useAppDispatch } from '../../hooks/reduxHooks';
import { openModal } from '../../store/modalSlice';
import axios from 'axios';


function formatDateFromMilliseconds(milliseconds: number): string {
  const monthes = ['января', "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
  const date = new Date(milliseconds);

  // Получаем день, месяц и год
  const day = date.getDate();
  const month = date.getMonth(); // Месяцы начинаются с 0, поэтому добавляем 1
  const year = date.getFullYear();

  // Получаем часы и минуты
  // const hours = date.getHours();
  // const minutes = date.getMinutes();

  // Форматируем день, месяц и год
  const dayString = day.toString().padStart(2, '0'); // Добавляем ведущие нули, если нужно
  const monthString = monthes[month];

  // Форматируем часы и минуты
  // const hoursString = hours.toString().padStart(2, '0');
  // const minutesString = minutes.toString().padStart(2, '0');

  // Собираем строку с датой
  // return `${dayString} ${monthString} ${year} в ${hoursString}:${minutesString}`;
  return `${dayString} ${monthString} ${year} г.`;
}


export function PersonPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [medalsActiveIndex, setMedalActiveIndex] = useState(0);
  const [photoActiveIndex, setPhotoActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activePerson, setActivePerson] = useState<any | undefined>(undefined);
  useLayoutEffect(() => {
    const asyc = async () => {
      axios.get(`https://for-9-may.onrender.com/api/v1/persons/${params.id}`).then(e => {
        const item = e.data.details[0]
        setActivePerson({
          name: item.SNL,
          id: item.id,
          mainPhoto: item.main_photo,
          dateOfBirth: (item.date_birth === 1 ? '???' : item.date_birth),
          dateOfDeath: (item.date_death === 1 ? '???' : (item.date_death === 0 ? 'н. в.' : item.date_death)),
          history: item.history,
          city: item.city,
          rank: item.rank,
          published: item.date_pulished,
          medals: item.medals.split(','),
          photos: item.photo.split(',')
        });
      })
    }
    setIsLoading(true)
    asyc();
    setIsLoading(false)
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
    <div className='personPage'>
      {isLoading && <Text size={80}>Загрузка...</Text>}
      {activePerson && !isLoading ?
        <>
          <div className="personPage__main">
            <Container flex>
              <div className="personPage__mainPhoto" style={{ backgroundImage: `linear-gradient(270deg, #1e1e1e 0%, rgba(30, 30, 30, 0) 20%), url("${activePerson.mainPhoto ? activePerson.mainPhoto : unknown}")` }}></div>
              <div className="personPage__mainInfo">
                <div className="personPage__mainInfo-top">
                  {windowWidth <= 1000 && <img src={activePerson.mainPhoto ? activePerson.mainPhoto : unknown} className='personPage__img' />}
                  <div className="personPage__mainInfo-text">
                    <Text As='h2' size={windowWidth > 1700 ? 80 : (windowWidth > 1400 ? 48 : 40)} color='#fff' weight={400} font='Lora'>{activePerson.name}</Text>
                    <Text As='h3' size={windowWidth > 1700 ? 64 : 32} color='#fff' weight={400} font='Lora'>{activePerson.dateOfBirth} – {activePerson.dateOfDeath}</Text>
                  </div>
                </div>
                <div className="personPage__mainInfo-more">
                  <div className="personPage__mainInfo-city">
                    <Text As='p' size={windowWidth > 1400 ? 24 : 20} color='#848484' weight={400} font='Lora'>Родной город:</Text>
                    <Text As='p' size={windowWidth > 1700 ? 20 : 16} color='#fff' weight={400} >{activePerson.city}</Text>
                  </div>
                  <div className="personPage__mainInfo-city">
                    <Text As='p' size={windowWidth > 1400 ? 24 : 20} color='#848484' weight={400} font='Lora'>Звание:</Text>
                    <Text As='p' size={windowWidth > 1700 ? 20 : 16} color='#fff' weight={400} >{activePerson.rank}</Text>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {activePerson.medals && activePerson.medals.length !== 0 ? <div className='personPage__medals'>
            <Container>
              <Text size={80} As='h3' className='personPage__medals-title' font='Lora'>Награды</Text>
              {activePerson.medals.length > (windowWidth > 1000 ? 4 : 1) && <Swiper onSlideChange={q => setMedalActiveIndex(q.activeIndex)} spaceBetween={windowWidth > 1000 ? 50 : 0} slidesPerGroup={windowWidth > 1000 ? 4 : 1} slidesPerView={windowWidth > 1000 ? 4 : 1}>
                {activePerson.medals.map((e: string) => {
                  return <SwiperSlide onClick={() => {
                    dispatch(openModal({
                      images: [...activePerson.medals.map((q: string) => {
                        return {
                          type: "medal",
                          text: q,
                        }
                      })],
                      activeIndex: activePerson.medals.indexOf(e),
                    }))
                  }} className='personPage__medals-slide' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MedalComponent type={e} />
                  </SwiperSlide>
                })}
                <PersonNav activeIndex={medalsActiveIndex} count={activePerson.medals.length} setActiveIndex={setMedalActiveIndex} />
              </Swiper>}
              {activePerson.medals.length <= (windowWidth > 1000 ? 4 : 1) && <>
                {activePerson.medals.map((e: string) => {
                  return <div onClick={() => {
                    dispatch(openModal({
                      images: [...activePerson.medals.map((q: string) => {
                        return {
                          type: "medal",
                          text: q,
                        }
                      })],
                      activeIndex: activePerson.medals.indexOf(e),
                    }))
                  }} className='personPage__medals-slide' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MedalComponent type={e} />
                  </div>
                })}</>}
            </Container>
          </div> : <></>}
          {activePerson.history !== '' ? <div className='personPage__history'>
            <Container>
              <Text size={80} As='h3' className='personPage__history-title' font='Lora'>История</Text>
              <Text size={36} As='div' className='personPage__history-text' weight={400}>
                {activePerson.history.split('|').map((e: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined) => <p>{e}</p>)}
              </Text>
            </Container>
          </div> : <></>}
          {activePerson.photos[0] !== '' ? <div className='personPage__photos'>
            <Container>
              <Text size={80} As='h3' className='personPage__photos-title' font='Lora'>Фото</Text>
              {activePerson.photos.length > 2 && <Swiper onSlideChange={q => setPhotoActiveIndex(q.activeIndex)} spaceBetween={30} slidesPerGroup={windowWidth > 1000 ? 2 : 1} slidesPerView={windowWidth > 1000 ? 2 : 1}>
                {activePerson.photos.map((e: string | undefined) => {
                  return <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={e} onClick={() => dispatch(openModal(
                      { images: [...activePerson.photos].map(q => { return { src: q, type: 'personPhoto', text: `Доп. фотография ${activePerson.name}` } }), activeIndex: activePerson.photos.indexOf(e) }
                    ))} className='personPage__photos-item' />
                  </SwiperSlide>
                })}
                {/* <button style={{ margin: 50 }} onClick={handleClick}>click me</button> */}
                <PersonNav count={activePerson.photos.length} activeIndex={photoActiveIndex} setActiveIndex={setPhotoActiveIndex} />
              </Swiper>}
              {activePerson.photos.length <= 2 &&
                <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "center" }}>
                  {activePerson.photos.map((e: string | undefined) => {
                    return <img style={{maxWidth: 540}} onClick={() => dispatch(openModal(
                      { images: [...activePerson.photos].map(q => { return { src: q, type: 'personPhoto', text: `Доп. фотография ${activePerson.name}` } }), activeIndex: activePerson.photos.indexOf(e) }
                    ))} src={e} className='personPage__photos-item' />
                  })}</div>}
            </Container>
          </div> : <></>}
          <Container>
            {/* <button style={{ margin: 50 }} onClick={handleClick}>click me</button> */}
            <span className='personPage__date'>опубликовано {formatDateFromMilliseconds(activePerson.published * 1000)}</span>
          </Container>
        </>
        : <>

        </>
      }
    </div >
  );
}
