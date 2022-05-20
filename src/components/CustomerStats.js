import React from 'react'
import Stats from './Stats'
import Testimonial from './Testimonial'
import Wrapper from './Wrapper'

function CustomerStats() {
  return (
    <div>
      <Wrapper>
        <Stats />
      </Wrapper>      
      <Testimonial />
    </div>
  )
}

export default CustomerStats