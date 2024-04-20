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
