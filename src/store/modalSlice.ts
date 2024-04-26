import { createSlice } from "@reduxjs/toolkit";

export interface IModal {
    img: string;
    isOpen: boolean;
    title?: string; 
}

// Определение начального состояния, используя тип
const initialState: IModal = {
    img: '',
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        openModal: (state, action) => {
            console.log(action.payload)
            state.title = action.payload.title;
            state.img = action.payload.img;
            
            state.isOpen = true;
        },
        closeModal: (state) => {

            state.isOpen = false;
        }
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer