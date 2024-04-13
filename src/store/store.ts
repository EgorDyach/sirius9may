import  unreadedPersonsSlice from './unreadedPersonsSlice';
import { configureStore } from '@reduxjs/toolkit'
import personsSlice from './personsSlice'
import gallarySlice from './gallarySlice'
import heroSlice from './heroSlice';
import mainGallarySlice from './mainGallarySlice';
// ...

const store = configureStore({
  reducer: {
    persons: personsSlice,
    gallary: gallarySlice,
    unreadedPersons: unreadedPersonsSlice,
    heroPersons: heroSlice,
    mainGallary: mainGallarySlice
  },
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;