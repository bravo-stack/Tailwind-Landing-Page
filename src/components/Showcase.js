import React from 'react'
import classes from "./showcase.module.css"
import showcaseImg from "./../newproject.png"
import Button from './Button'

function Showcase() {
  return (
      <div className={`rounded-b-3xl border-none ${classes.blue} xl:px-6 lg:px-4`} style={{
        marginTop: "-10px",
        paddingTop: "2rem",
        paddingBottom: "1rem"
      }}>
        <div className='p-10
        leading-tight
        md:leading-snug 
        lg:text-left 
        md:text-center 
        text-center 
        text-white 
        flex flex-col 
        gap-11 lg:gap-0 xl:gap-0 
        lg:flex-row xl:flex-row lg:content-between xl:content-between 
        justify-items-start ' 
        style={{
          width: "auto",
          minHeight: "65vh",
        }}>
        <div className='flex flex-col gap-5 xl:gap-14 lg:gap-8'>
          <div className='leading-normal xl:leading-normal lg:leading-normal md:leading-normal text-2xl font-bold xl:text-5xl lg:text-3xl md:text-3xl'>
            Exclusive Agency For <br className='lg:hidden xl:hidden' />Technology, Providing Solutions
          </div>
          <div className='text-sm xl:text-xl text-gray-300 font-light xl:my-0 lg:my-2 md:my-5 my-4'>
            We are Mont, a Creative Design Wheel
            <span className='my-4 block xl:my-7'></span>
            Helping you maximize operations management with digitization
          </div>
          <div className=" flex gap-2 content-between m-auto xl:m-0 lg:m-0 gap-4 md:gap-6 lg:gap-7 xl:gap-7">
            <Button 
            text="Contact"
            bgColor="white"
            textColor="rgb(48,24,186)" />
            <Button 
            text="View More"
            bgColor="transparent"
            textColor="white" />
          </div>
        </div>
        <div style={{
          paddingBottom: "1rem"
        }}>
          <img className='m-auto' src={showcaseImg} alt="" style={{
            maxWidth: "60%",
            height: "auto"
          }} />
        </div>
      </div>
    </div>
  )
}

export default Showcase