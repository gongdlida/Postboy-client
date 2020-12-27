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
          onChange={(body) => props.Body(body.target.value)}
        ></textarea>
      </div>

      <div className="Response_Box">
        RESPONSE
        <div>{headerList}</div>
      </div>
    </div>
  );
}

export default Frame;

/*
mass form 을 css로 우선 만들고 세부 css 디테일은 그 뒤에 적용.

1. 큰 폼을 먼저 만든다.
  1.1 request square 만들기 v
  1.2 response square 만들기 v

2. 중간 폼을 작성한다.
  2.1 request setting form 만들기
  2.2 reponse setting form 만들기

3. 디테일 폼을 작성한다.
  3.1 request header setting form 만들기

*/
