import './adminallcard.css';
import { Text } from '../../../components/Text';
import { PersonType, removeOnePerson } from '../../../store/personsSlice';
import '../../HistoriesCard/historiescard.css';
import unknown from "../../../assets/UnknownSoldier.jpg"
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import {  removeOneNewPerson } from '../../../store/newPersons';


function formatDateFromMilliseconds(milliseconds: number): string {
  const monthes = ['января', "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
  const date = new Date(milliseconds);

  // Получаем день, месяц и год
  const day = date.getDate();
  const month = date.getMonth(); // Месяцы начинаются с 0, поэтому добавляем 1
  const year = date.getFullYear();

  // Получаем часы и минуты
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Форматируем день, месяц и год
  const dayString = day.toString().padStart(2, '0'); // Добавляем ведущие нули, если нужно
  const monthString = monthes[month];

  // Форматируем часы и минуты
  const hoursString = hours.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');

  // Собираем строку с датой
  return `${dayString} ${monthString} ${year}, ${hoursString}:${minutesString}`;
}


export function AdminAllCard({ e }: { e: PersonType }) {
  const THREE_DAYS = 259_200;
  const dispatch = useAppDispatch();
  // const newPersons = useAppSelector(state => state.newPersons.persons)
  // const persons = useAppSelector(state => state.persons.persons)
  const handleDelete = async () => {
    await deleteDoc(doc(db, 'persons', e.id)).then(() => {
      if (e.published >= new Date().getTime() / 1000 - THREE_DAYS) {
        dispatch(removeOneNewPerson(e.id));
      } else {
        dispatch(removeOnePerson(e.id));
      }
    })
  }
  return (
    <div className='historiesCard'>
      <img src={e.mainPhoto ? e.mainPhoto : unknown} alt="" className="historiesCard__img" />
      <div className="historiesCard__info">
        <Text As='h3' className='historiesCard__info-text' size={24} font='Lora' weight={400}>{e.name} <br />({e.dateOfBirth} – {e.dateOfDeath})</Text>
        <div className="historiesCard__info-more">
          <Text size={16} font='Lora' weight={400}>{formatDateFromMilliseconds(e.published * 1000)}</Text>
          <button onClick={handleDelete} className="adminAllCard__controls">
            Удалить
          </button>
          <Link to={`./${e.id}`}><Text size={16} font='Lora' weight={400}>Подробнее</Text></Link>
        </div>
      </div>
    </div>
  );
}
