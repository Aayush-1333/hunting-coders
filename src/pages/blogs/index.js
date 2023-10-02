import React from 'react'
import Navbar from '../navbar'
import Head from 'next/head'
import Link from 'next/link'


export default function Blogs(props) {

    // State variables
    const blogData = props.allBlogs

    return (
        <div>
            <Head><title>Hunting Coders - Blogs</title></Head>
            <Navbar />

            <div className='flex flex-col p-10 flex-wrap content-center gap-4'>
                <h2 className='text-3xl underline underline-offset-4'>Recent Blogs</h2>
                {blogData === undefined ? "No Results" : Array.from(blogData).map((blogpost => {
                    return <div key={blogpost.author} id={blogpost.title} className='p-5 rounded-xl'>
                        <h2 className='text-2xl mb-4 font-bold'>{blogpost.title}</h2>
                        <h3 className='text-sm italic'>{blogpost.author}</h3>
                        <br />
                        <p className='w-max break-words'>{blogpost.content.slice(0, 75)}...<Link className='text-orange-400 hover:text-orange-600' href={`/blogs/${blogpost.title}`}>Know more</Link></p>
                        <hr className='mt-4' />
                    </div>
                }))}
            </div>
        </div>
    )
}


/* 
    This is a type of pre-rendering
    Server side rendering - returns the props object with all the blogs
    This means running the JS on `client request` to fetch blog data on the server side rather than on the client side
    So, that we can populate the fetched data on the webapp in the form of HTML content
*/
export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/blogs/get-all-blogs")
    let allBlogs

    if (response.ok)
        allBlogs = await response.json()

    return { props: { allBlogs } }
}
