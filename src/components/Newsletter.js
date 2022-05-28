import React from 'react'

function Newsletter() {
  return (
    <div className='my-bg-blue-lite'>
        <form className='flex flex-col gap-8 text-lg' onSubmit={submit}>
                <label htmlFor="name" className='flex flex-col gap-4'>
                    <span className="font-bold text-white">Your Name</span>
                    <input placeholder="Type your name" className="block w-full rounded-xl p-5" type="text" name="name" id="name" />
                </label>
            </form>
    </div>
  )
}

export default Newsletter