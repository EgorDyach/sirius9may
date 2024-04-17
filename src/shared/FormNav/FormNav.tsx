import './formnav.css';

export function FormNav({active}: {active: number;}) {
  return (
    <ul className="form__nav">
      <span className='form__line'>
        <span style={{transform: `translateX(${active*100}%)`}} className="form__line-active"></span>
      </span>
      <li className={active === 0 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li className={active === 1 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li className={active === 2 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li className={active === 3 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
      <li className={active === 4 ? "form__nav-item form__nav-active" : "form__nav-item"}>
        <span className='form__dot'></span>
      </li>
    </ul>
  );
}
