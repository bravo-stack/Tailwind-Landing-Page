import React from 'react'
import {UilArrowRight} from "@iconscout/react-unicons"
import { Link } from 'react-router-dom'

function CardText({name, title}) {
  return (
    <div>
        <div className={` 
        flex flex-col justify-items-center 
        p-6 lg:p-6 text-left text-sm md:text-lg`}>
            <p className='my-transition font-bold text-lg md:text-lg lg:text-xl pb-1 card-header'>
                {name}
            </p>
            <p className='text-sm text-gray-400 mb-6'>
                {title}
            </p>
            <Link to="/services">
                <div className='
                my-view-more
                cursor-pointer
                flex 
                mt-auto
                content-center 
                justify-items-center 
                my-text-primary 
                text-lg 
                font-semi-bold'>
                    <span className='my-auto mr-2 my-transition'>Learn More</span>
                    <div className='card-icon inline-block flex content-center justify-items-center my-1 my-transition'>
                        <UilArrowRight />
                    </div>
                </div>
            
            </Link>
        </div>
    </div>
  )
}

export default CardText