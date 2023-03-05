import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';
import { authReducer } from './reducers/userReducer';
const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
})

export default store;
export const server = "http://localhost:5000/api/v1"