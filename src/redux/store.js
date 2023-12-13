import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import {LoginReducer} from './LoginSlice';
import { ShopReducer } from './ShopSlice/ShopSlice';
import { CtspReducer } from './ctspSlice/CtspSlice';

const store = configureStore({
    reducer: {
        Products: productsReducer,
        Login: LoginReducer,
        Shop: ShopReducer,
        CTSanPham: CtspReducer,
    }
})

export default store;