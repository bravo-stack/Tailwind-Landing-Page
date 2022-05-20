import React from 'react'
import Label from './Label'
import Rating from './Rating'

function Stats() {
  return (
    <div>
        <section>
            <div className='mt-16'>
                <Label text="Stats" />
            </div>
            <div className='mb-9 mt-9 text-center'>
                <p className='my-text-primary text-3xl font-bold mb-5'>
                    Trusted by 35,000+ happy customers.
                </p>
                <p className='text-gray-600'>
                    With lots of unique blocks, you can easily build a page without coding.
                    Build your next website within few minutes.
                </p>
            </div>
            <div>
                <div className='p-10 statcard-size rounded-3xl my-bg-blue2 m-2'>
                    <p className='text-6xl font-extrabold text-white'>
                        21k
                    </p>
                    <p className='leading-relaxed mt-9 text-lg text-white'>
                        Active users visiting <br/>us every month!
                    </p>
                </div>
                <div className='p-10 statcard-size rounded-3xl my-bg-blue3 m-2'>
                    <p className='text-6xl font-extrabold text-white'>
                        4.8
                    </p>
                    <div className=' mt-9'>
                        <Rating />
                    </div>
                    <p className='leading-relaxed mt-3 text-lg text-white'>
                        2,378 Rating
                    </p>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Stats