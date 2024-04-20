import { useState } from 'react';
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
  medals: IOption[];
  messageMedals: string;
  photos: File[];
  published: number;
  rank: string;
  id: string;
  contacts: UnreadedContactsType
}

export function FormPage() {
  const [activeFormBlock, setActiveFormBlock] = useState(4)
  const [formData, setFormData] = useState<FormPersonType>(
    {
      name: '',
      surName: '',
      lastName: '',
      city: "",
      dateOfBirth: '',
      dateOfDeath: '',
      isAlive: false,
      isBirthUnknown: false,
      isDeathUnknown: false,
      history: '',
      mainPhoto: null,
      messageMedals: '',
      medals: [],
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
      id: ''
    }
  )

    const handleSend = () => {

    }

  return (
    <div className="form">
      <Container>
        <Text As='h2' className='form__title' size={80} weight={500} font='Lora'>Расскажи историю своего предка</Text>
        <FormNav setActive={setActiveFormBlock} active={activeFormBlock} />
        {activeFormBlock === 0 && <FormMainInfo formData={formData} setFormData={setFormData} setActiveFormBlock={() => {setActiveFormBlock(activeFormBlock+1)}} />}
        {activeFormBlock === 1 && <FormMedals formData={formData} setFormData={setFormData}  setActiveFormBlock={() => setActiveFormBlock(activeFormBlock+1)}  setMinusFormBlock={() => setActiveFormBlock(activeFormBlock-1)} />}
        {activeFormBlock === 2 && <FormHistory formData={formData} setFormData={setFormData}  setActiveFormBlock={() => setActiveFormBlock(activeFormBlock+1)}  setMinusFormBlock={() => setActiveFormBlock(activeFormBlock-1)} />}
        {activeFormBlock === 3 && <FormPhotos formData={formData} setFormData={setFormData}  setActiveFormBlock={() => setActiveFormBlock(activeFormBlock+1)}  setMinusFormBlock={() => setActiveFormBlock(activeFormBlock-1)} />}
        {activeFormBlock === 4 && <FormFeedback handleSend={handleSend} formData={formData} setFormData={setFormData}   setMinusFormBlock={() => setActiveFormBlock(activeFormBlock-1)} />}
      </Container>
    </div>
  );
}
