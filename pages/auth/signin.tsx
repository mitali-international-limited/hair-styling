import Button from "@/components/BtnWhite";
import BtnClassic from "@/components/Button/BtnClassic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RootState } from "@/service/store";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/service/store";

import { signInUser } from "@/service/reducers/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    try {
      const action = await dispatch(signInUser(user));
      router.push("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-[#f9eae3] px-[5rem]">
      <div className="mx-auto md:max-w-[75%] ">
        <h2 className="font-MyFont tracking-[2px] uppercase text-center py-10 text-[2.28571em] font-bold">
          Sign In
        </h2>
        <div className="w-full max-w-[500px] mx-auto pb-10">
          <form onSubmit={handleSignIn}>
            <div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-center pt-5 text-[10pt] font-semibold">
              Forgot Your Password?
            </p>
            <div className="pt-5">
              <Button btnText={"Sign Up"} />
            </div>
            <Link href={"/auth/signup"}>
              <p className="text-center pt-5 text-[10pt] font-semibold">
                Create An Account
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
