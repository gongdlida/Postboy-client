import React, { useState } from "react";
import axios from "axios";
import Frame from "../components/./yi/frame";
import { rule } from "postcss";
const methods = ["GET", "POST"];

export default function ReqHandler() {
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  const [Accepts, setAccepts] = useState([]);
  const [Connection, setConnection] = useState([]);
  const [Content_Type, setContent_Type] = useState([]);
  const [Body, setBody] = useState([]);

  let request = {
    headers: {
      "User-Agent": Accepts[0],
      Accept: Accepts[1],
      "Accept-Language": Accepts[2],
      "Accept-Encoding": Accepts[3],
      Connection: Connection[0],
      "Content-Type": Content_Type[0],
      // redirect: "follow",
      withCredentials: true,
    },
  };

  let SendReq = async () => {
    try {
      let res = await axios({
        method: method,
        url: url,
        data: Body,
        headers: request.headers,
      });
      let resHeader = res;
      console.log("Hi Response~", resHeader);
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
      />
    </footer>
  );
}
