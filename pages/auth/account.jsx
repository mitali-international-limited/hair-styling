import React, { useEffect } from "react";
import BtnClassic from "@/components/Button/BtnClassic";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/service/store";
import { useRouter } from "next/router";

import { signOutUser } from "@/service/reducers/userSlice";

const Account = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOutUser());
    router.push("/auth/signin");
  };

  return (
    <div className="w-full overflow-hidden bg-[#f9eae3] px-[5rem]">
      <h2 className="font-MyFont tracking-[2px] uppercase text-center pt-10 pb-3 text-[2.28571em] font-bold">
        My Profile
      </h2>
      <div onClick={handleSignOut}>
        <BtnClassic
          btnText={"Sign Out"}
          btnWidth={
            "!border border-black !rounded-sm hover:!bg-black hover:text-white"
          }
        />
      </div>
      <div className="py-5 grid grid-cols-2 gap-10">
        <div className="">
          <h2 className=" font-MyFont tracking-[1px] pb-1 text-[1.2em] font-bold ">
            Order History
          </h2>
          <div className="border-t border-black min-h-[200px] flex justify-center items-center">
            <p className="text-[10pt]">
              You haven&apos;t placed any orders yet.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center">
          <h2 className=" font-MyFont tracking-[1px] pb-1 text-[1.2em] font-bold ">
            Account Details
          </h2>
          <div className="w-full min-h-[200px] font-Proxima px-10 pt-5">
            <div className="flex justify-between">
              <div>
                <p className="text-[10pt]">
                  Name: {user.currentUser && user.currentUser.fullName}
                </p>
                <p className="text-[10pt]">
                  Email: {user.currentUser && user.currentUser.email}
                </p>
              </div>
              <div>
                <p className="pb-5">Address</p>
                <p>Bangladesh</p>
              </div>
            </div>

            <p>Total Perches: 0TK</p>
            <p>Pending Order: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
