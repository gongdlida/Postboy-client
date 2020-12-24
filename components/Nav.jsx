import Link from 'next/link'
import { useContext } from 'react'
import Context from '../utils/context.js'

export default function Nav() {
    const [user, setUser] = useContext(Context).userContext

    return (
     <div className='flex'>
         {/* flex-auto box-border h-12 w-10/12 border-2 border-gray-400 text-right */}
         <Link href={'/'}><a className='flex-auto'>Home</a></Link>
         <Link href={'/signin'}><a className='flex-auto'>Signin</a></Link>
         <Link href={'/signup'}><a className='flex-auto'>Signup</a></Link>
         <Link href={'/signout'}><a className='flex-auto'>Signout</a></Link>
         <Link href={'/mypage'}><a className='flex-auto'>Mypage</a></Link>
         <p>{user.isLogin ? `Hi ${user.username}` : ''}</p>
     </div>  
    )
}