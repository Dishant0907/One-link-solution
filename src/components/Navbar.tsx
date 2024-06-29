import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {SignedIn ,UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed flex-between w-full px-4 md:px-10 py-6 backdrop-blur-lg lg:px-10 z-50  bg-black/10 '>
        <Link href="/home" className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-black max-sm:hidden">
          OneLink
        </p>
      </Link>

     <div className='flex'> 
     <Link className='mx-2 text-green-700 mt-2   '  href='/home'>Home</Link>
      <Link className='mx-2 mt-2 text-green-700    ' href='/preview'>Preview</Link>
      <Link className='mx-2 mt-2 text-green-700    ' href='/analytics'>Analytics</Link>

     </div>

     <SignedIn>
          <UserButton  afterSignOutUrl="/sign-in" />
        </SignedIn>


    </nav>
  )
}

export default Navbar