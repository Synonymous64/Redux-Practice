import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//! This object is freeze, it means that we can not change object values. (READ-ONLY) 
export const STATUSES = Object.freeze({
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
    //! this reducers are used for commented thunk syntax 
    reducers: {
        // setProducts(state, action) {
        //! DO NOT DO THIS -- NEVER (do not do async call from reducers as they are pure function) 
        //     //^ const res = await fetch('https://fakestoreapi.com/products');
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    //! by using async thunk method for first thunk syntax
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
    }
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//& the word thunk is a programming term which means "a peace of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later
//! The thunks are used in two ways 

//! Thunks is function itself which returns a function inside from it. 

//! method 2 
export const fetchProducts = createAsyncThunk('product/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
})

//! method 1
 
// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// } 