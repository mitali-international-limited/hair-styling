import Button from "@/components/BtnWhite";
import BtnClassic from "@/components/Button/BtnClassic";
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/service/store";

import { setCurrentUser } from "@/service/reducers/userSlice";
import { useRouter } from "next/router";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const user = {
        fullName: fullName,
        email: email,
        password: password,
      };

      const action = await dispatch(setCurrentUser(user));

      if (setCurrentUser.fulfilled.match(action)) {
        // User creation successful
        alert("User created successfully");
        setFullName("");
        setEmail("");
        setPassword("");
      } else if (setCurrentUser.rejected.match(action)) {
        // User creation failed
        alert("User creation failed");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#f9eae3] px-[5rem]">
      <div className="mx-auto md:max-w-[75%] ">
        <h2 className="font-MyFont tracking-[2px] uppercase text-center py-10 text-[2.28571em] font-bold">
          Sign Up
        </h2>
        <div className="w-full max-w-[500px] mx-auto pb-10">
          <form onSubmit={handleOnSubmit}>
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="full_name"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="pt-3">
              <label
                htmlFor="current-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="current-password"
                className="bg-gray-50 border border-rose-500 focus:outline-none focus:border-blue-300 text-gray-900 text-sm  block w-full p-2.5 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
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
