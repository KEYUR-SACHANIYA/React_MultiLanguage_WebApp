import { createSlice } from '@reduxjs/toolkit';

const initialState = {activeCarouselStep:0};

const LeftSideAboutUsSectionSlice = createSlice({
  name: 'leftSideAboutUsSectionSlice',
  initialState,
  reducers: {
    handleCarouselNext(state) {
      state.activeCarouselStep = state.activeCarouselStep + 1;
    },
    handleCarouselBack(state) {
      state.activeCarouselStep = state.activeCarouselStep - 1;
    },
    handleActiveCarouselStep(state,action){
      state.activeCarouselStep = action.payload;
    }
  },
});

export const { handleCarouselNext, handleCarouselBack, handleActiveCarouselStep} = LeftSideAboutUsSectionSlice.actions
export default LeftSideAboutUsSectionSlice.reducer