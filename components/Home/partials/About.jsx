import React from "react";

const About = () => {
  return (
    <div className="mt-10">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        About LA FAMAINE
      </h2>
      <div className="flex mx-[5rem] gap-5 pb-5">
        <div className="w-[40%]">
          <img
            src="/images/WhatsApp Imag.png"
            alt="banner photo"
            className="w-full"
          />
        </div>
        <div className="w-[60%] text-[12px] font-MyFont bg-white p-4 leading-5">
          <p className="py-3">
            LA FAMAINE means &ldquo;Beautiful Me,&ldquo; which we believe every
            woman is. That&ldquo;s why we&ldquo;re here to embolden each one of
            you through the transformative power of hair. After all, we created
            LA FAMAINE Hair because every woman deserves to feel like her best
            self.
          </p>
          <p className="pb-3">
            {" "}
            Our customers, or &ldquo;LA FAMAINE Bellas,&ldquo; as we call them,
            are glamorous, confident, and not afraid to express themselves.
            Discover your inner Bella with our extensive line of hair extensions
            and wigs. Our color matching service will help you select between
            40+ colors, and our hot tools and accessories create endless styling
            possibilities. Equally important to us is supporting all women,
            especially those we interact with — from sourcing to production to
            you. Our 100% Human Remy hair extensions are both hand-selected and
            ethically sourced. At LA FAMAINE, your happiness and satisfaction
            are at the top of our priorities.
          </p>
          <p className="pb-3">
            {" "}
            Above all, we pride ourselves on our service, being with you every
            step of the way. From your first set of extensions and beyond, we
            want to ensure the best experience possible with LA FAMAINE! For any
            questions, at any time, please contact us at{" "}
            <a href="#" className="underline">
              info@lafamaine.com
            </a>
            . We invite you to become a LA FAMAINE Bella today. You deserve it!
          </p>
        </div>
        <div className="w-[40%] ">
          <img
            src="/images/WhatsApp Image 2023-08-08 at 12.01.25 PM.png"
            alt="banner photo"
            className="w-full border  border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
