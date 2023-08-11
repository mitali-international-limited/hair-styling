import React from "react";
import MustSeeItems from "./partials/MustSeeItems";
import YourCart from "./partials/YourCart";
import DiscoverForYou from "../../components/Home/partials/DiscoverForYou";

import { hairExtension } from "@/utils/Extension";

const Cart = () => {
  return (
    <div className="mt-0">
      <MustSeeItems data={hairExtension} />
      <YourCart />
      <DiscoverForYou data={hairExtension[3]} title={"Best Sellers"} />
    </div>
  );
};

export default Cart;
