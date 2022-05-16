import React from 'react'
import {UilArrowRight} from "@iconscout/react-unicons"

function CardText({text}) {
  return (
    <div>
        <div className={` 
        flex flex-col justify-items-center 
        p-6 lg:p-6 text-left text-sm md:text-lg`}>
            <p>
                Illustration
            </p>
            <p>
                Assign Tasks more efficiently
            </p>
            <p>
                Get on it <UilArrowRight />
            </p>
        </div>
    </div>
  )
}

export default CardText