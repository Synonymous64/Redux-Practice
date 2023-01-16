import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    //* Reducers are used to mutate the state
    //* Reducers are pure function (the function an doesn't have any side effects, which means that doesn't change the data of outside the function)  
    //* It simple terms they just change the state 
    reducers: {
        add(state, action) {
            // ! Redux: performing the same operation as in line 12
            // return [...state, action,payload]
            state.push(action.payload);
        },
        remove(state, action) {
            state = state.filter((item) => item.id !== action.payload);
        },
    },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;