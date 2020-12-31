import React, { useEffect, useState } from "react";
const fetch = require("node-fetch");
import Frame from "../components/./yi/frame";

const methods = ["SELECT", "GET", "POST"];

export default function ReqHandler() {
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  const [Accepts, setAccepts] = useState([]);
  const [Connection, setConnection] = useState([]);
  const [Content_Type, setContent_Type] = useState([]);
  const [Body, setBody] = useState([]);
  const [Res, setRes] = useState("");

  const headers = new Headers();
  headers.append("Content-Type", Content_Type[Content_Type.length - 1]);
  headers.append("User-Agent", Accepts[0]);
  headers.append("Accept", Accepts[1]);
  headers.append("Accept-Language", Accepts[2]);
  headers.append("Accept-Encoding", Accepts[3]);
  headers.append("Connection", Connection[Connection.length - 1]);

  let requestOptions = {
    method: method,
    headers: headers,
    body: Body,
  };

  let SendReq = async () => {
    try {
      let req = await fetch("http://localhost:4000/messages", requestOptions);
      let resHeader = await req;
      let storage = [];
      storage.push(method);
      storage.push(resHeader);
      for (var pair of req.headers.entries()) {
        storage.push(pair[0] + ": " + pair[1]);
      }
      setRes(storage);
      console.log("res", Res);
    } catch (err) {
      console.log(err);
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
    <footer>
      <section>
        <div className="send SelectBar">
          <select
            className="send Select_menu"
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
            className="send SendText"
            placeholder="Fill URL here :)"
            onChange={(url) => setUrl(url.target.value)}
          ></textarea>
          <button className="StartFetch" onClick={() => SendReq()}>
            SEND
          </button>
        </div>
      </section>
      <Frame
        Accepts={getAccepts}
        Connection={getConnetion}
        Content_Type={getContent_Type}
        Body={getBody}
        Res={Res}
      />
    </footer>
  );
}
