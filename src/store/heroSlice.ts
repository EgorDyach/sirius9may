import { createSlice } from "@reduxjs/toolkit";
import { PersonType } from "./personsSlice";

export interface THeroPersons {
    persons: PersonType[];
}

// Определение начального состояния, используя тип
const initialState: THeroPersons = {
    persons: [],
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