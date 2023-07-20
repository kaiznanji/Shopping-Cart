import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  accessToken: undefined,
  email: undefined,
  cart: []
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setEmail(state, action) {
        state.email = action.payload;
      },
    addToCart(state, action) {
        let found = false;
        for (let i = 0; i < state.cart.length; ++i) {
            if (state.cart[i].id === action.payload.id) {
                found = true;
                state.cart[i].count++;
            }
        }
        if (!found) state.cart.push({
            ...action.payload,
            count: 1
        })
    },
    removeFromCart(state, action) {
        for (let i = 0; i < state.cart.length; ++i) {
            if (state.cart[i].id === action.payload) {
                if (state.cart[i].count > 1) state.cart[i].count--;
                else if (state.cart[i].count === 1) state.cart.splice(i, 1);
            }
        }
    },
  },
});

export const {
  setAccessToken,
  setEmail,
  addToCart,
  removeFromCart
} = appSlice.actions;
export default appSlice.reducer;