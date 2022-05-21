import { createSlice } from '@reduxjs/toolkit';

const initialState = {activeStepperStep:0};

const RightSideAboutUsSectionSlice = createSlice({
  name: 'rightSideAboutUsSectionSlice',
  initialState,
  reducers: {
    handleStepperNext(state) {
      state.activeStepperStep = state.activeStepperStep + 1;
    },
    handleStepperBack(state) {
      state.activeStepperStep = state.activeStepperStep - 1;
    },
    handleStepperReset(state){
      state.activeStepperStep = 0;
    }
  },
});

export const { handleStepperNext, handleStepperBack, handleStepperReset} = RightSideAboutUsSectionSlice.actions
export default RightSideAboutUsSectionSlice.reducer