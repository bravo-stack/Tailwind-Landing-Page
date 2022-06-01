import React from 'react'
import useCallSuccess from '../hooks/useCallSuccess'
import BackDrop from './BackDrop'
import Newsletter from './Newsletter'

function Footer() {

    const [isSuccessful, handleForm] = useCallSuccess()

    return (
        <>
            {isSuccessful&&<BackDrop />}
            <div className='w-full '>
                <Newsletter submit={handleForm} />
            </div>
        </>
    )
}

export default Footer