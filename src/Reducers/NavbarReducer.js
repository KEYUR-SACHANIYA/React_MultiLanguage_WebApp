import { createSlice } from '@reduxjs/toolkit';

const initialState = {value:null};

const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState,
  reducers: {
    openNavbarMenu(state,action) {
      state.value = action.payload;
    },
    closeNavbarMenu(state) {
      state.value = null;
    },
  },
})

export const { openNavbarMenu, closeNavbarMenu} = navbarSlice.actions
export default navbarSlice.reducer