import React from 'react'
import Card from './Card'
import multitasking from "./../assets/multitasking.png"
import infographics from "./../assets/Infographics.png"
import Label from './Label'

function Features() {

  return (
    <div className='
    pt-20
    pb-10
    md:pt-24
    md:pb-12
    lg:pt-24
    lg:pb-12
    flex 
    flex-col 
    gap-4 
    md:gap-6
    lg:gap-6'>
        <Label text="New Features" />
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

export default Features