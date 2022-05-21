import { configureStore } from '@reduxjs/toolkit';
import NavbarReducer from './Reducers/NavbarReducer';
import ImageModaxBoxReducer from './Reducers/ImageModaxBoxReducer';
import LeftSideAboutUsSectionReducer from './Reducers/LeftSideAboutUsSectionReducer';
import RightSideAboutUsSectionReducer from "./Reducers/RightSideAboutUsSectionReducer";
import ContactUsSectionReducer from './Reducers/ContactUsSectionReducer';
import SpecificProductSectionReducer from './Reducers/SpecificProductSectionReducer';

export default configureStore({
  reducer: {
    navbarState : NavbarReducer,
    imageModalBoxState : ImageModaxBoxReducer,
    leftSideAboutUsSectionState : LeftSideAboutUsSectionReducer,
    rightSideAboutUsSectionState : RightSideAboutUsSectionReducer,
    contactUsSectionState : ContactUsSectionReducer,
    specificProductSectionState : SpecificProductSectionReducer
  }, 
})