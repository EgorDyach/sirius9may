import './formmaininfo.css';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { FormPersonType } from '../../pages/FormPage';

export function FormMainInfo({ formData, setFormData }: { formData: FormPersonType, setFormData: React.Dispatch<React.SetStateAction<FormPersonType>> }) {
  return (
    <div className="formMainInfo">
      <Text As='h3' className='formMainInfo__title' size={64} font='Lora' weight={500} >Основная информация</Text>
      <div className="formMainInfo__top">
        <label className="formMainInfo__img">
          {!formData.mainPhoto ?
            <svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="105" cy="105" r="105" fill="#343434" />
              <path d="M123.587 110.776C128.515 106.761 132.111 101.255 133.877 95.0247C135.642 88.7942 135.489 82.1488 133.437 76.013C131.386 69.8772 127.539 64.5561 122.432 60.79C117.324 57.0238 111.21 55 104.941 55C98.671 55 92.5571 57.0238 87.4498 60.79C82.3424 64.5561 78.4955 69.8772 76.4442 76.013C74.3929 82.1488 74.2393 88.7942 76.0046 95.0247C77.77 101.255 81.3667 106.761 86.2941 110.776C77.8508 114.279 70.4837 120.09 64.9782 127.588C59.4727 135.086 56.0352 143.991 55.0322 153.354C54.9596 154.037 55.0324 154.997 55.0324 154.997H56.0022C57.0024 154.997 58.5028 154.997 59.5031 154.997C60.5034 154.997 62.5039 154.997 63.5042 154.997H65.0046L65.0843 154.499C66.1879 144.324 70.8727 134.927 78.2435 128.103C85.6144 121.279 95.1545 117.506 105.041 117.506C114.928 117.506 124.468 121.279 131.839 128.103C139.21 134.927 143.895 144.324 144.998 154.499V154.997H147.027C148.027 154.997 148.785 155.004 150.027 154.997C151.27 154.989 153.028 154.997 154.028 154.997H155V153.406C153.992 144.017 150.536 135.089 145.002 127.579C139.469 120.069 132.066 114.261 123.587 110.776ZM104.941 107.08C100.965 107.08 97.0776 105.859 93.7715 103.571C90.4654 101.283 87.8886 98.0317 86.3669 94.2272C84.8453 90.4228 84.4472 86.2364 85.2229 82.1976C85.9986 78.1588 87.9133 74.4489 90.725 71.5371C93.5366 68.6253 97.1188 66.6423 101.019 65.839C104.918 65.0356 108.961 65.4479 112.634 67.0238C116.308 68.5996 119.448 71.2683 121.657 74.6922C123.866 78.1161 125.045 82.1416 125.045 86.2595C125.045 91.7815 122.927 97.0773 119.156 100.982C115.386 104.887 110.273 107.08 104.941 107.08Z" fill="white" />
            </svg>
            :
            <img className='formMainInfo__img-picture' src={URL.createObjectURL(formData.mainPhoto)} alt="Основное фото" />
          }
          <input type="file" onChange={(q) => setFormData(q.target.files ? { ...formData, mainPhoto: q.target.files[0] } : { ...formData, mainPhoto: null })} name="mainPhotoFile" id="mainPhotoFile" />
        </label>
        <div className="formMainInfo__top-info">
          <Input className='formMainInfo__input' value={formData.name} onChange={(q) => setFormData({ ...formData, name: q })} placeholder='Семен' label={'Имя'} />
          <Input className='formMainInfo__input' value={formData.surName} onChange={(q) => setFormData({ ...formData, surName: q })} placeholder='Семенов' label={'Фамилия'} />
          <Input className='formMainInfo__input' value={formData.lastName} onChange={(q) => setFormData({ ...formData, lastName: q })} placeholder='Семенович' label={'Отчество'} />
        </div>
      </div>
      <div className="formMainInfo__bottom">
        <div className="formMainInfo__bottom-date">
          <Input 
          className='formMainInfo__input' 
          disabled={formData.isBirthUnknown} 
          value={String(formData.isBirthUnknown ? '???' : formData.dateOfBirth)} 
          onChange={(q) => {
            setFormData({ ...formData, dateOfBirth: q })
            }} 
          type='number' 
          placeholder='0000' 
          label={'Год рождения'} 
          />
          <label className="formMainInfo__checkbox-con">
            <input 
            onChange={() => setFormData({ ...formData, isBirthUnknown: !formData.isBirthUnknown })
            }
            checked={formData.isBirthUnknown} 
            type="checkbox" 
            name="" id="" />
            <Text weight={700} size={16}> Неизвестно</Text>
          </label>
        </div>
        <div className="formMainInfo__bottom-date">
          <Input type="number" className='formMainInfo__input' disabled={formData.isAlive || formData.isDeathUnknown} value={String(formData.isAlive || formData.isDeathUnknown ? "" : formData.dateOfDeath)} onChange={(q) => setFormData({ ...formData, dateOfDeath: String(q) })} placeholder='0000' label={'Дата смерти'} />
          <label className="formMainInfo__checkbox-con">
            <input 
            onChange={() => { 
              setFormData({...formData, isAlive: !formData.isAlive});}} disabled={formData.isDeathUnknown} checked={formData.isAlive} type="checkbox" name="" id="" />
            <Text weight={700} size={16}> Неизвестно</Text>
          </label>
          <label className="formMainInfo__checkbox-con">
            <input onChange={() => { 
              setFormData({...formData, isDeathUnknown: !formData.isDeathUnknown});}} disabled={formData.isAlive} checked={formData.isDeathUnknown}  type="checkbox" name="" id="" />
            <Text weight={700} size={16}> Жив</Text>
          </label>
        </div>
        <Input className='formMainInfo__input' value={formData.city} onChange={(q) => setFormData({ ...formData, city: q })} placeholder='г. Ульяновск' label={'Город рождения'} />
        <Input className='formMainInfo__input' value={formData.rank} onChange={(q) => setFormData({ ...formData, rank: q })} placeholder='Майор' label={'Звание'} />
      </div>
      <button onClick={() => console.log(formData)} className="formMainInfo__submit"><Text color='#fff' font='Lora' size={24}>Сохранить</Text></button>
    </div>
  );
}
