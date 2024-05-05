import './admincard.css';
import { UnreadedPersonType } from '../../../store/unreadedPersonsSlice';
import { Text } from '../../../components/Text';
import unknown from '../../../assets/UnknownSoldier.jpg'
export function AdminCard({ e, handleClick, isActive }: { e: UnreadedPersonType; isActive: boolean; handleClick: () => void }) {
  return (
    <li onClick={handleClick} className={`adminUnreaded__item ${isActive ? "adminUnreaded__item-active" : ""}`}>
      <img  src={e.mainPhoto !== "" ? e.mainPhoto : unknown} alt="Основное фото" className='adminUnreaded__card-img' />
      <div className="adminUnreaded__card-content">
        <Text size={24} className='adminUnreaded__card-name' color='#333' weight={700} font='Lora'>{e.name}</Text>
        <Text size={14} className='adminUnreaded__card-descr' color='#333' weight={400} font='Lora'>{e.history.split('|').join('\n')}</Text>
        <Text size={14} color='#787878' weight={400} className='adminUnreaded__card-date'>Годы жизни: ({e.dateOfBirth === 1 ? '???' : e.dateOfBirth} - {e.dateOfDeath === 1 ? "???" : (e.dateOfDeath === 0 ? "н. в." : e.dateOfDeath + " гг." )})  </Text>

        <Text size={14} color='#787878' weight={400} className='adminUnreaded__card-rank'> Звание: {e.rank} </Text>

        <Text size={14} color='#787878' weight={400} className='adminUnreaded__card-rank'> Город: {e.city}</Text>
        <button className='adminUnreaded__arrow'>
          <svg viewBox="0 0 50 50" width={30} height={30} fill="none"><path d="M47.1891 46.6517L47.2119 5.71105L47.2135 2.78672M47.2135 2.78672L3.34848 2.8111M47.2135 2.78672L4.78707 45.2131" stroke="#333" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
      </div>
    </li>
  );
}
