import React, { useState, useEffect } from "react";
// let er = "Please fill everything that we want u to do";

import SendReq from "../components/fetch";
import Frame from "../components/./yi/frame";
const methods = ["GET", "POST"];

export default function ReqHandler() {
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  // const [message, setMessage] = useState([er]);

  const [Accepts, setAccepts] = useState([]);
  const [Connection, setConnection] = useState([]);
  const [Content_Type, setContent_Type] = useState([]);
  const [Data, setData] = useState({});

  let checkUserForm = () => {
    setData({ method, url, Accepts, Connection, Content_Type });
    console.log("data", Data);
  };
  const storage = [];

  const getAccepts = (sth) => {
    setAccepts(Accepts.concat(sth));
  };
  const getConnetion = (sth) => {
    setConnection(Connection.concat(sth));
  };
  const getContent_Type = (sth) => {
    setContent_Type(Content_Type.concat(sth));
  };

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
      <Frame
        Accepts={getAccepts}
        Connection={getConnetion}
        Content_Type={getContent_Type}
      />
      <SendReq reqForm={Data} />
    </div>
  );
}
