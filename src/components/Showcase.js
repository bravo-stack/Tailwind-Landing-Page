import React from 'react'
import showcaseImg from "./../assets/showcase2.png"
import Button from './Button'
import Wrapper from './Wrapper'

function Showcase() {
  return (
    <div className={`rounded-b-3xl border-none my-bg-blue`}>
      <Wrapper>
         <div className='
          pb-16
          pt-8
          md:pt-12
          md:pb-24
          lg:pt-16
          lg:pb-16
          xl:pb-20'>
            <div className=' 
            leading-tight
            md:leading-snug 
            lg:text-left 
            md:text-center 
            text-center 
            text-white 
            flex 
            flex-col-reverse
            md:gap-4
            lg:gap-8 
            lg:flex-row lg:content-between 
            justify-items-start ' 
            style={{
              width: "auto",
              height: "max-content",
            }}>
              <div className='
              flex 
              flex-col 
              gap-5 
              xl:gap-10 
              lg:gap-8'>
                <div className='leading-normal xl:leading-normal lg:leading-normal md:leading-normal text-2xl font-bold xl:text-5xl lg:text-3xl md:text-3xl'>
                  Exclusive Agency For <br className='lg:hidden' />Technology, Providing Solutions
                </div>
                <div className='text-sm xl:text-lg md:text-base text-gray-300 font-light xl:my-0 lg:my-2 md:my-5 my-4'>
                  We are Mont, a Creative Design Wheel
                  <span className='my-4 block xl:my-7'></span>
                  <span className='lg:leading-normal xl:leading-loose'>Helping you maximize operations management with digitization</span>
                </div>
                <div className=" flex md:flex-row lg:flex-row gap-4 content-between m-auto lg:m-0 md:gap-6 lg:gap-7">
                  <Button 
                  text="Key Features"
                  bgColor="white"
                  textColor="rgb(48,24,186)" />
                  <Button 
                  text="How We Work?"
                  bgColor="transparent"
                  textColor="white" />
                </div>
              </div>
              <div style={{
                paddingBottom: "1rem",
              }}>
                <img className='m-auto' src={showcaseImg} alt="" style={{
                  width: "100%",
                  height: "auto"
                }} />
              </div>
            </div>
          </div>
      </Wrapper>
    </div>
  )
}

export default Showcase