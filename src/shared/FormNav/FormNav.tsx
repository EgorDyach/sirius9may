import './formnav.css';

export function FormNav({active, setActive}: {active: number; setActive: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <ul className="form__nav">
      <span className='form__line'>
        <span style={{transform: `translateX(${active*100}%)`}} className="form__line-active"></span>
      </span>
      <li onClick={() => setActive(0)} className={active === 0 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li onClick={() => setActive(1)} className={active === 1 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li onClick={() => setActive(2)} className={active === 2 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li onClick={() => setActive(3)} className={active === 3 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li onClick={() => setActive(4)} className={active === 4 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
    </ul>
  );
}
