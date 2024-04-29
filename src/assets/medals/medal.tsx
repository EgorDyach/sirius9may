import { EMedals } from '../../store/personsSlice';
import other from '../../assets/medals/medalOther.png'
export function getMedalKeyByName(name: string) {
    for (const [key, value] of Object.entries(EMedals)) {
      if (value === name) {
        return key; // Возвращаем ключ для найденной медали
      }
    }
    return 'medalOther'; // Если медаль не найдена, возвращаем пустую строку
  }

export const MedalComponent =  ({type, size}: {type: string; size?: number; }) => {
    return <img width={size}  src={getMedalKeyByName(type) === 'medalOther' ? other : `/medals/${getMedalKeyByName(type)}.png`} />
}
