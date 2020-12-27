import React, { useState, useEffect } from "react";
const fetch = require("node-fetch");

import Frame from "../components/./yi/frame";
const methods = ["GET", "POST"];

export default function ReqHandler() {
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();

  const [Body, setBody] = useState([]);
  const [Accepts, setAccepts] = useState([]);
  const [Connection, setConnection] = useState([]);
  const [Content_Type, setContent_Type] = useState([]);

  let SendReq = async () => {
    console.log(
      method,
      Accepts,
      Connection,
      Content_Type,
      JSON.stringify(Body),
      url,
      JSON.parse(Body)
    );
    try {
      await fetch(url, {
        method: method,
        // body: Body,
        headers: {
          "User-Agent": Accepts[0],
          Accept: Accepts[1],
          "Accept-Language": Accepts[2],
          "Accept-Encoding": Accepts[3],
          Connection: Connection,
          "Content-Type": Content_Type,
          redirect: "follow",
        },
        body: JSON.stringify({ Body }),
      });
    } catch (err) {
      alert(err);
    }
  };

  const getAccepts = (sth) => {
    setAccepts(Accepts.concat(sth));
  };
  const getConnetion = (sth) => {
    setConnection(Connection.concat(sth));
  };
  const getContent_Type = (sth) => {
    setContent_Type(Content_Type.concat(sth));
  };
  const getBody = (sth) => {
    setBody(sth);
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
            <button className="StartFetch" onClick={() => SendReq()}>
              SEND
            </button>
          </span>
        </div>
      </div>
      <Frame
        Accepts={getAccepts}
        Connection={getConnetion}
        Content_Type={getContent_Type}
        Body={getBody}
      />
    </div>
  );
}
