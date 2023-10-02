import React, { useState } from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import Link from 'next/link'

export default function Contacts() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        desc: ""
    })


    const SubmitForm = async (e) => {
        e.preventDefault()

        try {
            await fetch("http://localhost:3000/api/postcontacts", {
                method: "POST",
                body: JSON.stringify(formData)
            })
        } catch (err) {
            console.log(err)
        }
        alert("Contact uploaded!")
    }


    const OnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Head>
                <title>Hunting Coders - Contacts</title>
            </Head>
            <Navbar />
            <div className='container p-5 flex flex-col'>
                <h1 className='text-3xl font-semibold p-5 self-center'>Contact Form</h1>
                <form className='self-center flex flex-col gap-4 p-5' onSubmit={SubmitForm}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className='text-black rounded-lg p-1 w-96' value={formData.name} onChange={OnChange} required />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='self-start'>Email</label>
                        <input type="email" name='email' className='text-black rounded-lg p-1 w-96' value={formData.email} onChange={OnChange} required />

                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="phone" className='self-start'>Phone</label>
                        <input type="tel" name='phone' className='text-black rounded-lg p-1 w-96' value={formData.phone} onChange={OnChange} required />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="desc" className='self-start'>Description</label>
                        <input type="text" name='desc' className='text-black rounded-lg p-1 w-96' value={formData.desc} onChange={OnChange} required />
                    </div>

                    <div className='flex space-x-4 mt-4 justify-center'>
                        <button type='submit' className='bg-green-600 hover:bg-green-700 p-2 rounded-xl w-20'>Submit</button>
                        <Link href='/' className='text-center bg-red-600 hover:bg-red-700 p-2 rounded-xl w-20'>Back</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
