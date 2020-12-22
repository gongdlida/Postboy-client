import Link from 'next/link'

export default function Nav() {
    return (
     <div className='flex'>
         {/* flex-auto box-border h-12 w-10/12 border-2 border-gray-400 text-right */}
         <Link href={'/'}><a className='flex-auto'>Home</a></Link>
         <Link href={'/login'}><a className='flex-auto'>Login</a></Link>
         <Link href={'/logut'}><a className='flex-auto'>Logout</a></Link>
     </div>   
    )
}