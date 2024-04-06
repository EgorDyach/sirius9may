import { configureStore } from '@reduxjs/toolkit';
import ContentSlice from './contentSlice.ts';

export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    counter: ContentSlice,
  },
});
