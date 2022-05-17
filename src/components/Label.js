import React from 'react'

function Label({text}) {
  return (
    <div>
        <div className="text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold flex text-white">
            <p className='mx-auto my-bg-blue py-2 px-4 rounded-3xl shadow-xl'>{text}</p>
        </div>
    </div>
  )
}

export default Label