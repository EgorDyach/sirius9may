import './adminactive.css';
import { UnreadedPersonType } from '../../../store/unreadedPersonsSlice';
import { Text } from '../../../components/Text';
import { MedalComponent } from '../../../assets/medals/medal';
import { EMedals } from '../../../store/personsSlice';
import unknown from '../../../assets/UnknownSoldier.jpg'
import { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { IOption } from '../../FormMedals';

interface IAdminActive {
  handleChange: () => void;
  isChanged: boolean;
  e: UnreadedPersonType;
  handleApprove: () => void;
  handleDisapprove: () => void;
  name: string;
  dateOfBirth: number;
  dateOfDeath: number;
  city: string;
  rank: string;
  medals: EMedals[];
  history: string;
  photos: string[];
  mainPhoto: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDateOFBirth: React.Dispatch<React.SetStateAction<number>>;
  setDateOfDeath: React.Dispatch<React.SetStateAction<number>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setRank: React.Dispatch<React.SetStateAction<string>>;
  setMedals: React.Dispatch<React.SetStateAction<EMedals[]>>;
  setHistory: React.Dispatch<React.SetStateAction<string>>;
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
  setMainPhoto: React.Dispatch<React.SetStateAction<string>>;
  setIsHero: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave: () => void;
  handleCancel: () => void;
  isHero: boolean;
}

export function AdminActive(
  { e, handleApprove, handleDisapprove, handleChange, isChanged, name, dateOfBirth, dateOfDeath, city, isHero, rank, medals, history, photos, mainPhoto, setName, setDateOFBirth, setDateOfDeath, setCity, setRank, setMedals, setHistory, setPhotos, setIsHero, setMainPhoto, handleSave, handleCancel }: IAdminActive) {
  const [addMedal, setAddMedal] = useState(false);
  const [options, setOptions] = useState<IOption[]>([]);
  const animatedComponents = makeAnimated();
  const [checkedOptions, setCheckedOptions] = useState<IOption[]>([]);
  useEffect(() => {
    const v = [];
    for (const [key, value] of Object.entries(EMedals)) {
      key;
      v.push({
        value: value, text: value, label: <div className='formMedals__option'>
          <MedalComponent size={50} type={value} />
          {value}
        </div>
      })
    }
    setOptions(v as IOption[]);
  }, [])

  useEffect(() => {
    const v: { value: string, text: string, label: ReactNode }[] = [];
    medals.forEach((q) => {
      const key = Object.keys(EMedals)[Object.values(EMedals).indexOf(q)];
      v.push({
        value: key, text: q, label: <div className='formMedals__option'>
          <MedalComponent size={50} type={q} />
          {q}
        </div>
      })
    })
    setCheckedOptions(v as IOption[]);
  }, [addMedal])

  useLayoutEffect(() => {
    setMedals(checkedOptions.map(e => e.text) as EMedals[]);
  }, [checkedOptions, setMedals])
  if (e.id === '') {
    return <div className='adminUnreaded__active'>
    </div>
  }
  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos]
    newPhotos.splice(index, 1);
    setPhotos(newPhotos)
  }
  const handleRemoveMedal = (index: number) => {
    const newMedals = [...medals]
    newMedals.splice(index, 1);
    setMedals(newMedals)
  }

  if (isChanged) {
    return (
      <div className='adminUnreaded__active'>
        <div className="adminUnreaded__top">
          <div className="adminUnreaded__mainPhoto">
            <img src={mainPhoto !== "" ? mainPhoto : unknown} alt="Основное фото" className='adminUnreaded__active-img' />
            <button onClick={() => { setMainPhoto("") }}>
              <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.4031 24.9973L49.0763 5.35323C49.6643 4.76514 49.9947 3.96753 49.9947 3.13585C49.9947 2.30417 49.6643 1.50655 49.0763 0.918469C48.4883 0.330383 47.6907 0 46.8592 0C46.0276 0 45.23 0.330383 44.642 0.918469L25 20.5938L5.35799 0.918469C4.76996 0.330383 3.97243 7.38401e-07 3.14084 7.44598e-07C2.30925 7.50794e-07 1.51172 0.330383 0.9237 0.918469C0.335677 1.50655 0.00533001 2.30417 0.00533001 3.13585C0.00533 3.96753 0.335677 4.76514 0.9237 5.35323L20.5969 24.9973L0.9237 44.6414C0.631011 44.9318 0.398698 45.2772 0.240161 45.6578C0.0816236 46.0383 0 46.4465 0 46.8588C0 47.2711 0.0816236 47.6793 0.240161 48.0599C0.398698 48.4405 0.631011 48.7859 0.9237 49.0762C1.214 49.3689 1.55938 49.6013 1.93991 49.7598C2.32045 49.9184 2.72861 50 3.14084 50C3.55308 50 3.96124 49.9184 4.34178 49.7598C4.72231 49.6013 5.06769 49.3689 5.35799 49.0762L25 29.4009L44.642 49.0762C44.9323 49.3689 45.2777 49.6013 45.6582 49.7598C46.0388 49.9184 46.4469 50 46.8592 50C47.2714 50 47.6796 49.9184 48.0601 49.7598C48.4406 49.6013 48.786 49.3689 49.0763 49.0762C49.369 48.7859 49.6013 48.4405 49.7598 48.0599C49.9184 47.6793 50 47.2711 50 46.8588C50 46.4465 49.9184 46.0383 49.7598 45.6578C49.6013 45.2772 49.369 44.9318 49.0763 44.6414L29.4031 24.9973Z" fill="#ae0000" />
              </svg>
            </button>
          </div>
          <div className="adminUnreaded__info">
            <Text size={30} font='Lora' weight={700}>ФИО: <input type="text" value={name} onChange={(q) => setName(q.target.value)} />
            </Text>
            <Text size={20} color='#666' weight={400} font='Lora'>
              Годы жизни: <input type='number' placeholder='Дата рождения' value={dateOfBirth} onChange={(q) => setDateOFBirth(Number(q.target.value))} /> - <input type='number' placeholder='Дата смерти' value={dateOfDeath} onChange={(q) => setDateOfDeath(Number(q.target.value))} /> гг.
            </Text>
            <Text size={20} color='#666' weight={400} font='Lora'>
              Родной город: <input type='text' value={city} onChange={(q) => setCity(q.target.value)} />
            </Text>
            <Text size={20} color='#666' weight={400} font='Lora'>
              Звание:  <input type='text' value={rank} onChange={(q) => setRank(q.target.value)} />
            </Text>
          </div>
        </div>

        {!addMedal && <button onClick={() => setAddMedal(!addMedal)}>
          <svg width="65" height="65" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.875 58.9997H71.9999V8.99998C71.9999 6.8451 71.9999 2.00076 71.9999 0.000366923C70.3749 0.000193116 67.1549 5.76508e-05 65 5.76508e-05C62.8451 5.76508e-05 61.625 -0.000197854 59 0.000366923C59 2.50037 58.9999 5.97017 58.9999 8.12506V58.9997H8.12502C5.97013 58.9997 2.49997 58.9997 2.10246e-05 58.9997C-2.62808e-05 62.1243 2.10246e-05 62.8452 2.10246e-05 65C2.10246e-05 67.1549 5.1125e-05 68.3746 2.10246e-05 71.5C3.00002 71.5 5.97013 71.5 8.12502 71.5H58.9999V121.875C58.9999 124.03 58.9999 127.5 58.9999 130C63.1249 130 62.8451 130 65 130C67.1549 130 69.8749 130 71.9999 130C71.9999 127.5 71.9999 124.03 71.9999 121.875V71.5H121.875C124.03 71.5 127 71.4999 130 71.4999C130 69.3745 130 67.1549 130 65C130 62.8452 130 63.1245 130 58.9997C125.5 58.9999 124.03 58.9997 121.875 58.9997Z" fill="#B3B3B3" />
          </svg>
          Добавить Медали
        </button>}
        {!addMedal && (medals && medals.length === 0 ? <Text size={24}>Нет медалей</Text> :
          <ul className="adminUnreaded__medals">
            {medals && medals.map(q => {
              return <li className='adminUnreaded__medals-item'>
                <MedalComponent type={q} />
                <Text size={14} color='#666' weight={400}>{q}</Text>
                <button onClick={() => handleRemoveMedal(medals.indexOf(q))}>
                  <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4031 24.9973L49.0763 5.35323C49.6643 4.76514 49.9947 3.96753 49.9947 3.13585C49.9947 2.30417 49.6643 1.50655 49.0763 0.918469C48.4883 0.330383 47.6907 0 46.8592 0C46.0276 0 45.23 0.330383 44.642 0.918469L25 20.5938L5.35799 0.918469C4.76996 0.330383 3.97243 7.38401e-07 3.14084 7.44598e-07C2.30925 7.50794e-07 1.51172 0.330383 0.9237 0.918469C0.335677 1.50655 0.00533001 2.30417 0.00533001 3.13585C0.00533 3.96753 0.335677 4.76514 0.9237 5.35323L20.5969 24.9973L0.9237 44.6414C0.631011 44.9318 0.398698 45.2772 0.240161 45.6578C0.0816236 46.0383 0 46.4465 0 46.8588C0 47.2711 0.0816236 47.6793 0.240161 48.0599C0.398698 48.4405 0.631011 48.7859 0.9237 49.0762C1.214 49.3689 1.55938 49.6013 1.93991 49.7598C2.32045 49.9184 2.72861 50 3.14084 50C3.55308 50 3.96124 49.9184 4.34178 49.7598C4.72231 49.6013 5.06769 49.3689 5.35799 49.0762L25 29.4009L44.642 49.0762C44.9323 49.3689 45.2777 49.6013 45.6582 49.7598C46.0388 49.9184 46.4469 50 46.8592 50C47.2714 50 47.6796 49.9184 48.0601 49.7598C48.4406 49.6013 48.786 49.3689 49.0763 49.0762C49.369 48.7859 49.6013 48.4405 49.7598 48.0599C49.9184 47.6793 50 47.2711 50 46.8588C50 46.4465 49.9184 46.0383 49.7598 45.6578C49.6013 45.2772 49.369 44.9318 49.0763 44.6414L29.4031 24.9973Z" fill="#ae0000" />
                  </svg>
                </button>
              </li>
            })}

          </ul>)
        }
        {addMedal && <><Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "#B3B3B3",
              borderRadius: 0,
              borderWidth: 5,
              background: 'transparent',
              padding: "34px 50px",
              marginBotttom: 10,
              cursor: 'pointer',
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              fontFamily: "Lora",
              fontSize: 20,
              padding: '20px 40px',
            }),

            multiValue: (baseStyles) => ({
              ...baseStyles,
              border: "1px solid #333",
              backgroundColor: "transparent",
              fontSize: 28,
            }),
            multiValueLabel: (baseStyles) => ({
              ...baseStyles,
              width: '100%',
              padding: 20,
            }),
          }}
          onChange={(q) => {
            const z: IOption[] = [];
            q.forEach((x) => {
              const v = { value: x.value, text: x.text, label: x.text }
              z.push(v as IOption);
            })
            setCheckedOptions(z);
          }}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          value={checkedOptions}
          defaultValue={checkedOptions}
          options={options}
          placeholder={<div className='select__placeholder'>
            <svg width="65" height="65" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M121.875 58.9997H71.9999V8.99998C71.9999 6.8451 71.9999 2.00076 71.9999 0.000366923C70.3749 0.000193116 67.1549 5.76508e-05 65 5.76508e-05C62.8451 5.76508e-05 61.625 -0.000197854 59 0.000366923C59 2.50037 58.9999 5.97017 58.9999 8.12506V58.9997H8.12502C5.97013 58.9997 2.49997 58.9997 2.10246e-05 58.9997C-2.62808e-05 62.1243 2.10246e-05 62.8452 2.10246e-05 65C2.10246e-05 67.1549 5.1125e-05 68.3746 2.10246e-05 71.5C3.00002 71.5 5.97013 71.5 8.12502 71.5H58.9999V121.875C58.9999 124.03 58.9999 127.5 58.9999 130C63.1249 130 62.8451 130 65 130C67.1549 130 69.8749 130 71.9999 130C71.9999 127.5 71.9999 124.03 71.9999 121.875V71.5H121.875C124.03 71.5 127 71.4999 130 71.4999C130 69.3745 130 67.1549 130 65C130 62.8452 130 63.1245 130 58.9997C125.5 58.9999 124.03 58.9997 121.875 58.9997Z" fill="#B3B3B3" />
            </svg>
            <Text size={48} weight={400} color="B3B3B3" >
              Введите список наград
            </Text>
          </div>}
        />
          <button onClick={() => { setAddMedal(false) }}>
            <Text size={32} font='Lora'>Сохранить</Text>
          </button>
        </>
        }
        <div className="adminUnreaded__history">
          <Text className='adminUnreaded__descr-title' size={28} weight={500} font='Lora'>История: </Text>
          <br />
          <Text className='adminUnreaded__descr' size={16} weight={400} font='Lora'><textarea className='textarea' value={history} onChange={(q) => setHistory(q.target.value)} /></Text>
        </div>
        <br />
        <br />
        <div className="adminUnreaded__photos">
          <Text className='adminUnreaded__photos-title' size={28} weight={500} font='Lora'>Фото: </Text>
          <br />
          <br />
          <div className="adminUnreaded__photos-con">
            {photos && photos.map(j => {
              return <div>
                <img src={j} />
                <button onClick={() => handleRemovePhoto(photos.indexOf(j))}>
                  <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4031 24.9973L49.0763 5.35323C49.6643 4.76514 49.9947 3.96753 49.9947 3.13585C49.9947 2.30417 49.6643 1.50655 49.0763 0.918469C48.4883 0.330383 47.6907 0 46.8592 0C46.0276 0 45.23 0.330383 44.642 0.918469L25 20.5938L5.35799 0.918469C4.76996 0.330383 3.97243 7.38401e-07 3.14084 7.44598e-07C2.30925 7.50794e-07 1.51172 0.330383 0.9237 0.918469C0.335677 1.50655 0.00533001 2.30417 0.00533001 3.13585C0.00533 3.96753 0.335677 4.76514 0.9237 5.35323L20.5969 24.9973L0.9237 44.6414C0.631011 44.9318 0.398698 45.2772 0.240161 45.6578C0.0816236 46.0383 0 46.4465 0 46.8588C0 47.2711 0.0816236 47.6793 0.240161 48.0599C0.398698 48.4405 0.631011 48.7859 0.9237 49.0762C1.214 49.3689 1.55938 49.6013 1.93991 49.7598C2.32045 49.9184 2.72861 50 3.14084 50C3.55308 50 3.96124 49.9184 4.34178 49.7598C4.72231 49.6013 5.06769 49.3689 5.35799 49.0762L25 29.4009L44.642 49.0762C44.9323 49.3689 45.2777 49.6013 45.6582 49.7598C46.0388 49.9184 46.4469 50 46.8592 50C47.2714 50 47.6796 49.9184 48.0601 49.7598C48.4406 49.6013 48.786 49.3689 49.0763 49.0762C49.369 48.7859 49.6013 48.4405 49.7598 48.0599C49.9184 47.6793 50 47.2711 50 46.8588C50 46.4465 49.9184 46.0383 49.7598 45.6578C49.6013 45.2772 49.369 44.9318 49.0763 44.6414L29.4031 24.9973Z" fill="#ae0000" />
                  </svg>
                </button>
              </div>
            })}
          </div>
        </div>
        <div className='adminUnreaded__contacts'>
          <div className="adminUnreaded__contacts-info">
            <Text size={28} weight={500}>Контакты</Text>
            <br />
            <Text size={20} weight={400}>Сообщение о медалях: {e.messageMedals}</Text>
            <br />
            <Text size={20} weight={400}>ФИО: {e.contacts.surname} {e.contacts.name} {e.contacts.lastName}</Text>
            <br />
            <Text size={20} weight={400}>telegram: <a href={`https://t.me/${e.contacts.telegram}`}>{e.contacts.telegram}</a></Text>
            <br />
            <Text size={20} weight={400}>email: <a href={`mailto:${e.contacts.email}`}>{e.contacts.email}</a></Text>
            <br />
            <Text size={20} weight={400}>Отправлено: {new Date(e.published * 1000).toLocaleDateString()} {new Date(e.published * 1000).toLocaleTimeString()}</Text>
          </div>
          <div className="adminUnreaded__controls">
            {isChanged &&
              <><button onClick={handleSave} className='adminUnreaded__controls-btn adminUnreaded__controls-cancel'>
                <Text size={26} color='#333'>
                  Сохранить
                </Text>
              </button>
                <button onClick={handleCancel} className='adminUnreaded__controls-btn adminUnreaded__controls-cancel'>
                  <Text size={26} color='#333'>
                    Отменить
                  </Text>
                </button>
              </>
            }
            {!isChanged && <>
              <button onClick={handleApprove} className='adminUnreaded__controls-btn adminUnreaded__controls-approve'>
                <Text size={26} color='#fff'>
                  Одобрить
                </Text>
              </button>
              <button onClick={handleChange} className='adminUnreaded__controls-btn adminUnreaded__controls-change'>
                <Text size={26} color='#fff'>
                  Редактировать
                </Text>
              </button>
              <button onClick={handleDisapprove} className='adminUnreaded__controls-btn adminUnreaded__controls-disapprove'>
                <Text size={26} color='#fff'>
                  Отклонить
                </Text>
              </button>
            </>}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='adminUnreaded__active'>
      <div className="adminUnreaded__top">
        <img src={mainPhoto !== "" ? mainPhoto : unknown} alt="Основное фото" className='adminUnreaded__active-img' />
        <div className="adminUnreaded__info">
          <Text size={30} font='Lora' weight={700}>ФИО: {e.name}</Text>
          <Text size={20} color='#666' weight={400} font='Lora'>Годы жизни: {e.dateOfBirth === 1 ? '???' : e.dateOfBirth} - {e.dateOfDeath === 1 ? "???" : (e.dateOfDeath === 0 ? "н. в." : e.dateOfDeath + " гг." )}</Text>
          <Text size={20} color='#666' weight={400} font='Lora'>Родной город: {e.city}</Text>
          <Text size={20} color='#666' weight={400} font='Lora'>Звание: {e.rank}</Text>
        </div>
      </div>
      {e.medals && e.medals.length === 0 ? <Text size={24}>Нет медалей</Text> :
        <ul className="adminUnreaded__medals">
          {e.medals && e.medals.map(q => {
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
        <Text className='adminUnreaded__descr' size={16} weight={400} font='Lora'>{e.history.split('|').map(e => <p>{e}</p>)}</Text>
      </div>
      <br />
      <br />
      <div className="adminUnreaded__photos">
        <Text className='adminUnreaded__photos-title' size={28} weight={500} font='Lora'>Фото </Text>
        <br />
        <br />
        <div className="adminUnreaded__photos-con">
          {e.photos && e.photos.map(j => {
          if (!j) {
            return;
          }
            return <img src={j} />
          })}
        </div>
      </div>
      <div className='adminUnreaded__contacts'>
        <div className="adminUnreaded__contacts-info">
          <Text size={28} weight={500}>Контакты</Text>
          <br />
          <br />
          <Text size={20} weight={400}>ФИО: {e.contacts.name}</Text>
          <br />
          <Text size={20} weight={400}>telegram: <a href={`https://t.me/${e.contacts && e.contacts.telegram}`}>{e.contacts && e.contacts.telegram}</a></Text>
          <br />
          <Text size={20} weight={400}>email: <a href={`mailto:${e.contacts && e.contacts.email}`}>{e.contacts && e.contacts.email}</a></Text>
          {/* <br /> */}
          {/* <Text size={20} weight={400}>Сообщение о медалях:{e.messageMedals}</Text> */}
          <br />
          <Text size={20} weight={400}>Отправлено: {e.published && <>{new Date(e.published * 1000).toLocaleDateString()} {new Date(e.published).toLocaleTimeString()}</>}</Text>
          <br />
          <br />
          <label>
            <input type='checkbox' checked={isHero} onChange={() => setIsHero(!isHero)} />
            <Text size={26} color='#000'>
              Добавить на главную страницу
            </Text>
          </label>
        </div>
        <div className="adminUnreaded__controls">
          <button onClick={handleApprove} className='adminUnreaded__controls-btn adminUnreaded__controls-approve'>
            <Text size={26} color='#fff'>
              Одобрить
            </Text>
          </button>
          <button onClick={handleChange} className='adminUnreaded__controls-btn adminUnreaded__controls-change'>
            <Text size={26} color='#fff'>
              Редактировать
            </Text>
          </button>
          <button onClick={handleDisapprove} className='adminUnreaded__controls-btn adminUnreaded__controls-disapprove'>
            <Text size={26} color='#fff'>
              Отклонить
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
}
