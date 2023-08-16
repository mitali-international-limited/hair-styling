import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Homepage from "../components/Home/homepage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/service/store";
import { useEffect } from "react";
import { setCurrentUser } from "@/service/reducers/userSlice";
import { RootState } from "@/service/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (typeof window !== "undefined" && storedUser && storedToken) {
      const user = JSON.parse(storedUser);
      console.log("User: from root: ", user);
      dispatch(setCurrentUser.fulfilled(user, "", {}));
    }
    console.log("User form store: ", user);
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
}
