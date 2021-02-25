import { useState } from "react";
import Context from "../utils/context.js";
import "../styles/yi.css";
import "../styles/Title.css";
import "../styles/Nav.css";
import "../globals.css";

// msw
if (process.env.NODE_ENV === "development") {
  const { worker } = require("../mocks");
}

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    isLogin: false,
    username: "",
  });
  const [history, setHistory] = useState([]);
  return (
    <Context.Provider
      value={{
        userContext: [user, setUser],
        historyContext: [history, setHistory],
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
