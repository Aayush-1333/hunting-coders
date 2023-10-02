import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex p-5 bg-gradient-to-br from-black to-blue-500'>
            <div className='flex self-center md:ml-24 grow justify-center gap-8'>
                <Link href="/" className='hover:underline underline-offset-8'>Home</Link>
                <Link href="/blogs" className='hover:underline underline-offset-8'>Blogs</Link>
                <Link href="/archives" className='hover:underline underline-offset-8'>Archives</Link>
                <Link href="/about" className='hover:underline underline-offset-8'>About</Link>
                <Link href="/contacts" className='hover:underline underline-offset-8'>Contacts</Link>
            </div>

            <form>
                <input className='mx-4 rounded-xl text-black px-1 border-2 border-black' type="text" name="search" />
                <button className='bg-green-500 hover:bg-green-700 p-1 rounded-xl'>Search</button>
            </form>
        </nav>
    )
}
