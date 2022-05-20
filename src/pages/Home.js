import React from 'react'
import Showcase from '../components/Showcase'
import Wrapper from '../components/Wrapper'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import CustomerStats from '../components/CustomerStats'

function Home() {
  return (
    <div>
        <Showcase />
        <Wrapper>
          <Features />
        </Wrapper>
        <GetStarted />
        <CustomerStats />
    </div>
  )
}

export default Home