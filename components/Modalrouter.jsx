import { useRouter } from "next/router";
import React from "react";
import Modal from "react-modal";
import Signin from "./Signin";
import Signout from "./Signout";
import Signup from "./Signup";
import Mypage from "./Mypage";

const customStyles = {
  content: {
    width: "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalRouter({ id }) {
  const router = useRouter();
  const components = {
    signin: Signin,
    signout: Signout,
    signup: Signup,
    mypage: Mypage,
  };

  return (
    <Modal
      isOpen={router.query.id === id}
      onRequestClose={() => router.push("/")}
      contentLabel={String(id)}
      style={customStyles}
    >
      {React.createElement(components[id], {})}
    </Modal>
  );
}
