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

export type FormPersonType = {
  name: string;
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

// function guidGenerator() {
//   const S4 = () => {
//     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//   };
//   return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
// }

export function FormPage() {
  const [isSendDisabled, setIsSendDisabled] = useState(false);
  const [activeFormBlock, setActiveFormBlock] = useState(0);
  const [mainInfoError, setMainInfoError] = useState(false);
  const [historyError, setHistoryError] = useState(false);
  const [contactsError, setContactsError] = useState(false);
  const [formData, setFormData] = useState<FormPersonType>(
    {
      name: '',
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
  useLayoutEffect(() => {
    console.log(formData, setIsSendDisabled)
  }, [activeFormBlock])

  const handleSend = async () => {
    // setIsSendDisabled(true);
    if (formData.name === '' || formData.surName === '' || (!formData.mainPhoto && !formData.isNoMainPhoto) || (formData.dateOfBirth === '' && !formData.isBirthUnknown) || (formData.dateOfDeath === '' && !formData.isDeathUnknown && !formData.isAlive) || formData.city === '' || formData.rank === '') {
      setMainInfoError(true)
    }
    if (formData.history === '') {
      setHistoryError(true)
    }
    if (formData.contacts.email === "" || formData.contacts.name === "" || formData.contacts.surname === "" || formData.contacts.telegram === "") {
      setContactsError(true)
    }
    if ((formData.name !== '' && formData.surName !== '' && (formData.mainPhoto || formData.isNoMainPhoto) && (formData.dateOfBirth !== '' || formData.isBirthUnknown) && (formData.dateOfDeath !== '' || formData.isDeathUnknown || formData.isAlive) && formData.city !== '' && formData.rank !== '' && formData.history !== '' && formData.contacts.telegram !== '' && formData.contacts.email !== '' && formData.contacts.name !== '' && formData.contacts.surname !== '')) {
      // const storage = getStorage();
      // const idMain = guidGenerator();
      // const storageRef = ref(storage, `mainPhotos/${idMain}.jpg`);
      // let mainLink = '';
      // const refs: string[] = [];
      // const docRef = collection(db, "unreadedPersons");
      // if (formData.mainPhoto) {
      //   await uploadBytes(storageRef, formData.mainPhoto).then(async (snapshot) => {
      //     await getDownloadURL(snapshot.ref).then((downloadURL) => {
      //       mainLink = downloadURL;
      //     });
      //   });
      // }
      //  for (const e of formData.photos) {
      //   const id = guidGenerator();
      //   const storageRef = ref(storage, `photos/${id}.jpg`);
      //   await uploadBytes(storageRef, e).then(async q => {
      //     await getDownloadURL(q.ref).then((downloadURL) => {
      //       refs.push(downloadURL)
      //     })
      //   });
      // }
      const formDataMain = new FormData()
      if (formData.mainPhoto) {
        formDataMain.append('main_photo', formData.mainPhoto);
        formDataMain.append('photo', formData.photos[0]);
        formDataMain.append('medals', 'qwe');

      }
      // {
      //   medals: ['Медаль «За оборону Киева»', 'Медаль «За оборону Москвы»', "Медаль «За оборону Одессы»"],
      //   main_photo: formDataMain,
      //   photo: formData.photos
      // }
      console.log (formDataMain)
      axios.post(`https://for-9-may.onrender.com/api/v1/unreadedPersons?snl=${formData?.name}&date_birth=${formData.dateOfBirth === 'unknown' ? 1 : (typeof formData?.dateOfBirth === 'number' ? formData?.dateOfBirth : 1)}&date_death=${formData?.dateOfBirth === 'unknown' ? 1 : (typeof formData?.dateOfBirth === 'number' ? formData?.dateOfBirth : 1)}&city=${formData?.city}&history=${formData?.history}&date_pulished=${formData?.published}&rank=${formData?.rank}&role=${true}&contact_email=${'test@test.test'}&contact_SNL=${'test test test'}&contact_telegram=${"@contact"}`, formDataMain).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
    // await setDoc(doc(docRef), {
    //   name: `${formData.surName} ${formData.name} ${formData.lastName}`.trim(),
    //   city: formData.city,
    //   dateOfBirth: (formData.isBirthUnknown ? '???' : formData.dateOfBirth),
    //   dateOfDeath: (formData.isDeathUnknown ? '???' : (formData.isAlive ? 'н. в.' : Number(formData.dateOfDeath))),
    //   history: formData.history,
    //   mainPhoto: mainLink,
    //   photos: refs,
    //   published: new Date().getTime() / 1000,
    //   rank: formData.rank,
    //   medals: formData.medals.map(e => e.text),
    //   contacts: formData.contacts,
    //   messageMedals: formData.messageMedals,
    //   isHero: false
    // }).then(() => {
    //   navigate('/thankYou');
    // });
    // console.log({
    //   name: `${formData.surName} ${formData.name} ${formData.lastName}`.trim(),
    //   city: formData.city,
    //   dateOfBirth: (formData.isBirthUnknown ? '???' : formData.dateOfBirth),
    //   dateOfDeath: (formData.isDeathUnknown ? '???' : (formData.isAlive ? 'н. в.' : Number(formData.dateOfDeath))),
    //   history: formData.history,
    //   mainPhoto: mainLink,
    //   photos: refs,
    //   published: new Date().getTime() / 1000,
    //   rank: formData.rank,
    //   medals: formData.medals.map(e => e.text),
    //   contacts: formData.contacts,
    //   message: formData.messageMedals,
    // })
    // setIsSendDisabled(false);
  }

  return (
    <div className="form">
      <Container>
        <Text As='h2' className='form__title' size={80} weight={500} font='Lora'>Расскажи историю своего предка</Text>
        <FormNav mainInfoError={mainInfoError} historyError={historyError} contactsError={contactsError} setActive={setActiveFormBlock} active={activeFormBlock} />
        {activeFormBlock === 0 && <FormMainInfo error={mainInfoError} setError={setMainInfoError} formData={formData} setFormData={setFormData} setActiveFormBlock={() => { setActiveFormBlock(activeFormBlock + 1) }} />}
        {activeFormBlock === 1 && <FormMedals formData={formData} setFormData={setFormData} setActiveFormBlock={() => setActiveFormBlock(activeFormBlock + 1)} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
        {activeFormBlock === 2 && <FormHistory error={historyError} setError={setHistoryError} formData={formData} setFormData={setFormData} setActiveFormBlock={() => setActiveFormBlock(activeFormBlock + 1)} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
        {activeFormBlock === 3 && <FormPhotos formData={formData} setFormData={setFormData} setActiveFormBlock={() => setActiveFormBlock(activeFormBlock + 1)} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
        {activeFormBlock === 4 && <FormFeedback isSendDisabled={isSendDisabled} error={contactsError} setError={setContactsError} handleSend={handleSend} formData={formData} setFormData={setFormData} setMinusFormBlock={() => setActiveFormBlock(activeFormBlock - 1)} />}
      </Container>
    </div>
  );
}
