// import React, { useLayoutEffect, useState } from 'react';
// import { db } from '../../firebase';
// import {  collection, getDocs, limit, query} from "firebase/firestore"; 
// import { doc, setDoc } from "firebase/firestore"
// import { addPerson, removePersons, setIsPersonsLoading } from '../../store/personsSlice';
// import { removeGallary, addGallary, setIsGallaryLoading } from '../../store/gallarySlice';
// import { useAppDispatch } from '../../hooks/reduxHooks';
// const photos = [
//   "https://sochisirius.ru/uploads/post/645a2705968ce-large.jpg?p=1683704648",
//   "https://sochisirius.ru/uploads/2023/05/DSC_4383.jpg",
//   "https://sochisirius.ru/uploads/2023/05/DSC_4467.jpg",
//   "https://sirius-ft.ru/upload/iblock/ad6/36jmei42wqf9jeef2spgepgq3wksk2nb.jpg",
//   "https://sirius-ft.ru/upload/iblock/c74/nfxgg0uoekrarpcf9cs9kzjgqtyewkq5.jpg",
//   "https://sirius-ft.ru/upload/iblock/6fc/02moecnhrgjnt2m9q73sj5v8uxwc9ppx.jpg",
//   "https://sirius-ft.ru/upload/iblock/594/jkwxg8zjn25btp4ya6opqlo6f3z63n61.jpg",
//   "https://sirius-ft.ru/upload/iblock/594/jkwxg8zjn25btp4ya6opqlo6f3z63n61.jpg",
//   "https://sirius-ft.ru/upload/iblock/8d6/l70hr3c4bybz99cz8oxwg4krb88s7iyj.jpg",
//   "https://sirius-ft.ru/upload/iblock/11b/b8zli31y0nuv4v5gue5nxq8dk0lnyfjo.jpg"
// ]
export function Layout({ children }: { children: React.ReactNode }) {
  // const dispatch = useAppDispatch();
  // // const [isPersonsLoading, setIsPersonsLoadingST] = useState(true);
  // // const [isGallaryLoading, setIsGallaryLoadingST] = useState(true);
  // useLayoutEffect(() => {
  //   // dispatch(setIsPersonsLoading(true));
  //   // dispatch(setIsGallaryLoading(true));
  //   const getPersons = async () => {
  //     const docRef = collection(db, "persons");
  //   //   const docRef = collection(db, "unreadedPersons");
  //   //   setDoc(doc(docRef),  {
  //   //     name: 'Петров Анатолий Германович',
  //   //     city: "Ленинград",
  //   //     dateOfBirth: (Math.round(Math.random() * 100)+1850),
  //   //     dateOfDeath: (Math.round(Math.random() * 100)+1924),
  //   //     history: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni error accusantium temporibus culpa enim eaque natus unde iusto! Quo vero veritatis repudiandae consequatur omnis unde! Natus nesciunt nostrum molestiae quo dolor! Earum pariatur velit ipsam eaque sint, distinctio aliquam maxime tempore corporis dolor vitae illo exercitationem dolorum harum mollitia rem deleniti eum nulla repellendus. Molestias consequatur nisi culpa quaerat nostrum. Corporis totam nostrum dolores dolore architecto provident. Iste fugiat totam, enim consequuntur explicabo delectus nobis, quos fugit quod sunt laudantium. Explicabo dolores quae veniam atque itaque qui eos officiis. Consectetur maiores quasi optio debitis ex itaque praesentium! Ducimus, soluta culpa.',
  //   //     mainPhoto: 'https://aif-s3.aif.ru/images/013/594/07297a4b9ff017b5d5147dacb0f4d8d3.jpg',
  //   //     medals: ["Медаль «За преобразование Нечерноземья РСФСР»",  "Медаль «За отвагу на пожаре»", "Медаль «За спасение утопающих»", "Медаль «За оборону Москвы»",],
  //   //     photos: ['https://kolomna.msr.mosreg.ru/files/image/06/38/24/lg!cjv.jpg', 'https://kianews24.ru/wp-content/uploads/2022/02/photo_2022-02-21_12-57-15.jpg'],
  //   //     published: 958748252000,
  //   //     rank: 'Майор',
  //   //     contacts: {
  //   //       telegram: "@testviy_test",
  //   //       email: "test@test.test",
  //   //       name: "Иван",
  //   //       surname: "Иванов",
  //   //       lastName: "Иванович"
  //   //     },
  //   //     isHero: false
  //   // })
  //     const q = query(docRef);
  //     const querySnapshot = await getDocs(q);
  //     dispatch(removePersons())
  //     querySnapshot.forEach((doc) => {
  //       dispatch(addPerson(doc.data()))
  //     });
  //   }
    
  //   const getGallary = async () => {
  //     const docRef = collection(db, "gallary");
  //     setDoc(doc(docRef), {
  //       img: photos[Math.floor(Math.random()*10)],
  //       countOfLikes: Math.floor(Math.random() * 1000),
  //       date: Math.floor(Math.random() *  190000000000),
  //       title: "",
  //       isHero: false
  //     })
  //     // const q = query(docRef, limit(20));
  //     // const querySnapshot = await getDocs(q);
  //     // dispatch(removeGallary())
  //     // querySnapshot.forEach((doc) => {
  //     //   dispatch(addGallary(doc.data()))
  //     // });
  //     // setIsGallaryLoadingST(false);
  //     // dispatch(setIsGallaryLoading(false));
  //   }
  //   // getPersons();
  //   // getGallary();
  // }, [])
  return (
    <>
      {/* {(isPersonsLoading && isGallaryLoading) && 
      <>
      loading...
      </>} */}
      {children}
    </>
  );
}

