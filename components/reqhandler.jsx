import React, { useState, useEffect } from "react";
let er = "Please fill everything that we want u to do";

export default function ReqHandler() {
  let methods = ["GET", "POST"];
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  const [message, setMessage] = useState([er]);

  let checkUserForm = () => {
    if (url) {
      // setMessage("Please fill everything that we want u to do");
      // } else {
      setMessage(`Request headers are set Method : ${method}, URL : ${url}`);
    }
    alert(message);
  };

  return (
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
    // <div className="SendMessage">
    //   <select className="Select_menu">
    //     <option>POST</option>
    //     <option>GET</option>
    //   </select>
    //   <textarea className="SendText"></textarea>
    //   <button className="StartFetch">실행</button>
    // </div>
  );
}

// {/* <div class="md:flex bg-yellow-200 w-full">
//             <div>
//               <select class="w-full rounded-md border border-gray-300
//               shadow-sm px-8 py-4 bg-white text-sm font-normal text-gray-700 hover:bg-gray-50
//               ">
//               <option>POST</option>
//               <option>GET</option>
//               </select>
//             </div>
//             <textarea class="w-10/12 "></textarea>
//           <button class="w-2/12 border border-gray-400 bg-white">실행</button>
//         </div>    */}
