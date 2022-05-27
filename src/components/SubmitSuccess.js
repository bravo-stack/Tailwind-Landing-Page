import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function SubmitSuccess() {
    return (
        <div className='fixed top-0 right-0 md:mt-5 lg:mt-7 w-full md:w-auto lg:w-auto flex my-transition bg-white shadow-xl py-3 pt-4 md:pt-3 lg:pt-3 px-3 text-green-500' style={{
            borderBottom: "6px solid rgb(34 197 94)",
        }}>
            <span className='my-auto mx-4 mr-6 md:mx-8 lg:mx-8 '>
            <FontAwesomeIcon icon={faCircleCheck} size="3x" />
            </span>
            <p className='text-lg md:pr-8 lg:pr-8'>
                <span className='text-2xl lg:text-3xl'>Success!</span><br />We will be in touch with you
            </p>    
        </div>
    )
}

export default SubmitSuccess