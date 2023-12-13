import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const CtspSlice = createSlice({
    name: "CtSanPham",
    initialState: [],
    reducers: {
        addCtsp: (state, action) => {
            state.push(action.payload)
        }
    },extraReducers: builder => {
        builder.addCase(AxiosAddCtsp.fulfilled, (state, action) => {
            state.length=0;
            state.push(action.payload)
        })
    }
})

export const AxiosAddCtsp = createAsyncThunk("CtSanPham/Add", async (value)=>{
    try {
        const response = await axios.patch(`http://localhost:3000/users/${value[0]}`, {
            Ctsp: []
        });
        console.log(response)
        const resp = await axios.patch(`http://localhost:3000/users/${value[0]}`, {
            Ctsp: value[1]
        });
        console.log(resp)
        return resp
    } catch (error) {
        console.error("Cập nhật thất bại!");
    }
})


export const CtspReducer = CtspSlice.reducer;
export const CtspAction = CtspSlice.actions;