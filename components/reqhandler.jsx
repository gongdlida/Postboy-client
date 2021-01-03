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
  const [response, setResponse] = useState("");

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
      let request = await fetch(
        'http://localhost:4000/messages',
        requestOptions
      );
      let storage = [];
      storage.push(method);
      storage.push(request);
      for (var pair of request.headers.entries()) {
        console.log(pair[0] + ":" + pair[1]);
        storage.push(pair[1]);
      }
      setResponse(
        storage.concat(
          request.url,
          method,
          `${request.status} ${request.statusText}`
        )
      );
      console.log("response안에 들어있는 것.", response);
      // console.log(request);
      console.log("This form will be into the Response box", {
        URL: `${request.url}`,
        Method: method,
        "Status Code": `${request.status} ${request.statusText}`,
        "Content-Length": response[0],
        "Content-Type": response[1],
        Body: JSON.parse(Body),
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
        response={response}
      />
    </footer>
  );
}
