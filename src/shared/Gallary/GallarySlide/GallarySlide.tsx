import './gallaryslide.css';
import { GallaryItemType } from '../../../store/gallarySlice';
import { Text } from '../../../components/Text';

export function GallarySlide({ e }: { e: GallaryItemType[]; }) {
  while (e.length % 5 !== 0) {
    e.push({
      img: '',
      date: 0,
      isHero: true
    })
  }
  return (
    <div className='gallary__slide-content'>
      <div className={`gallary__photo-big ${e[0].title ? 'gallary__photo-withText' : ''}`}>
      <img src={e[0].img} alt={`Фото из галереи ${typeof e[0].title !== 'undefined' ? `с подписью: ${e[0].title}` : ''}`} />
      {e[0].title && <Text size={32} color='#fff' className='gallary__photo-title'>
                  {e[0].title}
              </Text>}
      </div>
      <div className='gallary__slide-photos'>
        {e.map(q => {
          if (e.indexOf(q) === 0) {
            return;
          }
          if (q.img === '') {
            return;
          }
          return <div key={e.indexOf(q)} className={`gallary__photo ${q.title ? 'gallary__photo-withText' : ''}`}>
            <img src={q.img} alt={`Фото из галереи${typeof e[e.indexOf(q)].title !== 'undefined' ? `с подписью: ${e[e.indexOf(q)].title}` : ''}`} />
            {q.title && <Text size={32} color='#fff' className='gallary__photo-title'>
                  {q.title}
              </Text>}
          </div>
        })}
      </div>
    </div>
  );
}
