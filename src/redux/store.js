import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/app/index'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
