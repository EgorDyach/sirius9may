import { Link } from 'react-router-dom';
import { Text } from '../../../components/Text';
import { PersonType } from '../../../store/personsSlice';
import './historiesactive.css';
import unkown from '../../../assets/UnknownSoldier.jpg';
import React, { SetStateAction } from 'react';
export function HistoriesActive({ active, fadingUp, fadingDown, setIsImgLoading, isImgLoading}: { isImgLoading: boolean; setIsImgLoading: React.Dispatch<SetStateAction<boolean>>; fadingUp: boolean; fadingDown: boolean; active: PersonType }) {
  return (
    <div className={`histories__active ${fadingDown ? "fadingDown" : ""} ${fadingUp ? "fadingUp" : ""}`}>
      <div className="histories__active-img">
        {isImgLoading && <span className="img__loader">
            <span></span>
          </span>}
        <img onLoad={() => setIsImgLoading(false)} src={active?.mainPhoto ? active?.mainPhoto : unkown} alt={`${active.name} - основное фото`} />
      </div>
      <div className="histories__active-info">
        <Text size={64} font='Lora' color='#fff'>{active.name}</Text>
        <div className="histories__active-img histories__active-img-mob">
          <img className='' src={active?.mainPhoto ? active?.mainPhoto : unkown} alt={`${active.name} - основное фото`} />
        </div>
        <Text size={48} font='Lora' color='#fff'>{active.dateOfBirth === 1 ? '???' : active.dateOfBirth} – {active.dateOfDeath === 0 ? "н. в." : (active.dateOfDeath === 1 ? "???" : active.dateOfDeath)}</Text>
        <Text size={32} weight={500} className='histories__descr' color='#fff'>{active.history.split('|').map(text => <p>{text}</p>)}</Text>
        <Link className='histories__link' to={'/histories/' + active.id}>
          <Text size={32} font='Lora' weight={500} color='#fff'>Подробнее</Text>
        </Link>
      </div>
    </div>
  );
}
