import { Hero } from '../../shared/Hero';
import { Gallary } from '../../shared/Gallary';
import './mainpage.css';
import { Histories } from '../../shared/Histories';

export function MainPage() {
  return (
    <>
      <Hero />
      <Gallary />
      <Histories />
    </>
  );
}
