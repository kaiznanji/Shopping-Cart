import { createSelector } from "@reduxjs/toolkit";

export const getToken = createSelector(
    (state) => state.accessToken,
    (accessToken) => accessToken
)

export const getEmail = createSelector(
    (state) => state.email,
    (email) => email
)

export const getCartItems = createSelector(
    (state) => state.cart,
    (cart) => cart
)

export const getCartSize = createSelector(
    (state) => state.cart,
    (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; ++i) {
            total += cart[i].count;
        }
        return total;
    }
)