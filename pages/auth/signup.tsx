import Button from "@/components/BtnWhite";
import BtnClassic from "@/components/Button/BtnClassic";
import React from "react";

const SignUp = () => {
  return (
    <div className="w-full overflow-hidden bg-[#f9eae3] px-[5rem]">
      <div className="mx-auto md:max-w-[75%] ">
        <h2 className="text-center py-10 text-[2.28571em] font-bold">
          Sign Up
        </h2>
        <div className="w-full max-w-[500px] mx-auto pb-10">
          <form action="#">
            <div>
              <label
                htmlFor="full_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                className="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
                required
              />
            </div>
            <div className="pt-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                className="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
                required
              />
            </div>
            <div className="pt-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
                required
              />
            </div>

            <div className="pt-5">
              <Button btnText={"Create"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
