import './formphotos.css';
import { FormPersonType } from '../../pages/FormPage';
import { Text } from '../../components/Text';
import { FormEvent, useLayoutEffect, useRef, useState } from 'react';

const PHOTO_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg', 'image/jpeg', 'image/tiff', 'image/raw', 'image/gif']

export function FormPhotos({ setActiveFormBlock, formData, setFormData, setMinusFormBlock }: { setActiveFormBlock: () => void; formData: FormPersonType, setFormData: React.Dispatch<React.SetStateAction<FormPersonType>>; setMinusFormBlock: () => void; }) {
  const [error, setError] = useState('');
  const dropZoneEl = useRef<HTMLDivElement>(null);
  const hoverClassName = 'formPhotos__input-hover';
  useLayoutEffect(() => {
    const dropZone = document.body;
    if (dropZone) {
      console.log(dropZone)
      dropZone.addEventListener("dragenter", function (e) {
        e.preventDefault();
        dropZone.classList.add(hoverClassName);
      });

      dropZone.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropZone.classList.add(hoverClassName);
      });

      dropZone.addEventListener("dragleave", function (e) {
        e.preventDefault();
        dropZone.classList.remove(hoverClassName);
      });

      dropZone.addEventListener("drop", function (e) {
        e.preventDefault();
        dropZone.classList.remove(hoverClassName);
        if (e.dataTransfer) {
          const files = Array.from(e.dataTransfer.files);
          console.log(files);
          const newPhotos = [...formData.photos];
          files.forEach(e => {
            if (PHOTO_TYPES.includes(e.type)) {
              newPhotos.push(e);
            } else {
              setError('Неподдерживаемый формат фото!')
            }
          })
          setFormData({ ...formData, photos: newPhotos });
        }
      });
    }
    return () => {
      if (dropZone) {
        dropZone.addEventListener("drop", function (e) {
          e.preventDefault();
          dropZone.classList.remove(hoverClassName);
          if (e.dataTransfer) {
            const files = Array.from(e.dataTransfer.files);
            const newPhotos = [...formData.photos];
            let countErrors = 0;
            files.forEach(e => {
              if (PHOTO_TYPES.includes(e.type)) {
                newPhotos.push(e);
              } else {
                countErrors += 1;
                setError('Неподдерживаемый формат фото!')
              }
            })
            if (countErrors === 0) {
              setError('')
            }
            setFormData({ ...formData, photos: newPhotos })
          }
        });
      }
    }
  }, [dropZoneEl, formData])

  const handleInput = (q: FormEvent<HTMLInputElement>) => {
    const event = q.currentTarget.files;
    if (event) {
      const newPhotos = [...formData.photos];
      for (let i = 0; i < event?.length; i++) {
        newPhotos.push(event[i]);
      }
      console.log(newPhotos[0].text())
      setFormData({ ...formData, photos: newPhotos })
    }
  }

  return (
    <div className="formPhotos">
      <Text As='h3' className='formMainInfo__title' size={64} font='Lora' weight={500}>Дополнительные фото</Text>
      <Text As='p' className='' size={40} weight={400} >Если у вас есть ещё фото, связанные с вашим предком, добавляйте их. Подойдут любые: семейные, домашние, с работы, фото документов и т.д.</Text>
      <div className='formPhotos__gallary'>
        {formData.photos.map(e => {
          return <div className='formPhotos__gallary-item'>
            <img src={URL.createObjectURL(e)} alt='Дополнительное фото предка' />
            <button onClick={() => {
              setFormData({ ...formData, photos: formData.photos.filter(q => q !== e) });
            }}><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" fill="white" />
                <path d="M26 6.22357L23.7764 4L15 12.7764L6.22357 4L4 6.22357L12.7764 15L4 23.7764L6.22357 26L15 17.2236L23.7764 26L26 23.7764L17.2236 15L26 6.22357Z" fill="#848484" />
              </svg>
            </button>
          </div>
        })}
      </div>
      <div className="formPhotos__content">
        <div ref={dropZoneEl} className="formPhotos__input-con">
          <div className="formPhotos__placeHolder">
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M110.5 52C108.776 52 105 52 104 52C104 53.8572 104 56.7761 104 58.5V80.47L94.38 70.85L81.64 58.5L68.835 70.85L64.285 75.465L48.165 59.28L35.36 46.5L22.62 59.28L13 68.965V32.5C13 30.7761 13 27.5 13 26C15 26 17.7761 26 19.5 26H71.5C73.2239 26 76.5 26 78 26C78 24.5 78 21.2239 78 19.5C78 17.7761 78 15.5 78 13C75.5 13 73.2239 13 71.5 13H19.5C14.3283 13 5.99999 13 0 13C2.64645e-05 18.5 1.5974e-05 27.3283 1.5974e-05 32.5V111.93C0.0171438 116.717 2.1455e-05 125.5 5.48363e-06 130C5 130 13.2828 129.983 18.07 130H98.93C100.691 129.986 102.83 130 104.5 130C108.5 130 113.5 130 117.13 130C117.13 126 117.147 115.893 117.13 111.995V58.5C117.13 57.6354 117.13 53 117.13 52C116.5 52 116 52 115.5 52C114.5 52 114 52 113 52C112.5 52 111.364 51.9827 110.5 52ZM19.5 117C17.7761 117 15 117 13 117C13 115 13 112.224 13 110.5V87.295L31.785 68.51L35.36 65L38.935 68.51L87.49 117H19.5ZM104 110.5C103.958 111.759 103.552 112.978 102.83 114.01L73.45 84.5L78.065 79.95L80 78L82 76L83.5 78L85.215 79.95L104 98.865V110.5ZM123.5 13H117V6.5C117 4.77609 117 0 117 0C115 0.000126839 112.224 0 110.5 0C108.776 0 106 0 104 0.000126839C104 2.5 104 4.77609 104 6.5V13H97.5C95.7761 13 92 13 91 13C91 14.9038 91 17.7761 91 19.5C91 21.2239 91 24.0962 91 26C93.5 26 95.7761 26 97.5 26H104V32.5C104 34.2239 104 38 104 39C106.5 39 108.776 39 110.5 39C112.224 39 115 39 117 39C117 37.0962 117 34.2239 117 32.5V26H123.5C125.224 26 128 26 130 26C130 23.5 130 21.2239 130 19.5C130 17.7761 130 15 130 13C128.5 13 125.224 13 123.5 13Z" fill="#B3B3B3" />
            </svg>
            <Text size={32} weight={400} className='formPhotos__placeHolder-text' color='#B3B3B3'><span>Добавьте</span> или <span>перетащите</span> фото сюда.</Text>
          </div>
          <input
            onInput={handleInput}
            accept="image/png, image/jpeg, image/webp, image/jpg, image/jpeg, image/tiff, image/raw, image/gif"
            className='formPhotos__input'
            type="file"
            name=""
            multiple
            id="" />
        </div>
      </div>
      {error !== '' && (<Text size={32} color='red'>{error}</Text>)}
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
