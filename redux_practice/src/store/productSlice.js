import { createSlice } from '@reduxjs/toolkit';

//! This object is freeze, it means that we can not change object values. (READ-ONLY) 
const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    //* Reducers are used to mutate the state
    //* Reducers are pure function (the function which doesn't have any side effects, which means that it never changes the data of outside the function)  
    //* It simple terms they just change the state 
    reducers: {
        setProducts(state, action) {
            //! DO NOT DO THIS -- NEVER (do not do async call from reducers as they are pure function) 
            //^ const res = await fetch('https://fakestoreapi.com/products');
            state.data = action.payload;
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});
export const { setProducts, remove } = productSlice.actions;
export default productSlice.reducer;

// Thunks 