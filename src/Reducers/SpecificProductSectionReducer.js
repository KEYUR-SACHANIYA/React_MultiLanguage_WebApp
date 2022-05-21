import { createSlice } from '@reduxjs/toolkit';

const initialState = {open:true,quantity:1};

const SpecificProductSectionSlice = createSlice({
  name: 'specificProductSectionSlice',
  initialState,
  reducers: {
    setOpen(state) {
      state.open = !state.open;
    },
    setQuantity(state,action) {
      state.quantity = action.payload;
    },
  },
})

export const { setOpen, setQuantity} = SpecificProductSectionSlice.actions;
export default SpecificProductSectionSlice.reducer;