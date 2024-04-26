import './adminallcard.css';
import { Text } from '../../../components/Text';
import { PersonType } from '../../../store/personsSlice';
import '../../HistoriesCard/historiescard.css';
import unknown from "../../../assets/UnknownSoldier.jpg"
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { asy } from '../../Layout';
import axios from 'axios';


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


export function AdminAllCard({ e }: { e: PersonType; }) {
  const token = localStorage.getItem('token')
  const dispatch = useAppDispatch();
  const handleDelete = async () => {
    await axios.delete(`https://for-9-may.onrender.com/api/v1/unreadedPersons/${e.id}?token_query=${token}`).then(res => console.log(res)).then(() => {
      asy(dispatch);
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
          <Link to={`/histories/${e.id}`}><Text size={16} font='Lora' weight={400}>Подробнее</Text></Link>
        </div>
      </div>
    </div>
  );
}
