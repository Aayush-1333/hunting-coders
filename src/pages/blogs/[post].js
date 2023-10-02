import Head from "next/head";
import Link from "next/link";

export default function BlogPost(props) {
    const fetchedBlog = props.blogData

    return (
        <div className="p-5">
            <Head>
                <title>Hunting Coders - BlogPost</title>
            </Head>
            {Object.keys(fetchedBlog).length == 0 ? <p>Blog not found!</p> : <div className="container flex flex-col mt-10 content-center gap-4">
                <div className="flex justify-between">
                    <Link href={`/blogs#${fetchedBlog.title}`} className="hover:underline underline-offset-8">&lt; Blogs</Link>
                    <h1 className="text-3xl underline text-center self-start grow mr-14">{fetchedBlog.title}</h1>
                </div>
                <h3 className="text-sm italic text-center">By {fetchedBlog.author}</h3>
                <div className="self-center" style={{ width: "1000px" }}>
                    <p className="w-auto break-words">{fetchedBlog.content}</p>
                </div>
            </div>}
            <br />
        </div>
    )
}


/**
 * This is server-side rendering to fetch the blog from the request query 
 */
export async function getServerSideProps(context) {
    const { post } = context.query
    const response = await fetch(`http://localhost:3000/api/blogs/get-blog?=${post}`)
    let blogData = {}

    if (response.ok)
        blogData = await response.json()
    else
        console.log("couldn't fetch")

    return { props: { blogData } }
}
