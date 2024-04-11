import './adminactive.css';
import { UnreadedPersonType } from '../../../store/unreadedPersonsSlice';
import { Text } from '../../../components/Text';
// import { EMedals } from '../../../store/personsSlice';
import { MedalComponent } from '../../../assets/medals/medal';


export function AdminActive({ e }: { e: UnreadedPersonType | null; }) {
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  if (!e) {
    return <div className='adminUnreaded__active'>
    </div>
  }
  return (
    <div className='adminUnreaded__active'>
      <div className="adminUnreaded__top">
        <img src={e.mainPhoto} alt="Основное фото" className='adminUnreaded__active-img' />
        <div className="adminUnreaded__info">
          <Text size={30} font='Lora' weight={700}>ФИО: {e.name}</Text>
          <Text size={20} color='#666' weight={400} font='Lora'>Годы жизни: {e.dateOfBirth} - {e.dateOfDeath} гг.</Text>
          <Text size={20} color='#666' weight={400} font='Lora'>Родной город: {e.city}</Text>
          <Text size={20} color='#666' weight={400} font='Lora'>Звание: {e.rank}</Text>
        </div>
      </div>
      {e.medals.length === 0 ? <Text size={24}>Нет медалей</Text> :
        <ul className="adminUnreaded__medals">
          {e.medals.map(q => {
            return <li className='adminUnreaded__medals-item'>
              <MedalComponent type={q} />
              <Text size={14} color='#666' weight={400}>{q}</Text>
            </li>
          })}
        </ul>
      }
      <div className="adminUnreaded__history">
        <Text className='adminUnreaded__descr-title' size={28} weight={500} font='Lora'>История: </Text>
        <br />
        <Text className='adminUnreaded__descr' size={16} weight={400} font='Lora'>{e.history}</Text>
      </div>
      <br />
      <br />
      <div className="adminUnreaded__photos">
        <Text className='adminUnreaded__photos-title' size={28} weight={500} font='Lora'>Фото: </Text>
        <br />
        <br />
        <div className="adminUnreaded__photos-con">
          {e.photos.map(j => {
            return <img src={j} />
          })}
        </div>
      </div>
      <div className='adminUnreaded__contacts'>
        <div className="adminUnreaded__contacts-info">
          <Text size={28} weight={500}>Контакты</Text>
          <br />
          <br />
          <Text size={20} weight={400}>ФИО: {e.contacts.surname} {e.contacts.name} {e.contacts.lastName}</Text>
          <br />
          <Text size={20} weight={400}>telegram: <a href={`https://t.me/${e.contacts.telegram}`}>{e.contacts.telegram}</a></Text>
          <br />
          <Text size={20} weight={400}>email: <a href={`mailto:${e.contacts.email}`}>{e.contacts.email}</a></Text>
          <br />
          <Text size={20} weight={400}>Отправлено: {new Date(e.published).toLocaleDateString()} {new Date(e.published).toLocaleTimeString()}</Text>
        </div>
        <div className="adminUnreaded__controls">
          <button className='adminUnreaded__controls-btn adminUnreaded__controls-approve'>
            <Text size={36} color='#fff'> 
              Одобрить
            </Text>
          </button>
          <button className='adminUnreaded__controls-btn adminUnreaded__controls-disapprove'>
            <Text size={36} color='#fff'> 
              Отклонить
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
}
