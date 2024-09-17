import './adminunreaded.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useLayoutEffect, useState } from 'react';
import { UnreadedPersonType, addUnreadedPerson, removeUnreadedPersons, updateUnreadedPerson } from '../../store/unreadedPersonsSlice';
import { AdminCard } from './AdminCard';
import { AdminActive } from './AdminActive';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

export function AdminUnreaded({ countGetted, isLoadingPersons, setCountUnreaded, setIsLoadingPersons }: { setIsLoadingPersons: React.Dispatch<React.SetStateAction<boolean>>; isLoadingPersons: boolean; getMorePersons: () => Promise<void>; count: number; countGetted: number; setCountUnreaded: React.Dispatch<React.SetStateAction<number>>; setCountGetted: React.Dispatch<React.SetStateAction<number>>; }) {
  const token = localStorage.getItem('token');
  const unreadedPersons = useAppSelector(state => state.unreadedPersons.unreadedPersons);

  const [activeId, setActiveId] = useState('');
  const [activePerson, setActivePerson] = useState<UnreadedPersonType>(NO_UNREADED_PERSON);
  const [isChanged, setIsChanged] = useState(false);
  const navigate = useNavigate();
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

  const handleApprove = async () => {
    await axios.post(`https://siriuspolk.online/api/v1/persons?id=${activeId}&token_query=${token}&city=${city}&date_birth=${dateOfBirth}&date_death=${dateOfDeath}&history=${history}&role=${isHero}&main_photo=${mainPhoto}&SNL=${name}&date_pulished=${Math.floor(new Date().getTime()/1000)}&rank=${rank}`, {
      medals: [medals.join(',')],
      photo: [photos.join(',')]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
      }
    }).then(() => {
      loadPersons().then(() => {
        if (unreadedPersons.length > 1) {
          setActivePerson(unreadedPersons[1])
          setActiveId(unreadedPersons[1].id);
        }
      })
    })
  }

  const handleDisapprove = async () => {
    await axios.delete(`https://siriuspolk.online/api/v1/unreadedPersons/${activeId}?token_query=${token}`).then(() => {
      loadPersons().then(() => {
        if (unreadedPersons.length > 0) {
          setActivePerson(unreadedPersons[0])
          setActiveId(unreadedPersons[0].id);
        }
      })
    })
  }

  const handleChange = () => {
    setIsChanged(true)
  }

  const loadPersons = async () => {
    setIsLoadingPersons(true)
    if (token) {
      await axios.get(`https://siriuspolk.online/api/v1/unreadedPersons?token_query=${token}`).then((res) => {
        setCountUnreaded(countGetted + res.data.detail.length);
        dispatch(removeUnreadedPersons());
        res.data.detail.forEach((e: { SNL: any; date_published:any; photo: string; main_photo: any; date_birth: any; date_death: any; role: any; contact_SNL: any; contact_email: any; contact_telegram: any; medals: string; }) => { // eslint-disable-line
          dispatch(addUnreadedPerson({
            ...e,
            name: e.SNL,
            photos: e.photo.split(','),
            mainPhoto: e.main_photo,
            dateOfBirth: e.date_birth,
            dateOfDeath: e.date_death,
            published: e.date_published,
            isHero: e.role,
            contacts: {
              name: e.contact_SNL,
              email: e.contact_email,
              telegram: e.contact_telegram
            },
            medals: (e.medals ? e.medals.split(',') : [])
          }));
        });
      }).catch((err) => {
        localStorage.removeItem('token')
        navigate('/auth')
        console.log(err)
      })
    } else {
      navigate('/auth')
      localStorage.removeItem('token')
    }
    setIsLoadingPersons(false)
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
    dispatch(updateUnreadedPerson({
      id: activeId, data: {
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
      }
    }))
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
            return <AdminCard isActive={activeId === e.id} e={e} handleClick={() => { setActiveId(e.id); setIsChanged(false) }} />
          })}
        </ul>
      </div>
    </div>

  );
}
