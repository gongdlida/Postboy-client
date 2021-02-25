import Link from "next/link";
import Context from "../utils/context.js";
import { useContext } from "react";
import ModalRouter from "./Modalrouter";
import OrangeButton from "./OrangeButton";

// import OrangeMenu from "./OrangeMenu.jsx";

import OrangeMenu from "./OrangeMenu.jsx";
import ResponseStatus from "./ResponseStatus";

export default function Title() {
  const [user, setUser] = useContext(Context).userContext;
  const [history, setHistory] = useContext(Context).historyContext;
  const latest = history[history.length - 1];

  return (
    <header className="flex justify-between px-4 py-4 items-center">
      {["signin", "signup", "signout", "mypage"].map((item, idx) => (
        <ModalRouter key={idx} id={item} />
      ))}
      <div className="flex">
        <img
          className="h-6 w-6"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Feapf5u%2FbtqRghRXLex%2FRqTKOCPkkkKPiAKw48IJLk%2Fimg.png"
        ></img>
        <h1 className="text-md font-medium text-orange-900 px-2">Postboy</h1>
      </div>
      <div className="flex items-center">
        <ResponseStatus responseData={latest}></ResponseStatus>
        {user.isLogin ? (
          <OrangeMenu
            username={user.username}
            history={history}
            setHistory={setHistory}
          >
            History
          </OrangeMenu>
        ) : (
          <OrangeButton>
            <Link href={"/?id=signup"}>
              <a className="">Sign up</a>
            </Link>
          </OrangeButton>
        )}
        {user.isLogin ? (
          <OrangeButton>
            <Link href={"/?id=signout"}>
              <a className="">Log out</a>
            </Link>
          </OrangeButton>
        ) : (
          <OrangeButton>
            <Link href={"/?id=signin"}>
              <a className="">Log in</a>
            </Link>
          </OrangeButton>
        )}
      </div>
    </header>
  );
}
