import { useLayoutEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import axios from "axios";
import { addHeroPerson, changeHeroLoading, removeHeroPersons } from "../../store/heroSlice";
import { addNewPerson, removeNewPersons } from "../../store/newPersons";
import { addPerson, removePersons, setIsPersonsLoading } from "../../store/personsSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asy = async (dispatch: any) => {
  dispatch(changeHeroLoading(true));
  dispatch(setIsPersonsLoading(true));
  axios.get('http://62.76.228.78:8991/api/v1/persons').then((res) => {
    dispatch(removeHeroPersons());
    dispatch(removeNewPersons());
    dispatch(removePersons());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.data.details.forEach((e: any) => {
      const req = {
        name: e.SNL,
        id: e.id,
        mainPhoto: e.main_photo,
        dateOfBirth: (e.date_birth === 1 ? '???' : e.date_birth),
        dateOfDeath: (e.date_death === 1 ? '???' : (e.date_death === 0 ? 'н. в.' : e.date_death)),
        history: e.history,
        city: e.city,
        rank: e.rank,
        published: e.date_pulished,
        medals: [],
        photos: []
      }
      if (e.role) {
        dispatch(addHeroPerson(req));
      }
      if (e.date_pulished > new Date().getTime() / 1000 - 259_000) {
        dispatch(addNewPerson(req));
      }
      dispatch(addPerson(req));
    })
    dispatch(changeHeroLoading(false));
    dispatch(setIsPersonsLoading(false));
  })
}


export function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useLayoutEffect(() => {
    asy(dispatch);
    const inter = setInterval(async () => asy(dispatch), 600000)
    return () => clearInterval(inter);
  }, [])
  return (
    <>
      {children}
    </>
  );
}

