import { useLayoutEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { GallaryPhoto, IGallaryItem } from '../../shared/GallaryPhoto';
import './gallarypage.css';
import { gallaryPagePhotos } from '../../../public/gallaryPhotos';
export function GallaryPage() {
  const [pagination, setPagination] = useState({
    limit: 9,
    offset: 0,
  })
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const photos = [...gallaryPagePhotos.reverse()];

  return (
    <div className='gallaryPage'>
      <Container>
        <Text As='h2' size={80} font='Lora'>Галерея</Text>
        <div className="gallaryPage__wrapper">
          {photos.reverse().slice(0, pagination.limit + pagination.offset).map((q: IGallaryItem) => {
            return <GallaryPhoto showedPhotos={photos.slice(0, pagination.limit + pagination.offset)} e={q} />
          })}
        </div>

        {pagination.offset + pagination.limit >= [...photos].length && <Text className='historiesPage__all-nomore' size={14} color='#999'>Фотографии закончились, но мы ищем всё больше новых для вас!</Text>}
        <button disabled={pagination.offset + pagination.limit >= [...photos].length} onClick={() => setPagination({ ...pagination, offset: pagination.offset + 6 })} className='historiesPage__all-more'>
          <Text size={24} font='Lora' color='#fff'>Показать ещё</Text></button>
      </Container>
    </div>
  );
}
