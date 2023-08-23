import React from "react";
import { Input } from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

function formatCardNumber(value: string) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function CheckoutForm() {
  return (
    <div className="w-full mt-5">
      <form className="flex flex-col gap-2">
        <div>
          <Input type="text" label="First Name*" />
        </div>
        <div className="">
          <Input type="text" label="Last Name*" />
        </div>
        <div className="">
          <Input type="email" label="Email*" />
        </div>
        <div className="">
          <Input type="text" label="Country*" />
        </div>
        <div className="">
          <Input type="text" label="Address Line 1*" />
        </div>
        <div className="">
          <Input type="text" label="Address Line 2" />
        </div>
        <div className="">
          <Input type="text" label="City / Suburb*" />
        </div>
        <div className="">
          <Input type="text" label="Zip / Postcode*" />
        </div>
        <div className="">
          <Input type="text" label="Mobile Phone*" />
        </div>
      </form>
    </div>
  );
}
