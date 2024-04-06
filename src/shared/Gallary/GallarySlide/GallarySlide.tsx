import './gallaryslide.css';
import { GallaryItemType } from '../../../store/contentSlice';
import { Text } from '../../../components/Text';

export function GallarySlide({ e }: { e: GallaryItemType[]; }) {
  while (e.length % 5 !== 0) {
    e.push({
      img: '',
      published: new Date()
    })
  }
  return (
    <div className='gallary__slide-content'>
      <div className='gallary__photo-big'>
      <img src={e[0].img} alt={`Фото из галереи${typeof e[0].text !== 'undefined' ? `с подписью: ${e[0].text}` : ''}`} />
      {e[0].text && <Text size={32} color='#fff' className='gallary__photo-text'>
                  {e[0].text}
              </Text>}
      </div>
      <div className='gallary__slide-photos'>
        {e.map(q => {
          if (e.indexOf(q) === 0) {
            return;
          }
          if (q.img === '') {
            return <div className='gallary__photo'></div>
          }
          return <div className={`gallary__photo ${q.text ? 'gallary__photo-withText' : ''}`}>
            <img src={q.img} alt={`Фото из галереи${typeof e[e.indexOf(q)].text !== 'undefined' ? `с подписью: ${e[e.indexOf(q)].text}` : ''}`} />
            {q.text && <Text size={32} color='#fff' className='gallary__photo-text'>
                  {q.text}
              </Text>}
          </div>
        })}
      </div>
    </div>
  );
}
