import React, { useState, useContext } from "react";
import Context from "../utils/context.js";
import Frame from "../components/frame";
const fetch = require("node-fetch");
import OrangeButton from "./OrangeButton";
const methods = ["SELECT", "GET", "POST"];
export default function ReqHandler() {
  const [history, setHistory] = useContext(Context).historyContext;
  const [method, setMethod] = useState(methods[0]);
  const [url, setUrl] = useState();
  const [Accepts, setAccepts] = useState([]);
  const [Connection, setConnection] = useState([]);
  const [Content_Type, setContent_Type] = useState([]);
  const [Body, setBody] = useState([]);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

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
  };

  let SendReq = async () => {
    try {
      if (requestOptions.method === "POST") {
        requestOptions.body = Body;
      }
      let response = await fetch(url, requestOptions);
      let storage = [];
      storage.push(response.url);
      storage.push(method);
      for (var pair of response.headers.entries()) {
        storage.push(pair[1]);
      }
      setResponse(
        storage.concat(
          response.url,
          method,
          `${response.status} ${response.statusText}`
          // response.text()
        )
      );

      setHistory((pastHistory) => [
        ...pastHistory,
        {
          url: url,
          methodType: method,
          status: response.status,
          statusText: response.statusText,
        },
      ]);
    } catch (err) {
      setError("Error" + err.message);
    }
  };
  const getAccepts = (option) => {
    setAccepts(Accepts.concat(option));
  };
  const getConnetion = (option) => {
    setConnection(Connection.concat(option));
  };
  const getContent_Type = (option) => {
    setContent_Type(Content_Type.concat(option));
  };
  const getBody = (text) => {
    setBody(text);
  };

  return (
    <footer>
      <section>
        <div className="send SelectBar">
          <select
            className="bg-orange-400 px-2 py-1 text-sm font-medium text-white"
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
            className="flex-1 bg-orange-50 rounded focus:ring-0 border-2 border-transparent focus:border-orange-400"
            placeholder="Fill URL here :)"
            onChange={(url) => setUrl(url.target.value)}
          ></textarea>
          <OrangeButton className="StartFetch" onClick={() => SendReq()}>
            SEND
          </OrangeButton>
        </div>
      </section>
      <Frame
        Accepts={getAccepts}
        Connection={getConnetion}
        Content_Type={getContent_Type}
        Body={getBody}
        response={response}
        err={error}
      />
    </footer>
  );
}
