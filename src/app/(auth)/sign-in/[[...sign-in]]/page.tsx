import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='font-sans flex h-screen w-full items-center justify-center'>
        <SignIn/>
        
    </main>
  )
}

export default SignInPage