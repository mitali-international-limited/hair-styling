import React from 'react';
import Link from 'next/link';

import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';
import { MdLockOutline, MdOutlinePeople } from 'react-icons/md';

const signup = () => {
  return (
    <main className="relative w-full bg-black/20 md:flex md:justify-center md:items-center md:p-10">
      <div className="bg-white/50 flex justify-center items-center  w-full text-center md:rounded-2xl md:shadow-2xl md:px-16 md:flex md:w-3/5 md:max-w-4xl">
        {/* Sign in section */}
        <div className="w-full p-5">
          <div className="text-center md:text-left  font-bold">
            <span className="text-slate-500">bellami</span>professional
            {/* <span className="text-black/30">.com</span> */}
          </div>
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-2 uppercase">
              Sign In Account
            </h2>
            <div className="border-2 w-10 border-secondary inline-block mb-2"></div>
            {/* social login section */}
            <div className="flex justify-center my-2">
              <a
                href="https://www.facebook.com"
                className="border-2 border-black bg-black text-white rounded-full p-3 mx-2 hover:bg-white hover:text-black"
              >
                <FaFacebookF className="text-sm lg:text-base" />
              </a>
              <a
                href="https://www.instagram.com"
                className="border-2 border-black bg-black text-white rounded-full p-3 mx-2 hover:bg-white hover:text-black"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://mail.google.com"
                className="border-2 border-black bg-black text-white rounded-full p-3 mx-2 hover:bg-white hover:text-black"
              >
                <FaGoogle className="text-sm lg:text-base" />
              </a>
            </div>
            <p className="my-6 uppercase pl-28 font-bold">or</p>

            <div className="flex flex-col items-center">
              <div className="w-3/4 p-2 flex items-center mb-3 rounded-lg border border-white/30 bg-black/50">
                <MdOutlinePeople className="text-white m-1" />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="bg-white outline-none text-sm lg:text-base flex-1 rounded-sm"
                />
              </div>

              <div className="w-3/4 p-2 flex items-center mb-3 rounded-lg border border-white/30 bg-black/50">
                <MdLockOutline className="text-white m-1" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="bg-white outline-none text-sm lg:text-base flex-1 rounded-sm"
                />
              </div>

              <Link
                href="/"
                className=" border-2 border-secondary rounded-lg text-white px-12 py-2 inline-block font-semibold bg-black/75 hover:bg-black"
              >
                Log In
              </Link>

              <div className=" flex ">
                <p className="ml-2 py-4">
                  Dont you have account yet?
                  <Link
                    href="/"
                    className=" ml-2 px-2 py-4 text-secondary hover:text-white font-semibold"
                  >
                    Create new Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default signup;
