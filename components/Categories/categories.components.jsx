import React from "react";

import Button from "../Button/button.component";

const Categories = () => {
  return (
    <section className="paddingLeftRight bg-slate-700 pb-16">
      <h1 className="heading-text text-white/80">
        TAPE IN NATURAL HAIR EXTENSIONS
      </h1>
      <div className="grid  grid-cols-6 gap-5">
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <div>
            <a href="#" className="">
              <img src="https://www.bellamiprofessional.com/cdn/shop/products/White_Blonde_80_e3a9cbda-379c-4650-9826-05baad5fb5dd_grande.jpg?v=1558331190" />
            </a>
          </div>
          <p className="heading-text pt-5 text-white/50">
            <strong>White Blonde #80 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/LIght_Ash_Brown_9_3bc18915-5086-4293-a9c5-4d69fa9abfd2_grande.jpg?v=1558331199" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Light Ash Brown #9 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Ash_Brown_8_22531f61-a7bf-40bd-a095-2db66f94b7f8_grande.jpg?v=1558331160" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Ash Brown #8 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Chestnut_Brown_6_9fe6b2b0-6bc7-49a4-b888-83e0fb7a8943_grande.jpg?v=1558331161" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Chestnut Brown #6 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Dark_Chestnut_Brown_10_a6eadd10-f8e0-4ee6-b26e-859cc447d38e_grande.jpg?v=1558331195" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Dark Chestnut Brown #10 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/NaturalBrown_3f8c8bd2-b378-42da-93e3-e50ffe98ba18_grande.jpg?v=1598905002" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Hazelnut Brown #5</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Chocolate_Brown_4_30e8c8b3-d640-4175-b015-f60f3d35f251_grande.jpg?v=1558331162" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Chocolate Brown #4 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Walnut_Brown_3_036112b6-a745-4aa1-b22e-e72560ab3b2f_grande.jpg?v=1558331200" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Walnut Brown #3 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Dark_Brown_2_4ca74723-22a9-4f5e-8ffd-b5c8173be230_grande.jpg?v=1558331162" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Dark Brown #2 Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Mochachino_Brown_1C_32e44592-5bca-4407-be7e-5882840a540f_grande.jpg?v=1558331163" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Mochachino Brown #1C Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Off_Black_1B_7864e485-6b64-4866-a824-48cd9fac79a0_grande.jpg?v=1558331165" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Off Black #1B Natural Straight</strong>
          </p>
        </div>
        <div className="cursor-pointer transition-all shadow  hover:shadow-2xl">
          <a>
            <img src="https://www.bellamiprofessional.com/cdn/shop/products/Jet_Black_1_a64b6eae-cc2c-4c92-aa34-e606196fa50c_grande.jpg?v=1558331166" />
          </a>
          <p className="heading-text pt-5 text-white/50">
            <strong>Jet Black #1 Natural Straight</strong>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <Button props={"See More"} />
      </div>
    </section>
  );
};

export default Categories;
