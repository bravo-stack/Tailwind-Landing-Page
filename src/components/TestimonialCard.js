import React from 'react'

function TestimonialCard({img}) {
  return (
    <div>
        <div className='shadow-xl rounded-3xl p-9 flex flex-col gap-7 bg-white'>
            <div>
                <img src={img} alt="team member" className='mx-auto' />
            </div>
            <div className='text-xl'>
                <p className='text-center'>
                    “You made it so simple. My new site is so much faster and easier to work with than my old site.”
                </p>
            </div>
            <div className='text-lg text-center'>
                <p className='font-semibold text-xl'>
                    Alan Farmer
                </p>
                <p className='text-sm'>
                    Digital Marketer
                </p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard