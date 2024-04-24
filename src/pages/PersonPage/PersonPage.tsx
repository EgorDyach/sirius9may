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

export function PersonPage() {
  const params = useParams();
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
  return (
    <div className='personPage'>
      {isLoading && <Text size={80}>Загрузка...</Text>}
      {activePerson ?
        <>
          <div className="personPage__main">
            <Container flex>
              <div className="personPage__mainPhoto" style={{ backgroundImage: `linear-gradient(270deg, #1e1e1e 0%, rgba(30, 30, 30, 0) 20%), url("${activePerson.mainPhoto}")` }}></div>
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
                  return <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MedalComponent type={e} />
                  </SwiperSlide>
                })}
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
              {activePerson.photos.length > 4 && <Swiper spaceBetween={30} slidesPerGroup={4} slidesPerView={4}>
                {activePerson.photos.map((e) => {
                  return <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={e} className='personPage__photos-item' />
                  </SwiperSlide>
                })}
              </Swiper>}
              {activePerson.photos.length <= 4 && activePerson.photos.map((e) => {
                return  <img src={e} className='personPage__photos-item' />
              })}
            </Container>
          </div> : <></>}
        </>
        : <>
          qweqwe
        </>}
    </div>
  );
}
