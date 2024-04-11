import './adminunreaded.css';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useLayoutEffect, useState } from 'react';
import { UnreadedPersonType } from '../../store/unreadedPersonsSlice';
import { AdminCard } from './AdminCard';
import { AdminActive } from './AdminActive';
import { Text } from '../../components/Text';

export function AdminUnreaded({ getMorePersons, count, countGetted, isLoadingPersons }: { isLoadingPersons: boolean; getMorePersons: () => Promise<void>; count: number; countGetted: number; }) {
  const unreadedPersons = useAppSelector(state => state.unreadedPersons.unreadedPersons);
  const [activeId, setActiveId] = useState('');
  const [activePerson, setActivePerson] = useState<UnreadedPersonType | null>(null);
  useLayoutEffect(() => {
    const person = unreadedPersons.find(e => e.id === activeId)
    if (typeof person !== 'undefined') {
      setActivePerson(person)
    } else {
      setActivePerson(null)
    }
  }, [activeId, unreadedPersons])
  return (
    <div className='adminUnreaded'>
      <AdminActive e={activePerson} />
      <div className="adminUnreaded__right">

        <ul className={`adminUnreaded__list ${isLoadingPersons ? "adminUnreaded__list-loading" : ""}`}>
          {unreadedPersons.map(e => {
            return <AdminCard isActive={activeId === e.id} e={e} handleClick={() => setActiveId(e.id)} />
          })}
          {countGetted < count &&
            <li className='adminUnreaded__item-btn'>
              <button className='adminUnreaded__more' onClick={getMorePersons}>
                <Text size={30} color="#fff" font='Lato'>Посмотреть еще</Text>
              </button>
            </li>
          }
        </ul>
      </div>
    </div>

  );
}
