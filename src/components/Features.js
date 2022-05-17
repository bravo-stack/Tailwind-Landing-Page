import React from 'react'
import Card from './Card'
import multitasking from "./../assets/multitasking.png"
import infographics from "./../assets/Infographics.png"
import Label from './Label'

function Features() {

  const data = {
    firstText: "Accessable features across the globe made easier with just a few click, no more no less. Tasks get assigned efficiently accross all teams; promoting remote workspace",
    secondText: "Get essential informations mapped out and ready for user consumption. Populating charts for detailed information; with the Infographic section, one can also stay miles ahead"
  }

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
          <Card text={data.firstText} img={multitasking} />
          <Card text={data.secondText} img={infographics} />
          <Card text={data.firstText} img={multitasking} />
          <Card text={data.secondText} img={infographics} />
          <Card text={data.firstText} img={multitasking} />
          <Card text={data.secondText} img={infographics} />
          <Card text={data.firstText} img={multitasking} />
          <Card text={data.secondText} img={infographics} />
        </div>
    </div>
  )
}

export default Features