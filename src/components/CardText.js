import React from 'react'
import {UilArrowRight} from "@iconscout/react-unicons"

function CardText({text}) {
  return (
    <div>
        <div className={` 
        flex flex-col justify-items-center 
        p-6 lg:p-6 text-left text-sm md:text-lg`}>
            <p className='font-bold text-base md:text-lg'>
                Illustration
            </p>
            <p className='text-sm text-gray-400'>
                Assign Tasks more efficiently
            </p>
            <p className='
            my-card-text-transition 
            cursor-pointer
            flex content-center justify-items-center my-text-primary text-lg font-semi-bold pt-6'>
                <span className='my-auto mr-2'>Get on it</span>
                <div className='card-icon inline-block flex content-center justify-items-center my-1 my-transition'>
                    <UilArrowRight />
                </div>
            </p>
        </div>
    </div>
  )
}

export default CardText