import  './adminnav.css';
import { TAdminBlocks } from '../../pages/AdminPage';
import { Text } from '../../components/Text';

export function AdminNav({ active, setActive, countUnreaded }: { active: TAdminBlocks, setActive: React.Dispatch<React.SetStateAction<TAdminBlocks>>; countUnreaded: number; }) {
  const handleClick = (type: TAdminBlocks) => {
    setActive(type)
  }
  return (
    <ul className='adminNav__list'>

      <li className={active === 'unreaded' ? 'adminNav__item adminNav__item-active' : 'adminNav__item'}>
        <button disabled={countUnreaded === 0} onClick={() => handleClick('unreaded')}>
          <Text size={20} color={countUnreaded !== 0 ? '#333' : "#999"} weight={700}>
            Непрочитанные
          </Text>
          {countUnreaded !== 0 && <span className='adminNav__countUnreaded'>
            <Text size={12} color='#fff'>
              {countUnreaded > 99 ? '99+' : countUnreaded}
            </Text>
          </span>}
        </button>
      </li>
      <li className={active === 'content' ? 'adminNav__item adminNav__item-active' : 'adminNav__item'}>
        <button onClick={() => handleClick('content')}>
          <Text size={20} color='#333' weight={700}>
            Контент
          </Text>
        </button>
      </li>
      <li className={active === 'allRequests' ? 'adminNav__item adminNav__item-active' : 'adminNav__item'}>
        <button onClick={() => handleClick('allRequests')}>
          <Text size={20} color='#333' weight={700}>
            Все заявки
          </Text>
        </button>
      </li>
    </ul>
  );
}
