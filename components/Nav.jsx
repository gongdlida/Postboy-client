import Link from 'next/link'

export default function Nav() {
    return (
     <div className='flex'>
         <Link href={'/'}><a className='flex-auto'>Home</a></Link>
         <Link href={'/login'}><a className='flex-auto'>Login</a></Link>
         <Link href={'/logut'}><a className='flex-auto'>Logout</a></Link>
     </div>   
    )
}