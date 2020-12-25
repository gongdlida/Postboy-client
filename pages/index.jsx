import Nav from "../components/Nav";
import ReqHandler from "../components/reqhandler";
import Title from "../components/Title";
import Request from "../components/./yi/Request";
import Frame from "../components/./yi/massForm";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Title></Title>
      <ReqHandler />
      <Frame />
      <Request />
    </>
  );
}
