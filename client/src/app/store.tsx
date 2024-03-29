import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from '../feature/Auth/authSlice';
import productSlice from "../feature/Products/productSlice";


const persistConfig = {
    key: 'root',
    storage,
}
const rootreducer = combineReducers({
    auth: authSlice,
    product: productSlice,
   
})
const persistedReducer = persistReducer(persistConfig, rootreducer)
export const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>