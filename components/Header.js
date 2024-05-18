import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-black flex justify-between'>
      <span><img src="https://thumbs.dreamstime.com/b/ngo-letter-logo-design-black-background-ngo-creative-initials-letter-logo-concept-ngo-letter-design-ngo-letter-logo-design-249418889.jpg" width={100}/></span>
      
      {/* logo section  */}


      {/* <ul className='text-white flex gap-5 pt-10'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}
      <div className='p-9'>
        <Link href={"/login"}>
          <button type="button" class="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-600/60 transition-shadow duration-300">Login</button>
        </Link>
      </div>

    </div>
  )
}

export default Header
