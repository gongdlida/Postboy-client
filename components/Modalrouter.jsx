import { useRouter } from 'next/router'
import React from 'react'
import Modal from 'react-modal'
import Signin from './Signin'
import Signout from './Signout'
import Signup from './Signup'
import Mypage from './Mypage'
import Nav from './Nav'

export default function ModalRouter({id}) {
    const router = useRouter()
    const components = {signin: Signin, signout: Signout, signup: Signup, mypage: Mypage, nav: Nav}

    return (
      <Modal className="Navbar_UI"isOpen={router.query.id === id}
        onRequestClose={() => router.push('/')}
        contentLabel={id}>
          {React.createElement(components[id], {})}
        </Modal>
    )
  }