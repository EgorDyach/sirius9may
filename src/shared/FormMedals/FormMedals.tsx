import React, { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import './formmedals.css';
import { FormPersonType } from '../../pages/FormPage';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { EMedals } from '../../store/personsSlice';
import { Text } from '../../components/Text';
import { MedalComponent } from '../../assets/medals/medal';

export interface IOption { value: string; text: string; label: ReactNode }

export function FormMedals({ setActiveFormBlock, formData, setFormData, setMinusFormBlock }: { setActiveFormBlock: () => void; formData: FormPersonType, setFormData: React.Dispatch<React.SetStateAction<FormPersonType>>; setMinusFormBlock: () => void; }) {
  const [options, setOptions] = useState<IOption[]>([]);
  const animatedComponents = makeAnimated();
  const [checkedOptions, setCheckedOptions] = useState<IOption[]>(formData.medals);
  useEffect(() => {
    const v = [];
    for (const [key, value] of Object.entries(EMedals)) {
      v.push({ value: key, text: value, label: <div className='formMedals__option'>
        <MedalComponent size={window.innerWidth > 700 ? 50 : 25} type={value} />
        {value}
      </div> })
    }
    setOptions(v);
  }, [])

  useLayoutEffect(() => {
      setFormData({...formData, medals: checkedOptions})
  }, [checkedOptions])

  return (
    <div className="formMedals">
      <Text As='h3' className='formMainInfo__title' size={64} font='Lora' weight={500}>Награды</Text>
      <Select
        className='formMedals__select'
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "#B3B3B3",
            borderRadius: 0,
            borderWidth: 5,
            background: 'transparent',
            padding: "34px 50px",
            marginBotttom: (window.innerWidth > 700 ? 50 : 25),
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
            fontSize: (window.innerWidth > 700 ? 28 : 12),
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
            const v = {value: x.value, text: x.text, label: x.text}
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
          <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.875 58.9997H71.9999V8.99998C71.9999 6.8451 71.9999 2.00076 71.9999 0.000366923C70.3749 0.000193116 67.1549 5.76508e-05 65 5.76508e-05C62.8451 5.76508e-05 61.625 -0.000197854 59 0.000366923C59 2.50037 58.9999 5.97017 58.9999 8.12506V58.9997H8.12502C5.97013 58.9997 2.49997 58.9997 2.10246e-05 58.9997C-2.62808e-05 62.1243 2.10246e-05 62.8452 2.10246e-05 65C2.10246e-05 67.1549 5.1125e-05 68.3746 2.10246e-05 71.5C3.00002 71.5 5.97013 71.5 8.12502 71.5H58.9999V121.875C58.9999 124.03 58.9999 127.5 58.9999 130C63.1249 130 62.8451 130 65 130C67.1549 130 69.8749 130 71.9999 130C71.9999 127.5 71.9999 124.03 71.9999 121.875V71.5H121.875C124.03 71.5 127 71.4999 130 71.4999C130 69.3745 130 67.1549 130 65C130 62.8452 130 63.1245 130 58.9997C125.5 58.9999 124.03 58.9997 121.875 58.9997Z" fill="#B3B3B3" />
          </svg>
          <Text size={48} weight={400} color="B3B3B3" >
            Добавить награду
          </Text>
        </div>}
      />
      <label className='formMedals__label'>
        <Text size={20} weight={400} >Если вы не нашли подходящей награды, напишите нам об этом, и мы её обязательно добавим.</Text>
        <textarea placeholder='Написать...' value={formData.messageMedals} onChange={(q) => {setFormData({...formData, messageMedals: q.target.value})}}></textarea>
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
