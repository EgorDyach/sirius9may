import { Link } from 'react-router-dom';
import { Text } from '../../../components/Text';
import { PersonType } from '../../../store/personsSlice';
import  './historiesactive.css';

export function HistoriesActive({active, fadingUp, fadingDown}: {fadingUp: boolean; fadingDown: boolean; active: PersonType}) {
  return (
    <div className={`histories__active ${fadingDown ? "fadingDown":""} ${fadingUp ? "fadingUp" : ""}`}>
      <div className="histories__active-img">
        <img src={active.mainPhoto} alt={`${active.name} - основное фото`} />
      </div>
      <div className="histories__active-info">
          <Text size={64} font='Lora' color='#fff'>{active.name}</Text>
          <Text size={48} font='Lora' color='#fff'>{active.dateOfBirth === 1 ? '???' : active.dateOfBirth} – {active.dateOfDeath === 0 ? "н. в." : (active.dateOfDeath === 1 ? "???" : active.dateOfDeath)}</Text>
          <Text size={32} weight={500} className='histories__descr' color='#fff'>{active.history}</Text>
          <Link className='histories__link' to={'/histories/'+active.id}>
            <Text size={32} font='Lora' weight={500} color='#fff'>Подробнее</Text>
          </Link>
      </div>
    </div>
  );
}
