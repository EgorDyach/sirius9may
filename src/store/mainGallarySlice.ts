import { createSlice } from '@reduxjs/toolkit'

// Определяем тип части состояния(среза/slice)
export type mainGallaryItemType = {
    img: string;
    title?: string;
    countOfLikes?: number;
    date: number;
    isHero: boolean;
}

export interface TMainGallarys {
    gallary: mainGallaryItemType[];
    isGallaryLoading: boolean;
}

// Определение начального состояния, используя тип
const initialState: TMainGallarys = {
    gallary: [],
    isGallaryLoading: false,
}

export const mainGallarySlice = createSlice({
    name: 'mainGallary',
    initialState,
    reducers: {
        addMainGallary: (state, action) => {
            state.gallary.push(action.payload)
        },
        removeMainGallary: (state) => {
            state.gallary = []
        },
        setIsMainGallaryLoading: (state, action) => {
            state.isGallaryLoading = action.payload
        },
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { addMainGallary, removeMainGallary, setIsMainGallaryLoading } = mainGallarySlice.actions

export default mainGallarySlice.reducer