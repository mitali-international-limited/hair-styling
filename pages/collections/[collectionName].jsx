import React, { useEffect } from "react";
import RouteUrl from "../../components/LinkUrl";
import { useRouter } from "next/router";
import Collection from "./partials/Collections";

import { fetchCategories } from "../../service/reducers/categorySlice";

import { hairExtension } from "@/utils/Extension";
import { useDispatch, useSelector } from "react-redux";

const Collections = () => {
  const router = useRouter();
  const { collectionName } = router.query;
  const pathName = router.pathname;
  const dispatch = useDispatch();
  const path = pathName.split("/");
  path.pop();
  path.push(collectionName);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoryList = useSelector((state) => state.categories);

  const collection = hairExtension.find(
    (collection) => collection.name === collectionName
  );

  console.log("categoryList: ", categoryList);

  return (
    <div className="mx-[5rem]">
      <RouteUrl path={path} />
      <Collection data={collection} />
    </div>
  );
};

export default Collections;
