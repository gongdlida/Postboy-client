import React, { useState, useEffect } from "react";
import Connection from "./request_options/connection";
function Request() {
  const [Accept, SetAccept] = useState([]);

  let options = ["Select", "keep-alive", "close"];

  // let insertOptions = () => {
  //   options.map((el, idx) => {
  //     return (
  //       <option value="Connection" key={idx}>
  //         {el}
  //       </option>
  //     );
  //   });
  // };

  return <></>;
}

export default Request;
