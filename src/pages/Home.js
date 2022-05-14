import React from 'react'
import Showcase from '../components/Showcase'
import Wrapper from '../components/Wrapper'
import Features from '../components/Features'

function Home() {
  return (
    <div>
        <Showcase />
        <Wrapper>
          <Features />
        </Wrapper>
    </div>
  )
}

export default Home