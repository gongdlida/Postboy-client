import React, { useState, useEffect } from "react";

function Accepts(props) {
  let user_Agent = ["Select", "POSTBOY"];
  let accept = ["Select", "*/*"];
  let accept_Encoding = ["Select", "gzip,deflate,br"];
  let accept_Language = ["Select", "utf-8"];

  const [UserAgent, SetUserAgent] = useState();
  const [Accept, SetAccept] = useState();
  const [AcceptEn, SetAcceptEn] = useState();
  const [AcceptLang, SetAcceptLang] = useState();

  useEffect(() => {
    // console.log("accepts에 있는 프랍스", props);
    console.log(props);
  });

  return (
    <>
      <label className="Header_option_box">
        User-Agent
        <select
          className="Option_btn"
          onChange={(e) => {
            SetUserAgent(e.target.value);
            props.Accepts(e.target.value);
          }}
        >
          {user_Agent.map((el, idx) => {
            return (
              <option value={el} key={idx}>
                {el}
              </option>
            );
          })}
        </select>
      </label>

      <label className="Header_option_box">
        Accept
        <select
          className="Option_btn"
          onChange={(e) => {
            SetAccept(e.target.value);
            props.Accepts(e.target.value);
          }}
        >
          {accept.map((el, idx) => {
            return (
              <option value={el} key={idx}>
                {el}
              </option>
            );
          })}
        </select>
      </label>

      <label className="Header_option_box">
        Accept-Language
        <select
          className="Option_btn"
          onChange={(e) => {
            SetAcceptEn(e.target.value);
            props.Accepts(e.target.value);
          }}
        >
          {accept_Language.map((el, idx) => {
            return (
              <option value={el} key={idx}>
                {el}
              </option>
            );
          })}
        </select>
      </label>

      <label className="Header_option_box">
        accept_Encoding
        <select
          className="Option_btn"
          onChange={(e) => {
            SetAcceptLang(e.target.value);
            props.Accepts(e.target.value);
          }}
        >
          {accept_Encoding.map((el, idx) => {
            return (
              <option value={el} key={idx}>
                {el}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}

export default Accepts;

/*
mass form 을 css로 우선 만들고 세부 css 디테일은 그 뒤에 적용.

1. 큰 폼을 먼저 만든다.
  1.1 request square 만들기
  1.2 response square 만들기

2. 중간 폼을 작성한다.
  2.1 request setting form 만들기
  2.2 reponse setting form 만들기

3. 디테일 폼을 작성한다.
  3.1 request header setting form 만들기

*/
