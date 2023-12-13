import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice(
    {
        name: "Login",
        initialState: {
            Home: 1,
            Login: 0,
            Register: 0
        },
        reducers : {
            SetHome: (state, action) => {
                state.Login = 0
                state.Register = 0
                state.Home = action.payload
            },
            SetLogin: (state, action) => {
                state.Login = action.payload
                state.Register = 0
                state.Home = 0
            },
            SetRegister: (state, action) => {
                state.Login = 0
                state.Register = action.payload
                state.Home = 0
            }
        }
    }

)

export const LoginReducer = LoginSlice.reducer;
export const LoginAction = LoginSlice.actions;

