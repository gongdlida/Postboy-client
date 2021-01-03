import React, { useState, useEffect } from "react";

import RequestOptions from "./requestOptions";

function Frame(props) {
  let asd = () => {
    if (props.Res) {
      console.log("test1", props.Res);
      console.log("test1", props.Res[0]);
      console.log("test2", props.Res[1]);
      console.log("test3", props.Res[2]);
    } else {
    }
  };

  let resList = [
    "Url",
    "Method",
    "Status Code",
    "Connection",
    "Content-Length",
    "Content-Type",
  ];

  let resListUp = resList.map((el, idx) => {
    if (props.response) {
      console.log("frame", props.response);
    }
    return (
      <div key={idx}>
        <label className="Header_option_box">{el}</label>
      </div>
    );
  });

  // let resListUp =() => {
  //   if (props.response) {
  //     props.response.map((el,idx)=>{
  //     <div key ={idx}></div>
  //   })
  //   }
  //   return (
  //     <div key={idx}>
  //       <label className="Header_option_box">{el}</label>
  //     </div>
  //   );
  // });

  return (
    <div className="Header_Box">
      <div className="History_Box">History</div>
      <div className="Request_Box">
        REQUEST
        <RequestOptions
          Accepts={props.Accepts}
          Connection={props.Connection}
          ContentType={props.Content_Type}
        />
        <label className="Sub_Title">Body</label>
        <textarea
          className="Client_Body"
          textholder="write body"
          onChange={(body) => props.Body(body.target.value)}
        ></textarea>
      </div>
      <div className="Response_Box">
        RESPONSE
        <div>{resListUp}</div>
        <div>{asd()}</div>
      </div>
    </div>
  );
}

export default Frame;
