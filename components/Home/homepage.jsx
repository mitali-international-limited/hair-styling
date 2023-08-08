import React from "react";

import Header from "../Header/header.component";
import Banner from "../Banner/banner.component";
import OfferBanner from "../Offer-Banner/offer-banner.components";
import Categories from "../Categories/categories.components";
import TradingProducts from "../Treding-products/trading-products.components";
import ContactBanner from "../contact-banner/contact-banner.component";
import Footer from "../Footer/footer";
import HeroSlider from "../Heroslider/HeroSlider";
import Account from "../Account/account";
import Dropdown from "../dropDown/dropdown";
import Hero from "./partials/Hero";
import BestStyles from "./partials/BestStyles";
import About from "./partials/About";

import { hairExtension } from "@/utils/Extension";
import Collection from "./partials/Collection";
import DiscoverForYou from "./partials/DiscoverForYou";

const Homepage = () => {
  return (
    <div className="h-full w-full grid  grid-col overflow-hidden bg-[#f9eae3]">
      {/* <Dropdown /> */}

      {/**<HeroSlider />  */}
      <Hero />
      <BestStyles data={hairExtension} />
      <Collection data={hairExtension} />
      <DiscoverForYou data={hairExtension} />
      <About />
      {/* <ContactBanner />  <Banner />
      <Categories />
      <Account />
      <TradingProducts />*/}
      <OfferBanner />
    </div>
  );
};

export default Homepage;
