import {  storage } from '../../firebase';
import { EMedals } from '../../store/contentSlice';
import { getDownloadURL, ref } from "firebase/storage";
import img from './medalOther.png';
import { useState } from 'react';
function getMedalKeyByName(name: string) {
    for (const [key, value] of Object.entries(EMedals)) {
      if (value === name) {
        return key; // Возвращаем ключ для найденной медали
      }
    }
    return 'medalOther'; // Если медаль не найдена, возвращаем пустую строку
  }

export const MedalComponent =  ({type}: {type: string; }) => {
    const medalRef = ref(storage, `medals/${getMedalKeyByName(type)}.png`);
    const [refImg, setRefImg] = useState(img)
    getDownloadURL(medalRef).then(res =>  {
        setRefImg(res)
    })
    return <img src={refImg} />
}
