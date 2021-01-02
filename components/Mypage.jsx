import { useState, useEffect, useContext } from "react";
import fetch from "node-fetch";
import Context from "../utils/context.js";
import Link from "next/link";

export default function Mypage() {
  const [user, setUser] = useContext(Context).userContext;
  const [history, setHistory] = useContext(Context).historyContext;

  useEffect(async () => {
    try {
      const response = await fetch("http://3.36.70.223:3000/historyget", {
        method: "get",
      });
      const body = await response.json();
      setHistory(body.history);
    } catch (e) {}
  }, []);
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const newHistory = {
        type: "POST",
        status: 404,
      };
      const response = await fetch("http://3.36.70.223:3000/historyadd", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newHistory),
      });
      setHistory((oldHistory) => [...oldHistory, newHistory]);
    } catch (e) {}
  };
  const handleClear = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://3.36.70.223:3000/historyclear", {
        method: "post",
      });
      setHistory([]);
    } catch (e) {}
  };
  if (user.isLogin) {
    return (
      <>
        <button onClick={handleAdd}>Click to add history</button>
        <button onClick={handleClear}>Click to clear history</button>
        <div>Your request history is </div>
        <ul>
          {history.map((item) => (
            <li>
              {item.type}: {item.status}
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <div>You are not logged in!</div>
        <Link href={"/?id=signin"}>
          <a>Go to Login page</a>
        </Link>
      </>
    );
  }
}
