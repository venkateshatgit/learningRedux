import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/counterStore/reducer'



export default configureStore({
    reducer: {
        counter: counterReducer.reducer,
    },
})