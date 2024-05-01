import React, { useLayoutEffect } from 'react';
import './formfeedback.css';
import { Input } from '../../components/Input';
import { FormPersonType } from '../../pages/FormPage';
import { Text } from '../../components/Text';

export function FormFeedback({ error, isSendDisabled, setError, setMinusFormBlock, formData, setFormData, handleSend }: { setMinusFormBlock: () => void; setError: React.Dispatch<React.SetStateAction<boolean>>, error: boolean; formData: FormPersonType, isSendDisabled: boolean, setFormData: React.Dispatch<React.SetStateAction<FormPersonType>>; handleSend: () => void; }) {
  useLayoutEffect(() => {
    if (formData.contacts.email && formData.contacts.telegram && formData.contacts.surname && formData.contacts.name) {
      setError(false)
    }
  }, [formData.contacts.email, formData.contacts.name, formData.contacts.surname, formData.contacts.telegram, setError])
  return (
    <div className="FormFeedback">
      <Text As='h3' className='FormFeedback__title' size={64} font='Lora' weight={500} >Обратная связь</Text>
      <Text As='p' className='' size={40} weight={400}  >Оставьте свои контактные данные, чтобы мы могли связаться с вами, когда вашу историю проверят.</Text>
      <div className="FormFeedback__contacts">
        <Input error={error && !formData.contacts.telegram} className='FormFeedback__input' value={formData.contacts.telegram} onChange={(q) => setFormData({ ...formData, contacts: { ...formData.contacts, telegram: q } })} placeholder='@dmitriy_dmitriev' label={'Ваш ник в Telegram'} />
        <Input error={error && !formData.contacts.email} className='FormFeedback__input' value={formData.contacts.email} onChange={(q) => setFormData({ ...formData, contacts: { ...formData.contacts, email: q } })} placeholder='dmitriy_dmitriev@mail.ru' label={'*Ваш Email'} />
      </div>
      <div className="FormFeedback__top">
        <Input error={error && !formData.contacts.name} className='FormFeedback__input' value={formData.contacts.name} onChange={(q) => setFormData({ ...formData, contacts: { ...formData.contacts, name: q } })} placeholder='Дмитрий' label={'*Ваше имя'} />
        <Input error={error && !formData.contacts.surname} className='FormFeedback__input' value={formData.contacts.surname} onChange={(q) => setFormData({ ...formData, contacts: { ...formData.contacts, surname: q } })} placeholder='Дмитриев' label={'*Ваша фамилия'} />
        <Input className='FormFeedback__input' value={formData.contacts.lastName || ''} onChange={(q) => setFormData({ ...formData, contacts: { ...formData.contacts, lastName: q } })} placeholder='Дмитриевич' label={'Ваше отчество (при наличии)'} />
      </div>
      <div className="formFeedback__checkbox-con">
        <label>
          <input onChange={() => {
            setFormData({ ...formData, isAgree: !formData.isAgree });
          }} checked={formData.isAgree} type="checkbox" name="" id="" />
          <Text weight={700} color={error && !formData.isAgree ? "red" : '#333'} size={16}> *Нажимая на кнопку "Отправить", даю согласие на <a href='/soglasie.pdf' download>обработку персональных данных</a></Text>
        </label>
      </div>
      <div className="FormFeedback__buttons">
        {window.innerWidth < 700 && error && <Text size={16} color='red'>Не все обязательные поля заполнены!</Text>}
        <button onClick={setMinusFormBlock} className="formMainInfo__cancel"><Text color='#343434' font='Lora' size={24}>Назад</Text></button>
        <button disabled={isSendDisabled} onClick={handleSend} className="formMainInfo__submit"><Text color='#fff' font='Lora' size={24}>Отправить</Text></button>
      </div>
    </div>

  );
}
