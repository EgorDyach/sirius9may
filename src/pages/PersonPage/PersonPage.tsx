import { doc, getDoc } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { db } from '../../firebase';
import './personpage.css';
import { useParams } from "react-router-dom";
import { PersonType } from '../../store/personsSlice';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MedalComponent } from '../../assets/medals/medal';
import { PersonNav } from '../../shared/PersonNav';
import unknown from "../../assets/UnknownSoldier.jpg";

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
  const [medalsActiveIndex, setMedalActiveIndex] = useState(0);
  const [photoActiveIndex, setPhotoActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activePerson, setActivePerson] = useState<PersonType | null>(null);
  useLayoutEffect(() => {
    setIsLoading(true)
    const as = async () => {
      const docRef = doc(db, "persons", (params.id as string));
      await getDoc(docRef).then(res => {
        console.log(res.data())
        setActivePerson(res.data() as PersonType)
        setIsLoading(false)
      });
    }
    as();
  }, [params.id])

  const handleClick = async () => {
    // axios.get('https://for-9-may.onrender.com/api/v1/persons').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
  return (
    <div className='personPage'>
      {isLoading && <Text size={80}>Загрузка...</Text>}
      {activePerson && !isLoading ?
        <>
          <div className="personPage__main">
            <Container flex>
              <div className="personPage__mainPhoto" style={{ backgroundImage: `linear-gradient(270deg, #1e1e1e 0%, rgba(30, 30, 30, 0) 20%), url("${activePerson.mainPhoto ? activePerson.mainPhoto : unknown}")` }}></div>
              <div className="personPage__mainInfo">
                <Text As='h2' size={80} color='#fff' weight={400} font='Lora'>{activePerson.name}</Text>
                <Text As='h3' size={64} color='#fff' weight={400} font='Lora'>{activePerson.dateOfBirth} – {activePerson.dateOfDeath}</Text>
                <div className="personPage__mainInfo-more">
                  <div className="personPage__mainInfo-city">
                    <Text As='p' size={24} color='#848484' weight={400} font='Lora'>Родной город:</Text>
                    <Text As='p' size={20} color='#fff' weight={400} >{activePerson.city}</Text>
                  </div>
                  <div className="personPage__mainInfo-city">
                    <Text As='p' size={24} color='#848484' weight={400} font='Lora'>Звание:</Text>
                    <Text As='p' size={20} color='#fff' weight={400} >{activePerson.rank}</Text>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {activePerson.medals.length ? <div className='personPage__medals'>
            <Container>
              <Text size={80} As='h3' className='personPage__medals-title' font='Lora'>Награды</Text>
              {activePerson.medals.length > 4 && <Swiper slidesPerGroup={4} slidesPerView={4}>
                {activePerson.medals.map((e) => {
                  return <SwiperSlide className='personPage__medals-slide' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MedalComponent type={e} />
                  </SwiperSlide>
                })}
                <PersonNav activeIndex={medalsActiveIndex} setActiveIndex={setMedalActiveIndex} />
              </Swiper>}
              {activePerson.medals.length <= 4 && activePerson.medals.map((e) => {
                return <MedalComponent type={e} />
              })}
            </Container>
          </div> : <></>}
          {activePerson.history ? <div className='personPage__history'>
            <Container>
              <Text size={80} As='h3' className='personPage__history-title' font='Lora'>История</Text>
              <Text size={36} As='p' className='personPage__history-text' weight={400}>{activePerson.history}</Text>
            </Container>
          </div> : <></>}
          {activePerson.photos.length ? <div className='personPage__photos'>
            <Container>
              <Text size={80} As='h3' className='personPage__photos-title' font='Lora'>Фото</Text>
              {activePerson.photos.length > 2 && <Swiper spaceBetween={30} slidesPerGroup={2} slidesPerView={2}>
                {activePerson.photos.map((e) => {
                  return <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={e} className='personPage__photos-item' />
                  </SwiperSlide>
                })}
                <PersonNav activeIndex={photoActiveIndex} setActiveIndex={setPhotoActiveIndex} />
              </Swiper>}
              {activePerson.photos.length <= 2 && activePerson.photos.map((e) => {
                return <img src={e} className='personPage__photos-item' />
              })}
            </Container>
          </div> : <></>}
          <Container>
            <button style={{ margin: 50 }} onClick={handleClick}>click me</button>
            <span className='personPage__date'>опубликовано {formatDateFromMilliseconds(activePerson.published * 1000)}</span>
          </Container>
        </>
        : <>

        </>}
    </div>
  );
}
