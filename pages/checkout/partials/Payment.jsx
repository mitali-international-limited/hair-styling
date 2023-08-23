import React from "react";
import { PAUSE } from "redux-persist";
import PaymentMethod from "./PaymentMethod";

const Payment = ({ cartTotal }) => {
  return (
    <div className="flex mx-[5rem] gap-10 mt-10">
      <div className="w-1/2">
        <PaymentMethod />
      </div>
      <div className="w-1/2">
        <h2 className="border-b">Order Summary</h2>
        <div className="pt-5 text-sm">
          <div className="flex justify-between border-b pb-2">
            <p>Items Total </p>
            <p>${cartTotal}</p>
          </div>
          <div className="flex justify-between border-b pt-3 pb-2">
            <p>Shipping </p>
            <p>{"$0"}</p>
          </div>
          <div className="flex justify-between border-b pt-3 pb-2">
            <p>Taxes & Fees </p>
            <p>{"$0"}</p>
          </div>

          <div className="flex justify-between pt-5 font-semibold">
            <p>Total For Your Order </p>
            <p>${cartTotal}</p>
          </div>
          <p className="pt-5 text-[8pt] font-Proxima">
            All applicable duties, taxes and fees are included in the total
            amount of your order. We guarantee you will not be required to pay
            any additional cost on delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
