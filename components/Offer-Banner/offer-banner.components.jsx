import React from 'react';

const OfferBanner = () => {
  return (
    <section className=" px-10 py-10 flex justify-between items-center bg-black">
      <div className="flex justify-center items-center basis-1/5 gap-3">
        <div className="w-14">
          <img src="https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/shipping-img.png" />
        </div>
        <div className="no-wrap">
          <p>
            <strong className="text-rose-700">Free Shipping</strong>
            <br />
            <span className="text-white/50">on all Orders $99+</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/5 gap-3">
        <div className="w-12">
          <img src="https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/friendly-img.png" />
        </div>
        <div className="">
          <p>
            <strong className="text-rose-700">Friendly, Fast</strong>
            <br />
            <span className="text-white/50">Customer Support</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-2/6 gap-3">
        <div className="w-12">
          <img src="https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/secure-img.png" />
        </div>
        <div className="">
          <p>
            <strong className="text-rose-700">Secure Payments</strong>
            <br />
            <span className="text-white/50">
              Your Information is Safe & Secure
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/4 gap-3">
        <div className="w-12">
          <img src="https://cdn11.bigcommerce.com/s-rihs34rpvk/product_images/uploaded_images/inventory-img.png" />
        </div>
        <div className="">
          <p>
            <strong className="text-rose-700">Largest Online Inventory</strong>
            <br />
            <span className="text-white/50">of Medical Supplies</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
