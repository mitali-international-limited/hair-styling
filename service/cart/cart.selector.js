import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.cartItems;
export const selectShippingCost = (state) => state.cart.shippingCost;

export const selectCartOpen = (state) => state.cart.isCartOpen;

export const selectCartCount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
export const selectCartTotalWithoutDiscount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
