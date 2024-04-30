import './modalnav.css';
import { IGallaryItem } from '../GallaryPhoto';
import { IOption } from '../FormMedals';
import { useSwiper } from 'swiper/react';
import { getMedalKeyByName } from '../../assets/medals/medal';

export function ModalNav({ active }: { active: IGallaryItem | IOption | { type: "personPhoto"; src: string; text: string } }) {
  const swiper = useSwiper();
  if (!active) return;
  return (
    <div className='modalNav'>
      <button onClick={() => {
        swiper.slidePrev()
      }}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-1.5" y="1.5" width="87" height="87" transform="matrix(-1 0 0 1 87 0)" stroke="white" stroke-width="3" />
          <path d="M57.7871 62.2125L40.6121 45L57.7871 27.7875L52.4996 22.5L29.9996 45L52.4996 67.5L57.7871 62.2125Z" fill="white" />
        </svg>
      </button>
      <a href={active.type === 'gallaryPhoto' ? active.src : `/medals/${getMedalKeyByName(active.text)}.png`} download={true}><svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="85" height="85" stroke="#343434" stroke-width="5" />
        <path d="M69.5 73H20.5C19.5717 73 18.6815 73.3687 18.0251 74.0251C17.3687 74.6815 17 75.5717 17 76.5C17 77.4283 17.3687 78.3185 18.0251 78.9749C18.6815 79.6313 19.5717 80 20.5 80H69.5C70.4283 80 71.3185 79.6313 71.9749 78.9749C72.6313 78.3185 73 77.4283 73 76.5C73 75.5717 72.6313 74.6815 71.9749 74.0251C71.3185 73.3687 70.4283 73 69.5 73ZM42.515 64.985C42.8479 65.3036 43.2404 65.5534 43.67 65.72C44.089 65.9052 44.542 66.0008 45 66.0008C45.458 66.0008 45.911 65.9052 46.33 65.72C46.7596 65.5534 47.1521 65.3036 47.485 64.985L61.485 50.985C62.1441 50.3259 62.5143 49.4321 62.5143 48.5C62.5143 47.5679 62.1441 46.6741 61.485 46.015C60.8259 45.3559 59.9321 44.9857 59 44.9857C58.0679 44.9857 57.1741 45.3559 56.515 46.015L48.5 54.065V13.5C48.5 12.5717 48.1313 11.6815 47.4749 11.0251C46.8185 10.3687 45.9283 10 45 10C44.0717 10 43.1815 10.3687 42.5251 11.0251C41.8687 11.6815 41.5 12.5717 41.5 13.5V54.065L33.485 46.015C33.1587 45.6887 32.7713 45.4298 32.3449 45.2532C31.9185 45.0766 31.4615 44.9857 31 44.9857C30.5385 44.9857 30.0815 45.0766 29.6551 45.2532C29.2288 45.4298 28.8413 45.6887 28.515 46.015C28.1887 46.3413 27.9298 46.7287 27.7532 47.1551C27.5766 47.5815 27.4857 48.0385 27.4857 48.5C27.4857 48.9615 27.5766 49.4185 27.7532 49.8449C27.9298 50.2713 28.1887 50.6587 28.515 50.985L42.515 64.985Z" fill="#343434" />
      </svg>
      </a>
      <button onClick={() => {
        swiper.slideNext()
      }}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="87" height="87" stroke="white" stroke-width="3" />
          <path d="M32.2129 62.2125L49.3879 45L32.2129 27.7875L37.5004 22.5L60.0004 45L37.5004 67.5L32.2129 62.2125Z" fill="white" />
        </svg>

      </button>
    </div>
  );
}
