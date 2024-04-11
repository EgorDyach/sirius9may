import { createSlice } from '@reduxjs/toolkit'
import { EMedals } from './personsSlice';

// Определяем тип части состояния(среза/slice)
export type UnreadedPersonType = {
    name: string;
    city: string;
    dateOfBirth: number;
    dateOfDeath: number;
    history: string;
    mainPhoto: string;
    medals: EMedals[];
    photos: string[];
    published: number;
    rank: string;
    id: string;
    contacts: UnreadedContactsType
}

export type UnreadedContactsType = {
    telegram: string;
    email: string;
    name: string;
    surname: string;
    lastName?: string;
}

export interface TUnreadedPersons {
    unreadedPersons: UnreadedPersonType[];
    isUnreadedPersonLoading: boolean;
    countOfUnreadedPersons: number;
}

// Определение начального состояния, используя тип
const initialState: TUnreadedPersons = {
    unreadedPersons: [],
    isUnreadedPersonLoading: false,
    countOfUnreadedPersons: 0
}

export const unreadedPersonsSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addUnreadedPerson: (state, action) => {
            state.unreadedPersons.push(action.payload)
        },
        updateUnreadedPerson: (state, action) => {
            const index = state.unreadedPersons.findIndex(e => e.id === action.payload.id);
            if (index !== -1) {
                state.unreadedPersons[index] = action.payload.data 
            }
        },
        removeUnreadedPerson: (state, action) => {
            const without = state.unreadedPersons.filter(e => e.id !== action.payload)
            state.unreadedPersons = without
        },
        setCountOfUnreadedPersons: (state, action) => {
            state.countOfUnreadedPersons = action.payload
        },
        removeUnreadedPersons: (state) => {
            state.unreadedPersons = []
        },
        setIsUnreadedPersonsLoading: (state, action) => {
            state.isUnreadedPersonLoading = action.payload
        },
    },
})

// Сгенерированные Создатели Действий/ action creators
export const {updateUnreadedPerson, setCountOfUnreadedPersons, removeUnreadedPerson, addUnreadedPerson, removeUnreadedPersons, setIsUnreadedPersonsLoading } = unreadedPersonsSlice.actions

export default unreadedPersonsSlice.reducer