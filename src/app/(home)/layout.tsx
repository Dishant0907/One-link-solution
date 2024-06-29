import Navbar from '@/components/Navbar'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <main className='relative'>
        <Navbar/> 
        <section className='relative  '>
      





          
           {children}


            </section>
        
    </main>
  )
}

export default HomeLayout