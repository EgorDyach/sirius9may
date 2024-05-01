import './formhistory.css';
import { FormPersonType } from '../../pages/FormPage';
import { Text } from '../../components/Text';
import { useEffect } from 'react';

export function FormHistory({setError, error, setActiveFormBlock, formData, setFormData, setMinusFormBlock }: {setError: React.Dispatch<React.SetStateAction<boolean>>,  error: boolean; setActiveFormBlock: () => void; formData: FormPersonType, setFormData: React.Dispatch<React.SetStateAction<FormPersonType>>; setMinusFormBlock: () => void; }) {
    useEffect(() => {
      if (formData.history !== '') {
        setError(false)
      }
    }, [formData.history, setError])
  return (
    <div className='formHistory'>
      <Text As='h3' className='formMainInfo__title' size={64} font='Lora' weight={500}>История</Text>
      <label className='formHistory__label'>
        <Text size={20} weight={400} >*Расскажите историю своего предка</Text>
        <textarea className={error && formData.history === '' ? 'formHistory__error': ''} placeholder='Написать...' value={formData.history} onChange={(q) => {setFormData({ ...formData, history: q.target.value }) }}></textarea>
      </label>
      <div className="formMedals__buttons">
        <button onClick={() => {
          setMinusFormBlock();
        }} className="formMainInfo__cancel"><Text color='#343434' font='Lora' size={24}>Назад</Text></button>
        <button onClick={() => {
          setActiveFormBlock();
        }} className="formMainInfo__submit"><Text color='#fff' font='Lora' size={24}>Сохранить</Text></button>
      </div>
    </div>
  );
}
