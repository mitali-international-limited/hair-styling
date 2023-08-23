import React, { useEffect } from "react";
import MustSeeItems from "./partials/MustSeeItems";
import YourCart from "./partials/YourCart";
import DiscoverForYou from "../../components/Home/partials/DiscoverForYou";
import {
  selectCartItems,
  selectCartTotal,
} from "../../service/cart/cart.selector";
import {
  addItemToCart,
  decreaseCartItem,
  removeItem,
} from "../../service/cart/cart.action";

import { hairExtension } from "@/utils/Extension";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  useEffect(() => {
    console.log("CartItems from cart: ", cartItems);
  }, [cartItems]);
  return (
    <div className="mt-0">
      <MustSeeItems data={hairExtension} />
      <YourCart
        cartItems={cartItems}
        removeItem={removeItem}
        addItemToCart={addItemToCart}
        decreaseCartItem={decreaseCartItem}
        cartTotal={cartTotal}
      />
      <DiscoverForYou data={hairExtension[3]} title={"Best Sellers"} />
    </div>
  );
};

export default Cart;
