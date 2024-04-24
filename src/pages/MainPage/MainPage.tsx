import { Hero } from '../../shared/Hero';
import { Gallary } from '../../shared/Gallary';
import './mainpage.css';
import { Histories } from '../../shared/Histories';
import { collection, query, limit, getDocs, where } from 'firebase/firestore';
import { useState, useLayoutEffect } from 'react';
import { db } from '../../firebase';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeHeroPersons, addHeroPerson } from '../../store/heroSlice';
import { removeMainGallary, addMainGallary } from '../../store/mainGallarySlice';
import { MainPreloader } from '../../shared/MainPreloader';
import { Steps } from '../../shared/Steps';

export function MainPage() {
  const [isPersonsLoading, setIsPersonsLoading] = useState(true);
  const [isGallaryLoading, setIsGallaryLoading] = useState(true);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    const getPersons = async () => {
      const docRef = collection(db, "persons");
      const q = query(docRef, limit(10), where("isHero", "==", true));
      // setDoc(doc(docRef), {
      //   name: "Баранов Илья Александрович",
      //   city: "Москва",
      //   dateOfBirth: 1920,
      //   dateOfDeath: 2017,
      //   history: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur alias, nulla sint laborum animi! Repellendus, mollitia consectetur possimus dicta explicabo ipsa eum cupiditate nam, cumque impedit ducimus hic nihil.",
      //   mainPhoto: "https://cdn.iportal.ru/preview/news/articles/89fb605de62db0c0fccc778a9bc2d69606751914_700_1132.jpg",
      //   medals: ["Орден Красного Знамени", "Медаль «За отвагу»", "Медаль Ушакова", "Медаль «За боевые заслуги»", "Медаль Нахимова", "Медаль «За трудовую доблесть»"],
      //   photos: [],
      //   published: (Math.random() > 0.5 ? 1710776078.102 : 1713893740.289),
      //   rank: 'Майор',
      //   isHero: true
      // })
      const querySnapshot = await getDocs(q);
      dispatch(removeHeroPersons())
      querySnapshot.forEach((doc) => {
        const qq = doc.data();

        dispatch(addHeroPerson({ ...qq, id: doc.id }));
      });
      setIsPersonsLoading(false)
    }

    const getGallary = async () => {
      const docRef = collection(db, "gallary");
      // setDoc(doc(docRef), {
      //   img: "https://sirius-ft.ru/upload/news/724/hhm0z35pi69dzw2g232usbbqkb66h9rm.jpg",
      //   countOfLikes: Math.floor(Math.random() * 1000),
      //   date: Math.floor(Math.random() *  190000000000),
      //   title: ""
      // })
      const q = query(docRef, limit(20));
      const querySnapshot = await getDocs(q);
      dispatch(removeMainGallary())
      querySnapshot.forEach((doc) => {
        dispatch(addMainGallary(doc.data()))
      });
      setIsGallaryLoading(false);
    }
    getPersons();
    getGallary();
  }, [])
  return (
    <>
      {(isPersonsLoading || isGallaryLoading) && <MainPreloader />}
      {!isGallaryLoading && !isPersonsLoading &&
        <>
          <Hero />
          <Gallary />
          <Histories />
          <Steps />
        </>
      }
    </>
  );
}
