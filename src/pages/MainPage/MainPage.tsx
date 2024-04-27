import { Hero } from '../../shared/Hero';
import { Gallary } from '../../shared/Gallary';
import './mainpage.css';
import { Histories } from '../../shared/Histories';
import { useAppSelector } from '../../hooks/reduxHooks';
import { MainPreloader } from '../../shared/MainPreloader';
import { Steps } from '../../shared/Steps';
import { useLayoutEffect } from 'react';

export function MainPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const isPersonsLoading = useAppSelector(state => state.heroPersons.isLoading);
  return (
    <>
      {(isPersonsLoading) && <MainPreloader />}
      {!isPersonsLoading &&
        <>
          <Hero />
          <Gallary />
          <Histories />
          <Steps />
        </>
      }
    </>
  );
}
