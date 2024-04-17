import { useState } from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import './formpage.css';
import { FormNav } from '../../shared/FormNav';
import { FormMainInfo } from '../../shared/FormMainInfo';
import { UnreadedContactsType } from '../../store/unreadedPersonsSlice';
import { EMedals } from '../../store/personsSlice';

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
  medals: EMedals[];
  photos: File[];
  published: number;
  rank: string;
  id: string;
  contacts: UnreadedContactsType
}

export function FormPage() {
  const [activeFormBlock] = useState(0)
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
  return (
    <div className="form">
      <Container>
        <Text As='h2' className='form__title' size={80} weight={500} font='Lora'>Расскажи историю своего предка</Text>
        <FormNav active={activeFormBlock} />
        {activeFormBlock === 0 && <FormMainInfo formData={formData} setFormData={setFormData} />}
      </Container>
    </div>
  );
}
