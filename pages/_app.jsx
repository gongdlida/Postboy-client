<<<<<<< HEAD
import { useState } from 'react'
import Context from '../utils/context.js'
=======
import "../components/SendMessage.css";
import "../components/Title.css"
import "../components/Nav.css"
>>>>>>> f096d9b... test

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks')
}

function MyApp({ Component, pageProps  }) {
  const [user, setUser] = useState({
    isLogin: false,
    username: ''
  })
  const [history, setHistory] = useState([])
  return (
     <Context.Provider value={{
       userContext: [user, setUser],
       historyContext: [history, setHistory]
     }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp