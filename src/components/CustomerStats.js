import React from 'react'
import GrayLine from './GrayLine'
import Stats from './Stats'
import Wrapper from './Wrapper'

function CustomerStats() {
  return (
    <div>
      <Wrapper>
        <Stats />
      </Wrapper>
      <GrayLine />
    </div>
  )
}

export default CustomerStats