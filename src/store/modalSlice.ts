import { createSlice } from "@reduxjs/toolkit";
import { IGallaryItem } from "../shared/GallaryPhoto";
import { IOption } from "../shared/FormMedals";

export interface IModal {
    images: (IGallaryItem | IOption | {type: "personPhoto"; src: string; text: string})[];
    isOpen: boolean;
    title?: string;
    activeIndex: number; 
}

// Определение начального состояния, используя тип
const initialState: IModal = {
    images: [],
    activeIndex: 0,
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.title = action.payload.title;
            state.activeIndex = action.payload.activeIndex;
            state.images = action.payload.images;
            
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