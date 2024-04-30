import { Text } from '../../components/Text';
import { PersonType } from '../../store/personsSlice';
import './historiescard.css';
import unknown from "../../assets/UnknownSoldier.jpg"
import { Link } from 'react-router-dom';

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

// Пример использования функции
// const millisecondsSinceEpoch = Date.now(); // Текущее время в миллисекундах
// console.log(formatDateFromMilliseconds(millisecondsSinceEpoch));

export function HistoriesCard({ e }: { e: PersonType }) {
  return (
    <div className='historiesCard'>
      <Link to={`./${e.id}`}>
      <img src={e.mainPhoto ? e.mainPhoto : unknown} alt="" className="historiesCard__img" />
      </Link>
      <div className="historiesCard__info">
        <Text As='h3' className='historiesCard__info-text' size={24} font='Lora' weight={400}>{e.name} <br />({e.dateOfBirth} – {e.dateOfDeath})</Text>
        <div className="historiesCard__info-more">
          <Text size={16} font='Lora' weight={400}>{formatDateFromMilliseconds(e.published*1000)}</Text>
          <Link to={`./${e.id}`}><Text size={16} font='Lora' weight={400}>Подробнее</Text></Link>
        </div>
      </div>
    </div>
  );
}
