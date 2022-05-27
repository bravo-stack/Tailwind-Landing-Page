import React from 'react'
import SubmitSuccess from './SubmitSuccess'

function BackDrop() {
    return (
        <div className='absolute opacity-75 h-full bottom-0 left-0 w-full bg-black my-z-1000 my-transition'>
            <SubmitSuccess />
        </div>
    )
}

export default BackDrop