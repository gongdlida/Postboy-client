import { check } from "prettier";
import React, { useState, useEffect } from "react";
let er = "Please fill everything that we want u to do";

import Frame from "../components/./yi/frame";
const methods = ["GET", "POST"];

export default function ReqHandler() {
  const [checker, setChecker] = useState();
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  const [message, setMessage] = useState([er]);
  const [junhee, setJunhee] = useState('')

  // let gathering = () =>{

  // }
  let checkUserForm = () => {
    console.log("마이크쵝쵝쵝", checker);
    // if (
    //   checker.filiet((el) => {
    //     if (el === undefined && el === "Select") {
    //       alert(message);
    //     }
    //   })
    // ) {
    //   // setMessage("Please fill everything that we want u to do");
    //   // } else {
    //   setMessage(`Request headers are set Method : ${method}, URL : ${url}`);
    // }
    // alert(message);
  };
  const handleJunhee = (sth) => {
    setJunhee(sth)
  }

  return (
    <div>
      <div className="sendMessage">
        <div>
          <span className="SelectBar">
            <select
              className="Select_menu"
              onChange={(e) => setMethod(e.target.value)}
            >
              {methods.map((el, idx) => {
                return (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
            <textarea
              className="SendText"
              placeholder="Fill URL here :)"
              onChange={(url) => setUrl(url.target.value)}
            ></textarea>
            <button className="StartFetch" onClick={() => checkUserForm()}>
              SEND
            </button>
          </span>
        </div>
      </div>
      <Frame junhee={handleJunhee} checker={checker} />
    </div>
  );
}
