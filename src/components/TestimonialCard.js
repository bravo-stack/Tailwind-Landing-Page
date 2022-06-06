import React from 'react'

function TestimonialCard({image, message, name, position}) {
  return (
    <div className='xl:my-auto'>
        <li className='shadow-xl rounded-3xl flex flex-col gap-7 bg-white'>
            <div className='rounded-t-3xl pt-9'>
                <img src={image} alt="team member" className='mx-auto rounded-t-3xl' />
            </div>
            <div className='px-9 pb-9 flex flex-col gap-6'>
                <div className='text-xl'>
                    <p className='text-center'>
                        {message}
                    </p>
                </div>
                <div className='text-lg text-center'>
                    <p className='font-semibold text-xl'>
                        {name}
                    </p>
                    <p className='text-sm'>
                        {position}
                    </p>
                </div>
            </div>
        </li>
    </div>
  )
}

export default TestimonialCard