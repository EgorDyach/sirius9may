import { createSlice } from "@reduxjs/toolkit";
import { PersonType } from "./personsSlice";

export interface THeroPersons {
    persons: PersonType[];
    isLoading: boolean;
}

// Определение начального состояния, используя тип
const initialState: THeroPersons = {
    persons: [
    ],
    isLoading: true
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
        },
        changeHeroLoading: (state, action) => {
            state.isLoading = action.payload 
        }
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { addHeroPerson, removeHeroPersons, changeHeroLoading } = heroPersonsSlice.actions

export default heroPersonsSlice.reducer