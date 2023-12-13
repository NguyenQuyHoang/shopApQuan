import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ShopSlice = createSlice({
    name: "Shops",
    initialState: [],
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(AxiosAddShop.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(DeleteProduct.fulfilled, (state, action) => {
            state.length = 0;
            state.push(action.payload)
        })
    }
})

export const AxiosAddShop = createAsyncThunk("Shops/Add", async (dataProduct) => {
    try {
        const response = await axios.get(`http://localhost:3000/users/${dataProduct.username}`);
        let myShop = [...response.data.MyShop, dataProduct.product]
        try {
            const response = await axios.patch(`http://localhost:3000/users/${dataProduct.username}`, {
                MyShop: myShop
            });
            console.log("response: ", response)
            return response
        } catch (error) {
            console.error("Cập nhật thất bại!");
        }
    } catch (error) {
        console.error("Cập nhật thất bại!");
    }
})

export const DeleteProduct = createAsyncThunk("Shops/Delete", async (value)=>{
    try {
        const response = await axios.patch(`http://localhost:3000/users/${value[0]}`, {
            MyShop: value[1]
        });
        console.log("response: ", response)
        return response
    } catch (error) {
        console.error("Cập nhật thất bại!");
    }
})


export const ShopReducer = ShopSlice.reducer;
export const ShopAction = ShopSlice.actions; 