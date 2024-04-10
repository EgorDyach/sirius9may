import './adminunreaded.css';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useLayoutEffect, useState } from 'react';
import { UnreadedPersonType } from '../../store/unreadedPersonsSlice';
import { AdminCard } from './AdminCard';
import { AdminActive } from './AdminActive';
import { Text } from '../../components/Text';

export function AdminUnreaded({ getMorePersons, count, countGetted }: { getMorePersons: () => Promise<void>; count: number; countGetted: number; }) {
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
      <div className='adminUnreaded__active'>
        {activeId !== '' && activePerson !== null && <AdminActive e={activePerson} />}
      </div>
      <ul className='adminUnreaded__list'>
        {unreadedPersons.map(e => {
          return <AdminCard e={e} handleClick={() => setActiveId(e.id)} />
        })}
        {countGetted < count &&
          <li>
            <button onClick={getMorePersons}>
              <Text size={20} font='Lato'>Посмотреть еще</Text>
            </button>
          </li>
        }
      </ul>
    </div>
  );
}
