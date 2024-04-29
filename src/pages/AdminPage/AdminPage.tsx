import './adminpage.css';
import { useLayoutEffect, useState } from 'react';
import { AdminNav } from '../../shared/AdminNav';
import { AdminUnreaded } from '../../shared/AdminUnreaded';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addUnreadedPerson, removeUnreadedPersons } from '../../store/unreadedPersonsSlice';
import { AdminAllRequsts } from '../../shared/AdminAllRequests/AdminAllRequests';
import { AdminHandAdding } from '../../shared/AdminHandAdding';
import axios from 'axios';

export type TAdminBlocks = 'unreaded' | 'content' | "allRequests" | "handAdding";


export function AdminPage() {
  const token = localStorage.getItem('token')
  const [countUnreaded, setCountUnreaded] = useState(0);
  const [countGetted, setCountGetted] = useState(0);
  const [activePage, setActivePage] = useState<TAdminBlocks>('unreaded');
  const [isLoadingPersons, setIsLoadingPersons] = useState(false);
  const dispatch = useAppDispatch();
  const getMorePersons = async () => {
    // setLastUnreadedPerson(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useLayoutEffect(() => {
    setIsLoadingPersons(true)
    if (token) {
      axios.get(`https://for-9-may.onrender.com/api/v1/unreadedPersons?token_query=${token}`).then((res) => {
        setCountUnreaded(countGetted + res.data.detail.length);
        dispatch(removeUnreadedPersons());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        res.data.detail.forEach((e: any) => {
          dispatch(addUnreadedPerson({
            ...e,
            name: e.SNL,
            photos: e.photo.split(','),
            mainPhoto: e.main_photo,
            dateOfBirth: e.date_birth,
            dateOfDeath: e.date_death,
            isHero: e.role,
            published: e.date_pulished,
            contacts: {
              name: e.contact_SNL,
              email: e.contact_email,
              telegram: e.contact_telegram
            },
            medals: (e.medals ? e.medals.split(',') : [])
          }));
        });
        console.log(res)
      }).catch(err => {
        localStorage.removeItem('token')
        window.location.href = '/auth'
        console.log(err)
      })
    } else {
      window.location.href = '/auth'

      localStorage.removeItem('token')
    }
    setIsLoadingPersons(false)
  }, [countGetted, dispatch, token])

  return (
    <>
      <div className="adminPage">
        <AdminNav active={activePage} setActive={setActivePage} countUnreaded={countUnreaded} />
        {activePage === 'content' && <div>qwe</div>}
        {activePage === 'unreaded' && <AdminUnreaded setIsLoadingPersons={setIsLoadingPersons} setCountGetted={setCountGetted} setCountUnreaded={setCountUnreaded} isLoadingPersons={isLoadingPersons} countGetted={countGetted} getMorePersons={getMorePersons} count={countUnreaded} />}
        {activePage === 'allRequests' && <AdminAllRequsts />}
        {activePage === 'handAdding' && <AdminHandAdding />}
        {/* <Text size={40} font='Lora' weight={400}>Добро пожаловать, администратор!</Text> */}
      </div>
    </>
  );
}
