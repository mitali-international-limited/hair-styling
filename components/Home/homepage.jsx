import React from 'react';

import Header from '../Header/header.component';
import Banner from '../Banner/banner.component';
import OfferBanner from '../Offer-Banner/offer-banner.components';
import Categories from '../Categories/categories.components';
import TradingProducts from '../Treding-products/trading-products.components';
import ContactBanner from '../contact-banner/contact-banner.component';
import Footer from '../Footer/footer';
import HeroSlider from '../Heroslider/HeroSlider';
import Account from '../Account/account';
import Dropdown from '../dropDown/dropdown';

const Homepage = () => {
  return (
    <div className="h-full w-full grid  grid-col">
      {/* <Dropdown /> */}
      <Header />
      <HeroSlider />
      <Banner />
      <Categories />
      <Account />
      <TradingProducts />
      {/* <ContactBanner /> */}
      <OfferBanner />
      <Footer />
    </div>
  );
};

export default Homepage;
