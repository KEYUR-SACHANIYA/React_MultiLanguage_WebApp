import { createSlice } from '@reduxjs/toolkit';

const initialState = {snakebar:false,snakebarAlertBox:{alertType:null,alertMessage:null}};

const ContactUsSectionSlice = createSlice({
  name: 'contactUsSectionSlice',
  initialState,
  reducers: {
    handleSnakebarOpen(state) {
      state.snakebar = true;
    },
    handleSnakebarClose(state) {
      state.snakebar = false;
    },
    handleSnakebarAlertBox(state,action){
      state.snakebarAlertBox.alertType = action.payload.alertType;
      state.snakebarAlertBox.alertMessage = action.payload.alertMessage;
    }
  },
});

export const { handleSnakebarOpen,handleSnakebarClose,handleSnakebarAlertBox} = ContactUsSectionSlice.actions;
export default ContactUsSectionSlice.reducer;