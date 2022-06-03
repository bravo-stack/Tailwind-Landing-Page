import React from 'react'
import useCallSuccess from '../hooks/useCallSuccess'
import BackDrop from './BackDrop'
import Newsletter from './Newsletter'
import Wrapper from './Wrapper'

function Footer() {

    const [isSuccessful, handleForm] = useCallSuccess()

    return (
        <>
            <Wrapper>
                {isSuccessful&&<BackDrop />}
                <div className='w-full py-12'>

                    <Newsletter submit={handleForm} />
                </div>
            </Wrapper>
        </>
    )
}

export default Footer