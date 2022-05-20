import React from 'react'
import Label from './Label'
import Rating from './Rating'

function Stats() {
  return (
    <div>
        <section>

            {/* label container */}
            <div className='mt-16'>
                <Label text="Users Stats" />
            </div>

            {/* entire rating container */}
            <div className='flex flex-col xl:flex-row mb-16 mt-9'>

                {/* "trusted by customer" container */}
                <div className='xl:w-1/3 lg:my-auto'>
                    <p className='my-text-primary text-center xl:text-left text-4xl font-medium md:font-semibold lg:font-bold mb-6'>
                        Trusted by 35,000+ happy customers.
                    </p>
                    <p className='text-gray-600 text-center lg:text-justify xl:text-justify'>
                        With lots of unique blocks, you can easily ship that product, and track it's perfomance, efficiently.
                        Build your next website within few minutes.
                    </p>
                </div>

                {/* StatCard container */}
                <div className='flex flex-col gap-5 mt-12 xl:mt-0 md:flex-row lg:flex-row xl:ml-auto'>

                    {/* Stat card1 */}
                    <div className='p-10 shadow-xl statcard-size rounded-3xl my-bg-blue2 lg:w-full w-full xl:w-auto xl:w-80 mx-auto'>
                        <p className='text-6xl font-extrabold text-white'>
                            21k
                        </p>
                        <p className='leading-relaxed mt-9 text-lg text-white'>
                            Active users visiting <br/>us every month!
                        </p>
                    </div>

                    {/* Statcard 2 */}
                    <div className='p-10 shadow-xl statcard-size rounded-3xl my-bg-blue3 lg:w-full w-full xl:w-auto xl:w-80 mx-auto'>
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
            </div>
        </section>
        
    </div>
  )
}

export default Stats