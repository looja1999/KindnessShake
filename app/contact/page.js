import React from 'react'

const page = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            {/* Contact Us */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'> Contact Us </h1>
                <div className="col-span-1 h-100 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
                    <div className='flex gap-3 items-center justify-evenly'>
                        <div className='flex flex-col gap-2 w-full' >
                            <div className='flex gap-3 items-center'><h2 className='text-sm'>To : </h2> <input className='border border-gray-300 rounded-md w-96 text-sm py-1 px-2' value="Kindness Shake Team" disabled /></div>
                            <div className='flex gap-3 items-center'><h2 className='text-sm'>From : </h2> <input placeholder='john.citizen@xyz.com' className=' border border-gray-300 rounded-md w-96 text-sm py-1 px-2' /></div>
                            <div className='flex gap-3 items-center'><h2 className='text-sm'>Subject : </h2> <input placeholder='I want to join volunteering team ... 💌' className=' border border-gray-300 rounded-md w-96 text-sm py-1 px-2' /></div>
                        </div>
                    </div>
                    <textarea placeholder='<h1>Hello World</h1>' className='w-full h-full bg-gray-100 rounded-lg text-sm p-3' rows={10} />
                    <div className='w-full flex justify-end'>
                        <button className='p-2 bg-indigo-500 text-white rounded-full min-w-[100px] hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page