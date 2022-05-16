import React from 'react'
import showcaseImg from "./../assets/showcase2.png"
import Button from './Button'
import Wrapper from './Wrapper'

function Showcase() {
  return (
    <div className={`rounded-b-3xl border-none my-bg-blue`}>
      <Wrapper>
         <div className='' style={{
            marginTop: "-5px"
          }}>
            <div className=' 
            leading-tight
            md:leading-snug 
            lg:text-left 
            md:text-center 
            text-center 
            text-white 
            flex flex-col 
            gap-11 md:gap-16 lg:gap-0 
            lg:flex-row lg:content-between 
            justify-items-start ' 
            style={{
              width: "auto",
              minHeight: "45vh",
            }}>
            <div className='flex flex-col gap-5 xl:gap-14 lg:gap-8'>
              <div className='leading-normal xl:leading-normal lg:leading-normal md:leading-normal text-2xl font-bold xl:text-5xl lg:text-3xl md:text-3xl'>
                Exclusive Agency For <br className='lg:hidden' />Technology, Providing Solutions
              </div>
              <div className='text-sm xl:text-xl md:text-base text-gray-300 font-light xl:my-0 lg:my-2 md:my-5 my-4'>
                We are Mont, a Creative Design Wheel
                <span className='my-4 block xl:my-7'></span>
                Helping you maximize operations management with digitization
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