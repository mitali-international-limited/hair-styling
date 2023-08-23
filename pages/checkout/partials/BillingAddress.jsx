import React, { useState } from "react";
import CheckoutForm from "../../../components/AddressForm";
import ShippingForm from "./ShippingForm";
import { Typography } from "@material-tailwind/react";

const BillingAddress = () => {
  return (
    <div className="mt-5 mx-[5rem] ">
      <div className="flex  gap-10 mb-5">
        <div className="w-1/2">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-[17px] border-b"
          >
            Billing Details
          </Typography>
          <CheckoutForm />
        </div>
        <div className="w-1/2">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-[17px] border-b"
          >
            Delivery Details
          </Typography>
          <ShippingForm />
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          name="shippingOption"
          value="setAnotherAddress"
        />
        <span className="pl-2 text-sm">
          I agree to receive information, special offers and promotions
        </span>
      </div>
    </div>
  );
};

export default BillingAddress;
