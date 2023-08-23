import React, { useEffect, useState } from "react";
import RouteUrl from "../../components/LinkUrl";
import Extension from "../../components/Extesion";

import { useRouter } from "next/router";
import ProductInfo from "./partials/ProductInfo";
import ProductPicture from "./partials/ProductPicture";
import ProductDetails from "./partials/ProductDetails";

import { hairExtension } from "@/utils/Extension";
import MoreToAdhore from "./partials/MoreToAdhore";
import Reviews from "./partials/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../service/reducers/productSlice";

import { addItemToCart } from "../../service/cart/cart.action";

const Products = () => {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const { productName } = router.query;
  const pathName = router.pathname;
  const path = pathName.split("/");
  path.pop();
  path.push(productName);
  const { products } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("CarItems", cartItems);

  const dispatch = useDispatch();

  console.log("ProductName: ", productName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.products.find((product) => {
    return product.name === productName;
  });
  console.log("Products  by url: ", product);

  const addToCart = (e) => {
    console.log("Add to cART : ", product);
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product, count));
  };

  console.log("Product: ", products.products);

  return (
    <div className="mx-[5rem]">
      <RouteUrl path={path} />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <ProductPicture />
        </div>
        <div>
          <ProductInfo
            addToCart={addToCart}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
      <ProductDetails />
      <Reviews />
      <MoreToAdhore items={hairExtension[3].items} title={"MORE TO ADORE"} />
    </div>
  );
};

export default Products;
