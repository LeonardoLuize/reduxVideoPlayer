import { configureStore } from '@reduxjs/toolkit';
import currentReducer from '../features/currentVideo/currentSlice';


export default configureStore({
    reducer: {
        currentVideo: currentReducer
    },
})

