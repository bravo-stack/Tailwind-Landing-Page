import { useState } from 'react'
import Showcase from '../components/Showcase'
import Wrapper from '../components/Wrapper'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import CustomerStats from '../components/CustomerStats'
import Demo from '../components/Demo'
import BackDrop from '../components/BackDrop'

function Home() {

  const [isSuccessful, setIsSuccessful] = useState(false)

  const onSubmitBtn = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setIsSuccessful(false);      
    }, 4000);
    setIsSuccessful(true)
  }

  return (
    <div>
        <Showcase />
        <Wrapper>
          <Features />
        </Wrapper>
        <GetStarted />
        <CustomerStats />
        <Demo submit={onSubmitBtn} />
        {isSuccessful&&<BackDrop />}
    </div>
  )
}

export default Home