import { useState } from "react";
import Context from "../utils/context.js";
<<<<<<< HEAD
import "../components/yi/yi.css";
import "../components/Title.css";
import "../components/Nav.css";
import "../components/reqhandler.css"
=======
import "../styles/yi.css";
import "../styles/Title.css";
import "../styles/Nav.css";
>>>>>>> 59b88bb49c3c7fa21311efd6409c645b21340dff

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
