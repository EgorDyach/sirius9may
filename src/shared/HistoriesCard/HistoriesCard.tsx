import { Text } from '../../components/Text';
import { PersonType } from '../../store/personsSlice';
import './historiescard.css';
import unknown from "../../assets/UnknownSoldier.jpg"
import { Link } from 'react-router-dom';

export function HistoriesCard({ e }: { e: PersonType }) {
  return (
    <div className='historiesCard'>
      <Link to={`./${e.id}`}>
      <img src={e.mainPhoto ? e.mainPhoto : unknown} alt="" className="historiesCard__img" />
      </Link>
      <div className="historiesCard__info">
        <Text As='h3' className='historiesCard__info-text' size={24} font='Lora' weight={400}>{e.name} <br />({e.dateOfBirth} – {e.dateOfDeath})</Text>
        <div className="historiesCard__info-more">
          <Text className='historiesCard__info-city' size={14} font='Lora' weight={400}>{e.city}</Text>
          <Link to={`./${e.id}`}><Text size={16} font='Lora' weight={400}>Подробнее</Text></Link>
        </div>
      </div>
    </div>
  );
}
