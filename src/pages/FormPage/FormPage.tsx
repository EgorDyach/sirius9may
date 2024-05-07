import { useLayoutEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import './formpage.css';
import { FormNav } from '../../shared/FormNav';
import { FormMainInfo } from '../../shared/FormMainInfo';
import { UnreadedContactsType } from '../../store/unreadedPersonsSlice';
import { FormMedals, IOption } from '../../shared/FormMedals';
import { FormHistory } from '../../shared/FormHistory';
import { FormPhotos } from '../../shared/FormPhotos';
import { FormFeedback } from '../../shared/FormFeedback';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// athz1th9i
export type FormPersonType = {
  name: string;
  isAgree: boolean;
  surName: string;
  lastName: string;
  city: string;
  dateOfBirth: string;
  isBirthUnknown: boolean;
  dateOfDeath: string;
  isDeathUnknown: boolean;
  isAlive: boolean;
  history: string;
  mainPhoto: File | null;
  isNoMainPhoto: boolean;
  medals: IOption[];
  messageMedals: string;
  photos: File[];
  published: number;
  rank: string;
  contacts: UnreadedContactsType
}

export function FormPage() {
  const [isSendDisabled, setIsSendDisabled] = useState(false);
  const [activeFormBlock, setActiveFormBlock] = useState(0);
  const [mainInfoError, setMainInfoError] = useState(false);
  const [historyError, setHistoryError] = useState(false);
  const [contactsError, setContactsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormPersonType>(
    {
      name: '',
      isAgree: false,
      surName: '',
      lastName: '',
      city: '',
      dateOfBirth: '',
      dateOfDeath: '',
      isAlive: false,
      isBirthUnknown: false,
      isDeathUnknown: false,
      history: '',
      mainPhoto: null,
      isNoMainPhoto: false,
      messageMedals: '',
      medals: [],
      photos: [],
      published: 0,
      rank: '',
      contacts: {
        telegram: '',
        email: '',
        name: '',
        surname: '',
        lastName: ''
      }
    }
  )

  const handleSend = async () => {
    setIsSendDisabled(true);
    if (formData.name === '' || formData.surName === '' || (!formData.mainPhoto && !formData.isNoMainPhoto) || (formData.dateOfBirth === '' && !formData.isBirthUnknown) || (formData.dateOfDeath === '' && !formData.isDeathUnknown && !formData.isAlive) || formData.city === '' || formData.rank === '') {
      setMainInfoError(true);
      setErrorMsg('Не заполнены поля в блоке «Основная информация»!')
    }
    if (formData.history === '') {
      setHistoryError(true)
      setErrorMsg('Не заполнено поле в блоке «История»!')
    }
    if (formData.contacts.email === "" || !formData.isAgree || formData.contacts.name === "" || formData.contacts.surname === "" || formData.contacts.telegram === "") {
      setContactsError(true)
      setErrorMsg('Не заполнены поля в блоке «Обратная связь»!')
    }
    if ((formData.name !== '' && formData.isAgree && formData.surName !== '' && (formData.mainPhoto || formData.isNoMainPhoto) && (formData.dateOfBirth !== '' || formData.isBirthUnknown) && (formData.dateOfDeath !== '' || formData.isDeathUnknown || formData.isAlive) && formData.city !== '' && formData.rank !== '' && formData.history !== '' && formData.contacts.telegram !== '' && formData.contacts.email !== '' && formData.contacts.name !== '' && formData.contacts.surname !== '')) {
      const formDataMain = new FormData()
      if (formData.isNoMainPhoto) {
        formDataMain.append('main_photo', new File([], ''));
      }
      if (formData.mainPhoto && !formData.isNoMainPhoto) {
        formDataMain.append('main_photo', formData.mainPhoto);
      }
      formData.photos.forEach(e => {
        formDataMain.append('photo', e);
      })
      formDataMain.append('medals', formData.medals.map(e => e.text).toString());
      await axios.post(`https://for-9-may.onrender.com/api/v1/unreadedPersons?snl=${`${formData.surName} ${formData?.name} ${formData.lastName}`}&date_birth=${formData.isBirthUnknown ? 1 : formData.dateOfBirth}&date_death=${formData.isAlive ? 0 : (formData.isDeathUnknown ? 1 : formData.dateOfDeath)}&city=${formData?.city}&date_pulished=${Math.floor(new Date().getTime() / 1000)}&rank=${formData?.rank}&role=${true}&contact_email=${formData.contacts.email}&contact_SNL=${formData.contacts.surname + formData.contacts.name + formData.contacts.lastName}&contact_telegram=${formData.contacts.telegram}&history=${formData.history.replace(/\n/gi, '|')}`, formDataMain, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(() => {
          navigate('/thankyou')
        })
        .catch(error => {
          console.error(error);
        });
    }
    setIsSendDisabled(false);
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    });
    (() => {
      setWindowWidth(window.innerWidth)
    })();
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
      });
    };
  }, [windowWidth])

  return (
    <div className="form">
      <Container>
        <Text As='h2' className='form__title' size={80} weight={500} font='Lora'>Расскажи историю своего предка</Text>
        {windowWidth > 700 && <FormNav mainInfoError={mainInfoError} historyError={historyError} contactsError={contactsError} setActive={setActiveFormBlock} active={activeFormBlock} />}
        {(activeFormBlock === 0 || windowWidth <= 700) && <FormMainInfo error={mainInfoError} setError={setMainInfoError} formData={formData} setFormData={setFormData} setActiveFormBlock={() => { setActiveFormBlock(activeFormBlock + 1) }} />}
        {(activeFormBlock === 1 || windowWidth <= 700) && <FormMedals formData={formData} setFormData={setFormData} setActiveFormBlock={() => setActiveFormBlock(activeFormBlock + 1)} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
        {(activeFormBlock === 2 || windowWidth <= 700) && <FormHistory error={historyError} setError={setHistoryError} formData={formData} setFormData={setFormData} setActiveFormBlock={() => setActiveFormBlock(activeFormBlock + 1)} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
        {(activeFormBlock === 3 || windowWidth <= 700) && <FormPhotos formData={formData} setFormData={setFormData} setActiveFormBlock={() => setActiveFormBlock(activeFormBlock + 1)} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
        {(activeFormBlock === 4 || windowWidth <= 700) && <FormFeedback setErrorMsg={setErrorMsg} errorMsg={errorMsg} isSendDisabled={isSendDisabled} error={contactsError} setError={setContactsError} handleSend={handleSend} formData={formData} setFormData={setFormData} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
      </Container>
    </div>
  );
}
