import React from 'react'

function DemoForm() {
    return (
        <div className='mt-10'>
            <form className='flex flex-col gap-6 text-lg'>
                <label htmlFor="name" className='flex flex-col gap-6'>
                    <span className="font-bold text-white">Your Name</span>
                    <input placeholder="Type your name" className="block w-full rounded-xl p-5" type="text" name="name" id="name" />
                </label>
                
                <label htmlFor="name" className='flex flex-col gap-6'>
                    <span className="font-bold text-white">Email Address</span>
                    <input placeholder="Enter your email" className="block w-full rounded-xl p-5" type="email" name="name" id="name" />
                </label>


            </form>
        </div>
    )
}

export default DemoForm