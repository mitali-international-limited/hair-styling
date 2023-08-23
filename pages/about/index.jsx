import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-[5rem]">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center my-10 font-bold text-[24px]">
        About LA FAMAINE
      </h2>
      <div className="grid grid-cols-2 text-[13px] pb-5">
        <div>
          <p className="py-2">Welcome to LaFamaine Hair!</p>
          <p className="py-2">
            LaFamaine is the embodiment of every single lady in this world! We
            like to call them LaFamaine Bella’s!! She is beautiful, glam,
            sophisticated, wise, elegant, and most of all she believes she is
            beautiful because she is.
          </p>
          <p className="py-2">
            So, what’s in a name? LaFamaine is “Beautiful Me” which every woman
            must believe she is. LaFamaine Hair was created because every woman
            deserves long luscious locks that are 100% Human Remy Hair, easy to
            apply, and extremely discreet.
          </p>
          <p className="py-2">
            At LaFamaine, your happiness and satisfaction with your LaFamaine
            Hair Extensions is always at the top of our priority list. We pride
            ourselves on our customer service and being there with you every
            step of the way, from the time before you purchase your LaFamaine’s,
            through its delivery, and after.
          </p>
          <p className="py-2">
            {" "}
            We promise that we will be there to answer all your questions and
            you never have to feel like you’re alone! We pay attention to our
            lovely customers and only want you to have the best experience
            possible with LaFamaine!
          </p>
          <p className="py-2">
            {" "}
            So, for any questions, at any time, please do not hesitate to
            contact us at info@LaFamaine.com Join the LaFamaine Hair world &
            become a LaFamaine Bella today, you deserve it!
          </p>
          <p className="py-2"> Love, LaFamaine Hair</p>
        </div>
        <div className="relative">
          <Image src={"/images/about.webp"} alt="about" fill cover />
        </div>
      </div>
    </div>
  );
};

export default About;
