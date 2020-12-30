import React, { useState, useEffect } from "react";
import request_header_options from "./optionList.jsx";
import Connection from "./request_options/connection";
import Accepts from "./request_options/accepts";
import ContentType from "./request_options/contentType";

let headerList = request_header_options.map((el, idx) => {
  return (
    <div key={idx}>
      <label className="Header_option_box">{el}</label>
    </div>
  );
});

function Frame(props) {
  let checkRes = () => {
    if (props.Res) {
      console.log(props.Res);
      return <div>Yes</div>;
    } else {
      return <div>No</div>;
    }
  };

  return (
    <div className="Header_Box">
      <div className="Request_Box">
        REQUEST
        <Accepts Accepts={props.Accepts} />
        <Connection Connection={props.Connection} />
        <ContentType ContentType={props.Content_Type} />
        <label className="Sub_Title">Body</label>
        <textarea
          className="Client_Body"
          textholder="write body"
          onChange={(body) => props.Body(JSON.stringify(body.target.value))}
        ></textarea>
      </div>

      <div className="Response_Box" style={{ display: "inline-block" }}>
        RESPONSE
        <div>{checkRes()}</div>
      </div>
    </div>
  );
}

export default Frame;

/*
response에 값이 들어왔을 때 
*/
