import { createSlice } from '@reduxjs/toolkit'

// Определяем тип части состояния(среза/slice)
export type GallaryItemType = {
    img: string;
    title?: string;
    countOfLikes?: number;
    date: number;
}

export interface TGallarys {
    gallary: GallaryItemType[];
    isGallaryLoading: boolean;
}

// Определение начального состояния, используя тип
const initialState: TGallarys = {
    gallary: [],
    isGallaryLoading: false,
}

export const gallarySlice = createSlice({
    name: 'gallary',
    initialState,
    reducers: {
        addGallary: (state, action) => {
            state.gallary.push(action.payload)
        },
        removeGallary: (state) => {
            state.gallary = []
        },
        setIsGallaryLoading: (state, action) => {
            state.isGallaryLoading = action.payload
        },
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { addGallary, removeGallary, setIsGallaryLoading } = gallarySlice.actions

export default gallarySlice.reducer