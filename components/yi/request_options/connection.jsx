import React, { useState, useEffect } from "react";

function Connection(props) {
  let connection = ["Select", "keep-alive", "close"];
  const [Connect, SetConnect] = useState([]);

  return (
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
  );
}

export default Connection;

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
