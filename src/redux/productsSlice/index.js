import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const productsSlice = createSlice(
    {
        name: 'Products',
        initialState: {
            products: []
        },
        reducers: {
        },
        extraReducers: builder => {
            builder.addCase(AxiosGetProducts.fulfilled, (state, action) => {
                console.log("1.1 chạy vào extraReducers")
                console.log(action.payload)
                state.products = action.payload
                console.log(state)
            })
        }
    }
)



export const AxiosGetProducts = createAsyncThunk('Products/getProduct', async () => {
    try {
        const response = await axios.get('http://localhost:3000/products');
        console.log('1. chạy vào axios')
        let listData = response.data
        return listData
    } catch (error) {
        console.error("Không lấy được api");
    }
})

export default productsSlice.reducer;

