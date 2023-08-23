import React from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../service/cart/cart.selector";
import { useSelector } from "react-redux";
import Summary from "./partials/Summary";
import BillingAddress from "./partials/BillingAddress";
import Payment from "./partials/Payment";
import Link from "next/link";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div>
      <h2 className="font-Proxima tracking-[1px] uppercase text-center my-5 text-[32px]">
        <Link href="/" className="font-extrabold">
          LaFamine
        </Link>{" "}
        Hair Solution And Style
      </h2>
      <Summary cartItems={cartItems} cartTotal={cartTotal} />
      <BillingAddress />
      <Payment cartTotal={cartTotal} />
    </div>
  );
};

export default Checkout;
