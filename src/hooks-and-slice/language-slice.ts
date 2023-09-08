// redux/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en', // Default language
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state: { language: string; }, action: { payload: string; }) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
