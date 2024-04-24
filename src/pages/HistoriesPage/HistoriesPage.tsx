import { useEffect, useLayoutEffect, useState } from 'react';
import './historiespage.css';
import { collection, query, limit, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { MainPreloader } from '../../shared/MainPreloader';
import { removePersons, addPerson, PersonType } from '../../store/personsSlice';
import { addNewPerson, removeNewPersons } from '../../store/newPersons';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { HistoriesCard } from '../../shared/HistoriesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HistoriesSwiperNav } from '../../shared/HistoriesSwiperNav';

const THREE_DAYS = 259_200;

export function HistoriesPage() {
  const [isPersonsLoading, setIsPersonsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const newPersons = useAppSelector(state => state.newPersons.persons);
  const [sizeOfNew, setSizeOfNew] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [historiesArrays, setHistoriesArrays] = useState<PersonType[][]>([[]]);

  useEffect(() => {
    const getPersons = async () => {
      const docRef = collection(db, "persons");
      const q = query(docRef, where("published", ">=", new Date().getTime() / 1000 - THREE_DAYS));
      const querySnapshot = await getDocs(q);
      setSizeOfNew(querySnapshot.size);
      dispatch(removeNewPersons())
      querySnapshot.forEach((doc) => {
        const qq = doc.data();
        dispatch(addNewPerson({ ...qq, id: doc.id }));
      });

      setIsPersonsLoading(false)
    }

    const getNewPersons = async () => {
      const docRef = collection(db, "persons");
      const qNotNew = query(docRef, limit(6 - sizeOfNew % 6), where("published", "<", new Date().getTime() / 1000 - THREE_DAYS));
      await getDocs(qNotNew).then(querySnapshotNotNew => {
        dispatch(removePersons())
        querySnapshotNotNew.forEach((doc) => {
          const qq = doc.data();
          dispatch(addPerson({ ...qq, id: doc.id }));
        })
      });
    }

    getNewPersons();
    getPersons();
  }, [])


  useLayoutEffect(() => {
    setHistoriesArrays([])
    const q: PersonType[][] = [];
    if (typeof newPersons !== 'undefined') {
      for (let i = 0; i<newPersons.length; i++) {
        if (typeof newPersons[i] !== 'undefined') {
          if (i % 3 === 0) {
            q.push([])
          }
          q[q.length-1].push(newPersons[i])
        }
        setHistoriesArrays(q)
        }
    }
  }, [newPersons]);

  return (
    <>
      {(isPersonsLoading) && <MainPreloader />}
      {(!isPersonsLoading) && <div className='historiesPage'>
        <Container>
          <Text As='h2' size={80} color='#000' font='Lora' weight={400} >Истории</Text>
          <div className='historiesPage__new'>
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
                spaceBetween={50}
                speed={850}
                onSlideChange={(q) => {setActiveIndex(q.activeIndex)}}
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
          </div>
        </Container>
      </div>}

    </>
  );
}
