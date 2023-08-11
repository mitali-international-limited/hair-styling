import React from "react";
import RouteUrl from "../../components/LinkUrl";
import { useRouter } from "next/router";
import Collection from "./partials/Collections";

import { hairExtension } from "@/utils/Extension";

const Collections = () => {
  const router = useRouter();
  const { collectionName } = router.query;
  const pathName = router.pathname;
  const path = pathName.split("/");
  path.pop();
  path.push(collectionName);

  const collection = hairExtension.find(
    (collection) => collection.name === collectionName
  );

  console.log("Collection: ", collection);

  return (
    <div className="mx-[5rem]">
      <RouteUrl path={path} />
      <Collection data={collection} />
    </div>
  );
};

export default Collections;
