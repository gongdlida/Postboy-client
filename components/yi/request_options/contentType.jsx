import React, { useState, useEffect } from "react";

function ContentType() {
  let content_Type_Beginner = [
    "Select",
    "--APPLICATION TYPE--",
    "application/json",
    "application/javascript",
    "application/pdf",
    "application/sql",
    "application/xml",
    "application/zip",
    "--AUDIO TYPE--",
    "audio/mpeg",
    "audio/ogg",
    "--FILE TYPE--",
    "image/gif",
    "image/jpeg",
    "image/png",
    "multipart/form-data",
    "---TEXT TYPE---",
    "text/css",
    "text/html",
    "text/plain",
    "text/xml",
  ];

  const [Accept, SetAccept] = useState([]);

  return (
    <label className="Header_option_box">
      Content-Type
      <select className="Option_btn">
        {content_Type_Beginner.map((el, idx) => {
          return (
            <option value={el} key={idx}>
              {el}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default ContentType;
