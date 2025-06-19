import { configureStore } from '@reduxjs/toolkit';
// ... import here your redux slices
import userSlice from '@/store/slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    // ... the rest of your slices
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;