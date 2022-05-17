import React from 'react'
import Card from './Card'
import multitasking from "./../assets/multitasking.png"
import infographics from "./../assets/Infographics.png"

function CardGroup() {
  return (
    <div>
        <div className="
        flex 
        flex-col 
        md:grid 
        md:grid-cols-2 
        md:gap-2 
        md:gap-x-4 
        lg:grid 
        lg:grid-cols-3 
        lg:gap-4
        xl:grid-cols-4
        xl:gap-6">
          <Card img={multitasking} />
          <Card img={infographics} />
          <Card img={multitasking} />
          <Card img={infographics} />
          <Card img={multitasking} />
          <Card img={infographics} />
          <Card img={multitasking} />
          <Card img={infographics} />
        </div>
    </div>
  )
}

export default CardGroup