import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/counterStore/reducer'

const store = configureStore({ 
    reducer: counterReducer 
})