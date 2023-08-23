import React, { useState } from "react";

import { Input } from "@material-tailwind/react";
import CheckoutForm from "../../../components/AddressForm";

const ShippingForm = () => {
  const [shippingOption, setShippingOption] = useState("sameAsBilling");

  const handleShippingOptionChange = (event) => {
    setShippingOption(event.target.value);
  };
  return (
    <div className="pt-2">
      <div className="">
        <input
          type="radio"
          name="shippingOption"
          value="sameAsBilling"
          checked={shippingOption === "sameAsBilling"}
          onChange={handleShippingOptionChange}
        />
        <span className="pl-2">Default (Same as Billing) Address</span>
      </div>
      <div>
        <input
          type="radio"
          name="shippingOption"
          value="setAnotherAddress"
          checked={shippingOption === "setAnotherAddress"}
          onChange={handleShippingOptionChange}
        />
        <span className="pl-2">Set Another Shipping Address</span>
      </div>
      <div
        className={`${
          shippingOption === "setAnotherAddress" ? "block" : "hidden"
        }`}
      >
        <CheckoutForm />
      </div>
    </div>
  );
};

export default ShippingForm;
