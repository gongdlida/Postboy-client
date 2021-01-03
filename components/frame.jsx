import React, { useState, useEffect } from "react";

import RequestOptions from "./requestOptions";

function Frame(props) {
  // const [resBody, setResBody] = useState();

  console.log(props.resBody);

  let resList = [
    "Url",
    "Method",
    "Status Code",
    "Connection",
    "Content-Length",
    "Content-Type",
  ];

  let resListUp = resList.map((el, idx) => {
    return (
      <div key={idx}>
        <label className="Header_option_box">{el}</label>
      </div>
    );
  });

  let resListValues = () => {
    if (props.response) {
      return props.response.map((el, idx) => {
        return (
          <div className="Values">
            <div key={idx}>{el}</div>
          </div>
        );
      });
    }
  };

  return (
    <div className="Header_Box">
      <div className="Request_Box">
        REQUEST
        <textarea
          className="p-16 w-full bg-orange-50 rounded focus:ring-0 border-2 border-transparent focus:border-orange-500 mb-2 resize-none"
          placeholder="{key1: value1, key2: value2}"
          onChange={(body) => props.Body(body.target.value)}
        ></textarea>
        <RequestOptions
          Accepts={props.Accepts}
          Connection={props.Connection}
          ContentType={props.Content_Type}
        />
      </div>
      <div className="Response_Box">
        RESPONSE
        <textarea
          className="p-16 w-full bg-orange-50 rounded focus:ring-0 border-2 border-transparent focus:border-orange-500 mb-6 resize-none"
          placeholder="No Response Yet..."
          value={props.resBody}
        ></textarea>
        <div>
          {resListUp} {resListValues()}
        </div>
      </div>
    </div>
  );
}

export default Frame;
