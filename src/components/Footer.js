import React from 'react'
import useCallSuccess from '../hooks/useCallSuccess'
import BackDrop from './BackDrop'
import FooterLinks from './FooterLinks'
import Newsletter from './Newsletter'
import Wrapper from './Wrapper'

function Footer() {

    const [isSuccessful, handleForm] = useCallSuccess()

    return (
        <>
            <Wrapper>
                {isSuccessful&&<BackDrop />}
                <div className='w-full py-12 flex flex-col gap-10'>

                    <Newsletter submit={handleForm} />
                    <FooterLinks />
                </div>
            </Wrapper>
        </>
    )
}

export default Footer