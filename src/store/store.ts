import { configureStore } from '@reduxjs/toolkit'
import personsSlice from './personsSlice'
import gallarySlice from './gallarySlice'
// ...

const store = configureStore({
  reducer: {
    persons: personsSlice,
    gallary: gallarySlice
  },
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;