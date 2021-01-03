import { useState } from "react";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import OrangeButton from "./OrangeButton";
export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const urlencoded = new URLSearchParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!(email && nickname && password && confirmPassword)) {
        throw "Please fill in all fields!";
      }
      if (password !== confirmPassword) {
        throw "Password does not match!";
      }
      urlencoded.append("email", email);
      urlencoded.append("nickname", nickname);
      urlencoded.append("password", password);
      const response = await fetch(`http://3.36.70.223:3000/signup`, {
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
      router.push("/?id=signin");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="h-full">
        <div>
          <div>
            <img
              className="mx-auto h-16"
              src="/noneStr.png"
              alt="Postboy logo"
            />
            <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
              Create account
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
                className="w-full px-3 py-2 border border-gray-300"
                onChange={(e) => setNickname(e.target.value)}
                type="text"
                value={nickname}
                placeholder="Nickname"
              />
              <input
                className="w-full px-3 py-2 border border-gray-300"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                placeholder="Password"
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-b-md"
                onChange={(e) => setconfirmPassword(e.target.value)}
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
              />
              <div className="mt-4 w-full bg-orange-400 flex justify-center rounded">
                <OrangeButton>Create account</OrangeButton>
              </div>
              <p className="mt-2">{errormessage}</p>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
}
