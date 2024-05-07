import './gallaryphoto.css';
import { Text } from '../../components/Text';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { openModal } from '../../store/modalSlice';

export interface IGallaryItem {
  type: "gallaryPhoto";
  src: string;
  date: string;
  text?: string;
}

export function GallaryPhoto({e, showedPhotos}: {e: IGallaryItem; showedPhotos: IGallaryItem[]}) {
  const dispatch = useAppDispatch();
  return (
    <div tabIndex={1} onClick={() => {
      dispatch(openModal({images: showedPhotos, title: e.text || e.date, activeIndex: showedPhotos.indexOf(e)}))
    }} className={`gallaryPhoto ${e.text ? 'gallaryPhoto-withText' : "gallaryPhoto-onlyDate"}`}>
      <img className='gallaryPhoto__img' src={e.src} alt={e.text || "Фотография из галереи"} />
      <span className='gallaryPhoto__date'>
          <Text font='Lora' size={16} color='#fff'>{e.date}</Text>
      </span>
      <span className='gallaryPhoto__info'>
          <Text font='Lora' size={16} color='#fff'>{e.date}</Text>
          <Text size={20} color='#fff'>{e.text}</Text>
      </span>
    </div>
  );
}
