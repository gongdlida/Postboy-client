import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import Context from "../utils/context.js";

export default function Signout() {
  const router = useRouter();
  const [user, setUser] = useContext(Context).userContext;

  useEffect(async () => {
    try {
      const response = await fetch("http://3.36.70.223:3000/signout", {
        method: "post",
      });
      setUser({
        isLogin: false,
        username: "",
      });
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (e) {}
  }, []);
  return (
    <h1 className="text-center font-bold text-gray-900">
      You are successfully logged out! Redirecting in three seconds
    </h1>
  );
}
