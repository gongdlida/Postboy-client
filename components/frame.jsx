import React, { useState, useEffect } from "react";

import RequestOptions from "./requestOptions";

function Frame(props) {
  let asd = () => {
    if (props.Res) {
      console.log("test1", props.Res);
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

  // let resListUp = resList.map((el, idx) => {
  //   if (props.response) {
  //     console.log("frame", props.response);
  //   }
  //   return (
  //     <div key={idx}>
  //       <label className="Header_option_box">{el}</label>
  //     </div>
  //   );
  // });

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
  console.log(props.response[7]);
  return (
    <div className="Header_Box">      
      <div className="Request_Box">
        REQUEST             
        <textarea
          className="p-16 w-full bg-orange-50 rounded focus:ring-0 border-2 border-transparent focus:border-orange-500 mb-2 resize-none"
          placeholder="{username: , text: , roomname}"
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
          value={props.response[7]}
        ></textarea>
        {/* <div>{resListUp}</div> */}
        <div>{asd()}</div>
      </div>
    </div>
  );
}

export default Frame;
