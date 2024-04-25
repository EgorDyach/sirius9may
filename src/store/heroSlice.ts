import { createSlice } from "@reduxjs/toolkit";
import { PersonType } from "./personsSlice";

export interface THeroPersons {
    persons: PersonType[];
}

// Определение начального состояния, используя тип
const initialState: THeroPersons = {
    persons: [
        // {
        //     name: 'Федотов Николай Александрович',
        //     city: '',
        //     dateOfBirth: 0,
        //     dateOfDeath: 0,
        //     history: '',
        //     mainPhoto: '',
        //     medals: EMedals[];
        //     photos: string[];
        //     published: number;
        //     rank: string;
        //     isHero: boolean;
        //     id: string;
        // },
        // {
        //     name: string;
        //     city: string;
        //     dateOfBirth: number | "unknown" | "alive";
        //     dateOfDeath: number | "unknown" | "alive";
        //     history: string;
        //     mainPhoto: string;
        //     medals: EMedals[];
        //     photos: string[];
        //     published: number;
        //     rank: string;
        //     isHero: boolean;
        //     id: string;
        // },
        // {
        //     name: string;
        //     city: string;
        //     dateOfBirth: number | "unknown" | "alive";
        //     dateOfDeath: number | "unknown" | "alive";
        //     history: string;
        //     mainPhoto: string;
        //     medals: EMedals[];
        //     photos: string[];
        //     published: number;
        //     rank: string;
        //     isHero: boolean;
        //     id: string;
        // }
    ],
}

export const heroPersonsSlice = createSlice({
    name: 'heroPersons',
    initialState,
    reducers: {
        addHeroPerson: (state, action) => {
            state.persons.push(action.payload)
        },
        removeHeroPersons: (state) => {
            state.persons = []
        }
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { addHeroPerson, removeHeroPersons } = heroPersonsSlice.actions

export default heroPersonsSlice.reducer