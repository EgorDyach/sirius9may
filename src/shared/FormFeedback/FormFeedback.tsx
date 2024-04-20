import React from 'react';
import './formfeedback.css';
import { Input } from '../../components/Input';
import { FormPersonType } from '../../pages/FormPage';
import { Text } from '../../components/Text';

export function FormFeedback({ setMinusFormBlock, formData, setFormData, handleSend }: { setMinusFormBlock: () => void; formData: FormPersonType, setFormData: React.Dispatch<React.SetStateAction<FormPersonType>>;handleSend: () => void; }) {
  return (
    <div className="FormFeedback">
      <Text As='h3' className='FormFeedback__title' size={64} font='Lora' weight={500} >Обратная связь</Text>
      <Text As='p' className='' size={40} weight={400}  >Оставьте свои контактные данные, чтобы мы могли связаться с вами, когда вашу историю проверят.</Text>
      <div className="FormFeedback__contacts">
        <Input className='FormFeedback__input' value={formData.contacts.telegram} onChange={(q) => setFormData({ ...formData, contacts: {...formData.contacts, telegram: q} })} placeholder='@dmitriy_dmitriev' label={'Ваш ник в Telegram'} />
        <Input className='FormFeedback__input' value={formData.contacts.email} onChange={(q) => setFormData({ ...formData, contacts: {...formData.contacts, email: q}  })} placeholder='dmitriy_dmitriev@mail.ru' label={'Ваш Email'} />
      </div>
      <div className="FormFeedback__top">
        <Input className='FormFeedback__input' value={formData.contacts.name} onChange={(q) => setFormData({ ...formData, contacts: {...formData.contacts, name: q}  })} placeholder='Дмитрий' label={'Ваше имя'} />
        <Input className='FormFeedback__input' value={formData.contacts.surname} onChange={(q) => setFormData({ ...formData, contacts: {...formData.contacts, surname: q}  })} placeholder='Дмитриев' label={'Ваша фамилия'} />
        <Input className='FormFeedback__input' value={formData.contacts.lastName || ''} onChange={(q) => setFormData({ ...formData, contacts: {...formData.contacts, lastName: q}  })} placeholder='Дмитриевич' label={'Ваше отчество (при наличии)'} />
      </div>
      <div className="FormFeedback__buttons">
        <button onClick={setMinusFormBlock} className="formMainInfo__cancel"><Text color='#343434' font='Lora' size={24}>Назад</Text></button>
        <button onClick={handleSend} className="formMainInfo__submit"><Text color='#fff' font='Lora' size={24}>Отправить</Text></button>
      </div>
    </div>

  );
}
