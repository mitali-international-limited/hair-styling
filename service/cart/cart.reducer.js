import { CART_ACTION_TYPE } from "./cart.type";

export const CART_INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
};
const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_ITEM_TO_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPE.SET_SHIPPING_COST:
      return {
        ...state,
        shippingCost: payload,
      };

    default:
      return state;
  }
};
export default cartReducer;
