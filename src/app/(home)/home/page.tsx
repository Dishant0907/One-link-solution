import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { Button } from '@/components/ui/button';
import LinkTable from '@/components/LinkTable';
import AddDialog from '@/components/AddDialog';
import PreviewPanel from '@/components/Preview';
import Link from 'next/link';

const Home = async () => {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  return (
    <div className="flex">
      <section className='bg-green-200 pt-[6rem] min-h-screen h-[89rem] text-emerald-700 flex-grow overflow-y-auto'>
        <h1 className='text-5xl md:text-7xl md:ml-12 m-3 ml-4'>Hello, {user?.username}...</h1>
       
        <Link  href={'#linktable'}> hello</Link>
        {/* <AddDialog /> */}
        <div className='flex justify-between'>
          <LinkTable />
        </div>
      </section>
      <section className='w-1/3 bg-green-200 sticky  top-0 h-screen '>

        <PreviewPanel />
      </section>
    </div>
  )
}

export default Home