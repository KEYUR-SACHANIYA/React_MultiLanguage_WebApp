import { createSlice } from '@reduxjs/toolkit';

const initialState = { open: false, product: {} };

const imageModalBoxSlice = createSlice({
    name: 'imageModalBoxSlice',
    initialState,
    reducers: {
        openImageModalBox(state,action) {
            state.open = true;
            state.product = action.payload;
        },
        closeImageModalBox(state) {
            state.open = false;
            state.product = {};
        }
    },
})

export const { openImageModalBox, closeImageModalBox } = imageModalBoxSlice.actions;
export default imageModalBoxSlice.reducer;