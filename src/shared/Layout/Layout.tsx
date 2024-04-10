import React, { useLayoutEffect, useState } from 'react';
import { db } from '../../firebase';
import {  collection, getDocs, limit, query} from "firebase/firestore"; 
import { addPerson, removePersons, setIsPersonsLoading } from '../../store/personsSlice';
import { removeGallary, addGallary, setIsGallaryLoading } from '../../store/gallarySlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

export function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [isPersonsLoading, setIsPersonsLoadingST] = useState(true);
  const [isGallaryLoading, setIsGallaryLoadingST] = useState(true);
  useLayoutEffect(() => {
    dispatch(setIsPersonsLoading(true));
    // dispatch(setIsGallaryLoading(true));
    const getPersons = async () => {
      const docRef = collection(db, "persons");
    //   setDoc(doc(docRef),  {
    //     name: 'Гитлер Анатолий Германович',
    //     city: "Москва",
    //     dateOfBirth: (Math.round(Math.random() * 100)+1850),
    //     dateOfDeath: (Math.round(Math.random() * 100)+1924),
    //     history: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni error accusantium temporibus culpa enim eaque natus unde iusto! Quo vero veritatis repudiandae consequatur omnis unde! Natus nesciunt nostrum molestiae quo dolor! Earum pariatur velit ipsam eaque sint, distinctio aliquam maxime tempore corporis dolor vitae illo exercitationem dolorum harum mollitia rem deleniti eum nulla repellendus. Molestias consequatur nisi culpa quaerat nostrum. Corporis totam nostrum dolores dolore architecto provident. Iste fugiat totam, enim consequuntur explicabo delectus nobis, quos fugit quod sunt laudantium. Explicabo dolores quae veniam atque itaque qui eos officiis. Consectetur maiores quasi optio debitis ex itaque praesentium! Ducimus, soluta culpa.',
    //     mainPhoto: 'https://www.interfax.ru/ftproot/textphotos/2012/01/20/hit.jpg',
    //     medals: "Медаль «За преобразование Нечерноземья РСФСР»",
    //     photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVKnCJdzZmrmXyuhLSudSeI-uyjHWDZo-bPZh6TVV9A&s', 'https://old.bigenc.ru/media/2016/10/27/1235783864/9175.jpg', 'https://spb.hse.ru/data/2020/12/21/1343649231/%D0%93%D0%B8%D1%82%D0%BB%D0%B5%D1%80%20%D0%B8%20%D0%BD%D0%B0%D1%86%D0%B8%D1%81%D1%82%D1%8B.png'],
    //     published: 958738252000,
    //     rank: 'Верховный главнокомандующий'
    // })
      const q = query(docRef, limit(10));
      const querySnapshot = await getDocs(q);
      dispatch(removePersons())
      querySnapshot.forEach((doc) => {
        dispatch(addPerson(doc.data()))
      });
      setIsPersonsLoadingST(false)
      dispatch(setIsPersonsLoading(false));
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
      dispatch(removeGallary())
      querySnapshot.forEach((doc) => {
        dispatch(addGallary(doc.data()))
      });
      setIsGallaryLoadingST(false);
      dispatch(setIsGallaryLoading(false));
    }
    getPersons();
    getGallary();
  }, [])
  return (
    <>
      {(isPersonsLoading && isGallaryLoading) && 
      <>
      loading...
      </>}
      {!isPersonsLoading && !isGallaryLoading  && children}
    </>
  );
}

