import React, { useEffect, useState } from "react";
import axios from "axios";
const fetch = require("node-fetch");
import Frame from "../components/./yi/frame";

const methods = ["GET", "POST"];

export default function ReqHandler() {
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  const [Accepts, setAccepts] = useState([]);
  const [Connection, setConnection] = useState([]);
  const [Content_Type, setContent_Type] = useState([]);
  const [Body, setBody] = useState([]);
  const [Res, setRes] = useState();

  const headers = new Headers();
  headers.append("Content-Type", Content_Type[0]);
  headers.append("User-Agent", Accepts[0]);
  headers.append("Accept", Accepts[1]);
  headers.append("Accept-Language", Accepts[2]);
  headers.append("Accept-Encoding", Accepts[3]);
  headers.append("Connection", Connection[0]);

  let requestOptions = {
    method: method,
    headers: headers,
    body: Body.sth,
    // body: JSON.stringify({
    //   username: "추워",
    //   text: "손이 꽁꽁꽁",
    //   roomname: "발이꽁꽁꽁",
    // }),
  };

  let SendReq = async () => {
    try {
      let req = await fetch(url, requestOptions);
      console.log(Body);
      // .then((result) => console.log(result))
      // .catch((error) => console.log("error", error));
      // let data = await req;

      req.headers.forEach((value, name) => {
        //   setRes(name + ":" + value);
        console.log(name + ":" + value);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // let SendReq = async () => {
  //   try {
  //     let res = await axios({
  //       method: method,
  //       url: url,
  //       data: Body,
  //       headers: request.headers,
  //     }).then((data) => {
  //       setRes(data);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
    setBody({ sth });
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
        Res={Res}
      />
    </div>
  );
}
