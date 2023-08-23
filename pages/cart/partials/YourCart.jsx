import React from "react";
import Button from "../../../components/Button/BtnClassic";
import CartList from "./CartList";

const YourCart = ({
  cartItems,
  removeItem,
  decreaseCartItem,
  addItemToCart,
  cartTotal,
}) => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center mx-[5rem] py-10">
      <h2 className="font-MyFont tracking-[2px]  text-center my-5 font-bold text-[24px]">
        Your Cart
      </h2>
      <div className="w-full">
        {cartItems.length === 0 ? (
          <>
            <p className="text-[12px] text-center">
              Your Cart is Currently Empty
            </p>
            <div className="pt-5">
              <Button
                btnText={"Continue Shopping 	\u2192"}
                btnWidth={"!px-5 !font-bold !py-3"}
              />
            </div>
          </>
        ) : (
          <CartList
            cartItems={cartItems}
            removeItem={removeItem}
            addItemToCart={addItemToCart}
            decreaseCartItem={decreaseCartItem}
            cartTotal={cartTotal}
          />
        )}
      </div>
    </div>
  );
};

export default YourCart;
