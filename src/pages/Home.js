import React from 'react'
import Showcase from '../components/Showcase'
import Wrapper from '../components/Wrapper'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import CustomerStats from '../components/CustomerStats'
import Demo from '../components/Demo'
import BackDrop from '../components/BackDrop'

function Home() {
  return (
    <div>
        <Showcase />
        <Wrapper>
          <Features />
        </Wrapper>
        <GetStarted />
        <CustomerStats />
        <Demo />
        <BackDrop />
    </div>
  )
}

export default Home