import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import homeReducer from './modules/home'
import donghuaReducer from './modules/donghua';

const store = configureStore({
    reducer: {
        home: homeReducer,
        donghua: donghuaReducer,
    }
})

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
