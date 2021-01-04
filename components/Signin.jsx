import { useState, useContext } from "react";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import OrangeButton from "./OrangeButton";
import Context from "../utils/context.js";
export default function Signin() {
  const router = useRouter();
  const [user, setUser] = useContext(Context).userContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const urlencoded = new URLSearchParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!(email && password)) {
        throw "Please give both email and password!";
      }
      urlencoded.append("email", email);
      urlencoded.append("password", password);
      const response = await fetch(`http://3.36.70.223:3000/signin`, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      });
      const body = await response.json();
      if (!response.ok) {
        throw `Server says: ${body.message}`;
      }
      setUser({
        isLogin: true,
        username: body.nickname,
      });
      router.push("/");
    } catch (e) {
      setErrormessage(e);
    }
  };
  return (
    <div className="h-full">
      <div>
        <div>
          <img className="mx-auto h-16" src="/noneStr.png" alt="Postboy logo" />
          <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
            Sign in to<span className="ml-2 text-orange-500">Postboy</span>
          </h2>
        </div>
        <form className="mt-4 " onSubmit={handleSubmit}>
          <div className="">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-t-md"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email address"
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-b-md"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
            />
            <div className="mt-4 w-full bg-orange-400 flex justify-center rounded">
              <OrangeButton>Sign in</OrangeButton>
            </div>
            <p className="mt-2">{errormessage}</p>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}
