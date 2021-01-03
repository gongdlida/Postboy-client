import { useState } from "react";
import { useRouter } from "next/router";
import fetch from "node-fetch";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!(email && nickname && password && confirmPassword)) {
        throw "Please fill in all fields!";
      }
      if (password !== confirmPassword) {
        throw "Password does not match!";
      }
      let Body = JSON.stringify({
        email: email,
        nickname: nickname,
        password: password,
      });

      const response = await fetch(`/signup`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: Body,
      });

      const body = await response.json();
      if (!response.ok) {
        throw `Server says: ${body.message}`;
      }
      router.push("/?id=signin");
    } catch (e) {
      setErrormessage(e);
    }
  };

  return (
    <>
      <div>
        <div>
          <div>
            <img src="/postboy.png" alt="Workflow" />
            <h2>Create account</h2>
            <p>And Enjoy</p>
            <ul>
              <li>Autosave of your requests</li>
              <li>Statistics of your requests</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Email address"
              />
              <input
                onChange={(e) => setNickname(e.target.value)}
                type="text"
                value={nickname}
                placeholder="Nickname"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                placeholder="Password"
              />
              <input
                onChange={(e) => setconfirmPassword(e.target.value)}
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
              />
              <p>{errormessage}</p>
            </div>
            <div>
              <button type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import { useRouter } from "next/router";
// import fetch from "node-fetch";

// export default function Signup() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setconfirmPassword] = useState("");
//   const [errormessage, setErrormessage] = useState("");

//   const urlencoded = new URLSearchParams();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!(email && nickname && password && confirmPassword)) {
//         throw "Please fill in all fields!";
//       }
//       if (password !== confirmPassword) {
//         throw "Password does not match!";
//       }
//       urlencoded.append("email", email);
//       urlencoded.append("nickname", nickname);
//       urlencoded.append("password", password);

//       const response = await fetch(`http://3.36.70.223:3000/signup`, {
//         method: "post",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: urlencoded,
//       });

//       const body = await response.json();
//       if (!response.ok) {
//         throw `Server says: ${body.message}`;
//       }
//       router.push("/?id=signin");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <div>
//             <img src="/postboy.png" alt="Workflow" />
//             <h2>Create account</h2>
//             <p>And Enjoy</p>
//             <ul>
//               <li>Autosave of your requests</li>
//               <li>Statistics of your requests</li>
//             </ul>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 value={email}
//                 placeholder="Email address"
//               />
//               <input
//                 onChange={(e) => setNickname(e.target.value)}
//                 type="text"
//                 value={nickname}
//                 placeholder="Nickname"
//               />
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 value={password}
//                 placeholder="Password"
//               />
//               <input
//                 onChange={(e) => setconfirmPassword(e.target.value)}
//                 type="password"
//                 value={confirmPassword}
//                 placeholder="Confirm Password"
//               />
//               <p>{errormessage}</p>
//             </div>
//             <div>
//               <button type="submit">Create account</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
