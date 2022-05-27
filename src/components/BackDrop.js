import React from 'react'
import SubmitSuccess from './SubmitSuccess'

function BackDrop() {
    return (
        <div className='absolute h-full bottom-0 left-0 w-full my-z-1000 my-transition' style={{
            background: "rgba(0,0,0,.80)"
        }}>
            <SubmitSuccess />
        </div>
    )
}

export default BackDrop