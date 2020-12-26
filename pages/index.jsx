import ReqHandler from "../components/reqhandler";
import Title from "../components/Title";
import Request from "../components/./yi/Request";
import Frame from "../components/./yi/massForm";
import ModalRouter from '../components/Modalrouter'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
  const router = useRouter()

  return (
    <>
      {['signin', 'signup', 'signout', 'mypage', 'nav'].map((item) => <ModalRouter id={item}/>)}
      <Link href={'/?id=nav'}><a>Hamburger</a></Link>
      <Title></Title>
      <ReqHandler />
      <Frame />
      <Request />
    </>
  );
}