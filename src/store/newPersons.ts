import { createSlice } from "@reduxjs/toolkit";
import { PersonType } from "./personsSlice";

export interface TNewPersons {
    persons: PersonType[];
}

// Определение начального состояния, используя тип
const initialState: TNewPersons = {
    persons: [],
}

export const newPersonsSlice = createSlice({
    name: 'newPersons',
    initialState,
    reducers: {
        addNewPerson: (state, action) => {
            state.persons.push(action.payload)
        },
        removeOneNewPerson: (state, action) => {
            state.persons = state.persons.filter(q => q.id !== action.payload);
        },
        removeNewPersons: (state) => {
            state.persons = []
        }
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { addNewPerson, removeOneNewPerson, removeNewPersons } = newPersonsSlice.actions

export default newPersonsSlice.reducer