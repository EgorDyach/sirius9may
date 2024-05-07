import './modalnav.css';
import { useSwiper } from 'swiper/react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { openModal } from '../../store/modalSlice';
import { useLayoutEffect, useState } from 'react';

export function ModalNav() {
  const swiper = useSwiper();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modalData = useAppSelector((state: { modalSlice: any; }) => state.modalSlice);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    });
    (() => {
      setWindowWidth(window.innerWidth)
    })();
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
      });
    };
  }, [windowWidth])

  if (!modalData.activeIndex) return;
  return (
    <div className='modalNav'>
      <button
        className={modalData.activeIndex <= 0 ? `modalNav__btn-disabled` : ``}
        onClick={() => {
          swiper.slidePrev();
          if (modalData.activeIndex > 0) {
            dispatch(openModal({ ...modalData, activeIndex: modalData.activeIndex - 1 }))
          }
        }}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-1.5" y="1.5" width="87" height="87" transform="matrix(-1 0 0 1 87 0)" stroke="white" strokeWidth="3" />
          <path d="M57.7871 62.2125L40.6121 45L57.7871 27.7875L52.4996 22.5L29.9996 45L52.4996 67.5L57.7871 62.2125Z" fill="white" />
        </svg>
      </button>
      <button
        className={modalData.activeIndex >= modalData.images.length - 1 ? `modalNav__btn-disabled` : ``}
        onClick={() => {
          swiper.slideNext();
          if (modalData.activeIndex < (modalData.images.length - (windowWidth <= 1400 ? 1 : 1))) {
            dispatch(openModal({ ...modalData, activeIndex: modalData.activeIndex + 1 }));
          }
        }}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="87" height="87" stroke="white" strokeWidth="3" />
          <path d="M32.2129 62.2125L49.3879 45L32.2129 27.7875L37.5004 22.5L60.0004 45L37.5004 67.5L32.2129 62.2125Z" fill="white" />
        </svg>
      </button>
    </div >
  );
}
