import React from "react";
import OfferBanner from "../Offer-Banner/offer-banner.components";
import Hero from "./partials/Hero";
import BestStyles from "./partials/BestStyles";
import About from "./partials/About";
import { hairExtension } from "@/utils/Extension";
import Collection from "./partials/Collection";
import DiscoverForYou from "./partials/DiscoverForYou";

const Homepage = () => {
  return (
    <div className="h-full w-full grid  grid-col overflow-hidden bg-[#f9eae3]">
      <Hero />
      <BestStyles data={hairExtension} />
      <Collection data={hairExtension} />
      <DiscoverForYou title={"Discover For You"} data={hairExtension[0]} />
      <About />
      <OfferBanner />
    </div>
  );
};

export default Homepage;
