import './adminunreaded.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useLayoutEffect, useState } from 'react';
import { UnreadedPersonType, removeUnreadedPerson, updateUnreadedPerson } from '../../store/unreadedPersonsSlice';
import { AdminCard } from './AdminCard';
import { AdminActive } from './AdminActive';
import { Text } from '../../components/Text';
import { addDoc, collection, deleteDoc, doc, getCountFromServer } from 'firebase/firestore';
import { db } from '../../firebase';

const NO_UNREADED_PERSON = {
  name: '',
  city: "",
  dateOfBirth: 0,
  dateOfDeath: 0,
  history: '',
  mainPhoto: '',
  medals: [],
  messageMedals: '',
  photos: [],
  published: 0,
  rank: '',
  contacts: {
    telegram: "",
    email: "",
    name: "",
    surname: "",
    lastName: ""
  },
  id: '',
  isHero: false
}

export function AdminUnreaded({ getMorePersons, count, countGetted, isLoadingPersons, setCountUnreaded, setCountGetted }: { isLoadingPersons: boolean; getMorePersons: () => Promise<void>; count: number; countGetted: number; setCountUnreaded: React.Dispatch<React.SetStateAction<number>>; setCountGetted: React.Dispatch<React.SetStateAction<number>>; }) {
  const unreadedPersons = useAppSelector(state => state.unreadedPersons.unreadedPersons);
  const [activeId, setActiveId] = useState('');
  const [activePerson, setActivePerson] = useState<UnreadedPersonType>(NO_UNREADED_PERSON);
  const [isChanged, setIsChanged] = useState(false);
  const [name, setName] = useState(activePerson.name)
  const [dateOfBirth, setDateOFBirth] = useState(activePerson.dateOfBirth)
  const [dateOfDeath, setDateOfDeath] = useState(activePerson.dateOfDeath)
  const [city, setCity] = useState(activePerson.city)
  const [rank, setRank] = useState(activePerson.rank)
  const [medals, setMedals] = useState(activePerson.medals)
  const [history, setHistory] = useState(activePerson.history)
  const [photos, setPhotos] = useState(activePerson.photos)
  const [isHero, setIsHero] = useState(false)
  const [mainPhoto, setMainPhoto] = useState(activePerson.mainPhoto)
  const dispatch = useAppDispatch()
  const coll = collection(db, "unreadedPersons");

  const getCount = async () => {
    const snapshot = await getCountFromServer(coll);
    setCountUnreaded(snapshot.data().count);

  }
  const handleApprove = async () => {
    const docRef = collection(db, "persons");
      const req = {
        name,
        city,
        dateOfBirth,
        dateOfDeath,
        history,
        mainPhoto,
        medals,
        photos,
        published: activePerson.published,
        rank,
        isHero,
        id: activeId
      }
      await addDoc(docRef, isChanged ? req : {...activePerson, isHero})
      handleDisapprove();
  }

  const handleDisapprove = async () => {
    await deleteDoc(doc(db, 'unreadedPersons', activeId)).then(() => {
      dispatch(removeUnreadedPerson(activeId))
      
      setActiveId(unreadedPersons[1].id || '')
      setActivePerson(unreadedPersons[1] || NO_UNREADED_PERSON)
      getCount();
      setCountGetted(countGetted - 1);
      setIsChanged(false);
      if (countGetted < 6) {
        getMorePersons();
      }
    })
  }

  const handleChange = () => {
    setIsChanged(true)
  }

  const handleCancel = () => {
    setName(activePerson.name)
    setDateOFBirth(activePerson.dateOfBirth)
    setDateOfDeath(activePerson.dateOfDeath)
    setCity(activePerson.city)
    setRank(activePerson.rank)
    setMedals(activePerson.medals)
    setHistory(activePerson.history)
    setPhotos(activePerson.photos)
    setMainPhoto(activePerson.mainPhoto)
    setIsChanged(false)
  }

  const handleSave = () => {
    dispatch(updateUnreadedPerson({id: activeId, data: {
      name,
      city,
      dateOfBirth,
      dateOfDeath,
      history,
      mainPhoto,
      medals,
      photos,
      published: activePerson.published,
      rank,
      contacts: activePerson.contacts,
      id: activeId
    }}))
    setIsChanged(false)
  }

  useLayoutEffect(() => {
    setName(activePerson.name)
    setDateOFBirth(activePerson.dateOfBirth)
    setDateOfDeath(activePerson.dateOfDeath)
    setCity(activePerson.city)
    setRank(activePerson.rank)
    setMedals(activePerson.medals)
    setHistory(activePerson.history)
    setPhotos(activePerson.photos)
    setMainPhoto(activePerson.mainPhoto)
  }, [activePerson])

  useLayoutEffect(() => {
    const person = unreadedPersons.find(e => e.id === activeId)
    if (typeof person !== 'undefined') {
      setActivePerson(person)
    } else {
      setActivePerson(NO_UNREADED_PERSON)
    }
  }, [activeId, unreadedPersons])
  return (
    <div className='adminUnreaded'>
      <AdminActive
        isHero={isHero}
        handleChange={handleChange}
        isChanged={isChanged}
        e={activePerson}
        handleApprove={handleApprove}
        handleDisapprove={handleDisapprove}
        name={name}
        dateOfBirth={dateOfBirth}
        dateOfDeath={dateOfDeath}
        city={city}
        rank={rank}
        medals={medals}
        history={history}
        photos={photos}
        mainPhoto={mainPhoto}
        setName={setName}
        setDateOFBirth={setDateOFBirth}
        setDateOfDeath={setDateOfDeath}
        setCity={setCity}
        setRank={setRank}
        setMedals={setMedals}
        setHistory={setHistory}
        setPhotos={setPhotos}
        setIsHero={setIsHero}
        setMainPhoto={setMainPhoto}
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
      <div className="adminUnreaded__right">

        <ul className={`adminUnreaded__list ${isLoadingPersons ? "adminUnreaded__list-loading" : ""}`}>
          {unreadedPersons.map(e => {
            return <AdminCard isActive={activeId === e.id} e={e} handleClick={() => {setActiveId(e.id); setIsChanged(false)}} />
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
