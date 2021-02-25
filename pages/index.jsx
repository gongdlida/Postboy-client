import Title from "../components/Title";
import ReqHandler from "../components/reqhandler";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  return (
    <>
      <Title></Title>
      <ReqHandler />

    </>
  );
}
