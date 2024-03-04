import React from 'react'
import HeroImage from '@/public/HeroImage.jpg';
import Image from 'next/image';

const page = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            <div className='flex my-10 h-[600px] gap-12'>
                {/* Hero  */}
                <div className="mx-auto rounded-lg flex relative flex-1 h-full">
                    <Image src={HeroImage} width={"100%"} height={"100%"} className="object-cover rounded-3xl" />
                </div>
                <div className='flex-1 flex flex-col gap-2'>
                    <h1 className='text-2xl text-center font-bold'>Join us now</h1>
                    <p className='text-center text-gray-500 text-sm'>Get exclusive access to Accomodations, Jobs, & Networks</p>
                    <form className='text-xs w-[400px] mx-auto mt-2 bg-gray-50 p-4 rounded-md flex flex-col gap-4'>
                        <label className='flex flex-col gap-2'>
                            Name
                            <input className='p-1.5 border border-gray-200 rounded-md' />
                        </label>
                        <label className='flex flex-col gap-2'>
                            Email
                            <input className='p-1.5 border border-gray-200 rounded-md' />
                        </label>
                        <label className='flex flex-col gap-2'>
                            University
                            <input className='p-1.5 border border-gray-200 rounded-md' />
                        </label>
                        <label className='flex flex-col gap-2'>
                            Interests
                            <input className='p-1.5 border border-gray-200 rounded-md' />
                        </label>
                        <label className='flex flex-col gap-2'>
                            Test
                            <input className='p-1.5 border border-gray-200 rounded-md' />
                        </label>
                        <button className='bg-indigo-500 rounded-md text-white p-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default page