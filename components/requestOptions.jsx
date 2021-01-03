import React, { useState, useEffect } from "react";

function RequestOptions(props) {
  let user_Agent = ["POSTBOY"];
  let accept = ["*/*"];
  let accept_Encoding = ["gzip,deflate,br"];
  let accept_Language = ["utf-8"];
  let connection = ["keep-alive", "close"];
  let content_Type_Beginner = [
    "Select",
    "application/json",
    "application/javascript",
    "application/pdf",
    "application/sql",
    "application/xml",
    "application/zip",
    "audio/mpeg",
    "audio/ogg",
    "image/gif",
    "image/jpeg",
    "image/png",
    "multipart/form-data",
    "text/css",
    "text/html",
    "text/plain",
    "text/xml",
  ];

  const [Content, SetContent] = useState([]);
  const [Connect, SetConnect] = useState([]);
  const [UserAgent, SetUserAgent] = useState();
  const [Accept, SetAccept] = useState();
  const [AcceptEn, SetAcceptEn] = useState();
  const [AcceptLang, SetAcceptLang] = useState();

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
        Accept_Language
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
        Accept_Encoding
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
      <label className="Header_option_box">
        Connection
        <select
          className="Option_btn"
          onChange={(e) => {
            SetConnect(e.target.value);
            props.Connection(e.target.value);
          }}
        >
          {connection.map((el, idx) => {
            return (
              <option value={el} key={idx}>
                {el}
              </option>
            );
          })}
        </select>
      </label>
      <label className="Header_option_box">
        Content-Type
        <select
          className="Option_btn"
          onChange={(e) => {
            SetContent(e.target.value);
            props.ContentType(e.target.value);
          }}
        >
          {content_Type_Beginner.map((el, idx) => {
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

export default RequestOptions;

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
