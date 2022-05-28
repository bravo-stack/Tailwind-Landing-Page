import { useState } from 'react'
import Showcase from '../components/Showcase'
import Wrapper from '../components/Wrapper'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import CustomerStats from '../components/CustomerStats'
import Demo from '../components/Demo'
import BackDrop from '../components/BackDrop'
import useCallSuccess from '../hooks/useCallSuccess'

function Home() {

  const [isSuccessful, handleForm] = useCallSuccess()

  return (
    <div>
        <Showcase />
        <Wrapper>
          <Features />
        </Wrapper>
        <GetStarted />
        <CustomerStats />
        <Demo submit={handleForm} />
        {isSuccessful&&<BackDrop />}
    </div>
  )
}

export default Home