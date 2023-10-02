import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'

export default function Archives() {
  return (
    <div>
      <Head>
        <title>Hunting Coders - Archives</title>
      </Head>
      <Navbar />
      <div className='container p-5'>
        <h2 className='text-3xl text-center'>Archives</h2>
        <br />
        <h3 className='text-xl'>These are the following links to refer for the Next.js Project:</h3>
        <div className='mt-12 flex flex-col gap-4 ml-4'>
          <h4><a href="https://nextjs.org/" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Next.js</a> - The web framework for frontend and backend development</h4>
          <h4><a href="https://nodejs.org/en" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Node.js</a> - The JS runtime environment</h4>
          <h4><a href="https://github.com/Aayush-1333" target='_blank' rel='noreferrer' className='hover:text-blue-500'>My GitHub Profile</a> - Check out my profile for more repos!</h4>
        </div>
      </div>
    </div>
  )
}
