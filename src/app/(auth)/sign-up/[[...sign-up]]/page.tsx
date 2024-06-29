import React from 'react'
import { SignIn, SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className=' font-sans bg-blue-100 flex h-screen w-full items-center justify-center'>
        <SignUp/>
        
    </main>
  )
}

export default SignUpPage