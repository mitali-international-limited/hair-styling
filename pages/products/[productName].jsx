import React from "react";
import RouteUrl from "../../components/LinkUrl";
import Extension from "../../components/Extesion";

import { useRouter } from "next/router";
import ProductInfo from "./partials/ProductInfo";
import ProductPicture from "./partials/ProductPicture";
import ProductDetails from "./partials/ProductDetails";

import { hairExtension } from "@/utils/Extension";
import MoreToAdhore from "./partials/MoreToAdhore";
import Reviews from "./partials/Reviews";

const Products = () => {
  const router = useRouter();
  const { productName } = router.query;
  const pathName = router.pathname;
  const path = pathName.split("/");
  path.pop();
  path.push(productName);

  const product = hairExtension.find((product) => product.name === productName);

  console.log("Product: ", product);

  return (
    <div className="mx-[5rem]">
      <RouteUrl path={path} />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <ProductPicture />
        </div>
        <div>
          <ProductInfo />
        </div>
      </div>
      <ProductDetails />
      <Reviews />
      <MoreToAdhore items={hairExtension[3].items} title={"MORE TO ADORE"} />
    </div>
  );
};

export default Products;
