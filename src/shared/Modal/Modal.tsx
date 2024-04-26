import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import './modal.css';
import { closeModal } from '../../store/modalSlice';
import { Text } from '../../components/Text';

export function Modal() {
  const isOpen = useAppSelector(state => state.modalSlice.isOpen);
  const img = useAppSelector(state => state.modalSlice.img);
  const text = useAppSelector(state => state.modalSlice.title);
  useLayoutEffect(() => {
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  }, [isOpen])
  const dispatch = useAppDispatch();
  return (
    <div className="modal" style={{opacity: (isOpen ? 1: 0), visibility: (isOpen ? "visible" : 'hidden')}}>
      <div className="modal__content">
        <button onClick={() => dispatch(closeModal())} className="modal__cancel">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-2.5" y="2.5" width="85" height="85" transform="matrix(-1 0 0 1 85 0)" stroke="#343434" stroke-width="5" />
            <path d="M49.4031 44.9973L69.0763 25.3532C69.6643 24.7651 69.9947 23.9675 69.9947 23.1358C69.9947 22.3042 69.6643 21.5066 69.0763 20.9185C68.4883 20.3304 67.6907 20 66.8592 20C66.0276 20 65.23 20.3304 64.642 20.9185L45 40.5938L25.358 20.9185C24.77 20.3304 23.9724 20 23.1408 20C22.3093 20 21.5117 20.3304 20.9237 20.9185C20.3357 21.5066 20.0053 22.3042 20.0053 23.1358C20.0053 23.9675 20.3357 24.7651 20.9237 25.3532L40.5969 44.9973L20.9237 64.6414C20.631 64.9318 20.3987 65.2772 20.2402 65.6578C20.0816 66.0383 20 66.4465 20 66.8588C20 67.2711 20.0816 67.6793 20.2402 68.0599C20.3987 68.4405 20.631 68.7859 20.9237 69.0762C21.214 69.3689 21.5594 69.6013 21.9399 69.7598C22.3204 69.9184 22.7286 70 23.1408 70C23.5531 70 23.9612 69.9184 24.3418 69.7598C24.7223 69.6013 25.0677 69.3689 25.358 69.0762L45 49.4009L64.642 69.0762C64.9323 69.3689 65.2777 69.6013 65.6582 69.7598C66.0388 69.9184 66.4469 70 66.8592 70C67.2714 70 67.6796 69.9184 68.0601 69.7598C68.4406 69.6013 68.786 69.3689 69.0763 69.0762C69.369 68.7859 69.6013 68.4405 69.7598 68.0599C69.9184 67.6793 70 67.2711 70 66.8588C70 66.4465 69.9184 66.0383 69.7598 65.6578C69.6013 65.2772 69.369 64.9318 69.0763 64.6414L49.4031 44.9973Z" fill="#343434" />
          </svg>
        </button>
        <img src={img} />
        <Text weight={400} size={24} color='#fff'>{text}</Text>
      </div>
    </div>
  );
}
