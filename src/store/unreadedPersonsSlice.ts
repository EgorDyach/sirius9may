import { createSlice } from '@reduxjs/toolkit'
import { EMedals } from './personsSlice';

// Определяем тип части состояния(среза/slice)
export type UnreadedPersonType = {
    name: string;
    city: string;
    dateOfBirth: number | "unknown" | "alive";
    dateOfDeath: number | "unknown" | "alive";
    history: string;
    mainPhoto: string;
    medals: EMedals[];
    photos: string[];
    published: string;
    rank: string;
    id: string;
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
export const {setCountOfUnreadedPersons, addUnreadedPerson, removeUnreadedPersons, setIsUnreadedPersonsLoading } = unreadedPersonsSlice.actions

export default unreadedPersonsSlice.reducer