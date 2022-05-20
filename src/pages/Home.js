import React from 'react'
import Showcase from '../components/Showcase'
import Wrapper from '../components/Wrapper'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'

function Home() {
  return (
    <div>
        <Showcase />
        <Wrapper>
          <Features />
        </Wrapper>
        <GetStarted />
    </div>
  )
}

export default Home