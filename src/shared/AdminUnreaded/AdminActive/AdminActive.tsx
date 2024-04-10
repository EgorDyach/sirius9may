import  './adminactive.css';
import { UnreadedPersonType } from '../../../store/unreadedPersonsSlice';

export function AdminActive({e}: {e: UnreadedPersonType}) {
  return (
    <div>
      {e.name}
      <img src={e.mainPhoto} alt="" />
    </div>
  );
}
