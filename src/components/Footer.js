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
                <div className='w-full py-12 xl:pt-24 xl:pb-20 
                content-between
                flex 
                flex-col
                lg:flex-row-reverse 
                lg:gap-32
                xl:gap-48
                gap-16'>

                    <Newsletter submit={handleForm} />
                    <FooterLinks />
                </div>
            </Wrapper>
        </>
    )
}

export default Footer