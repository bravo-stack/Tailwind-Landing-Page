import React from 'react'
import classes from "./showcase.module.css"
import showcaseImg from "./../newproject.png"

function Showcase() {
  return (
      <div className={`rounded-b-3xl border-none ${classes.blue} xl:px-6 lg:px-4`} style={{
        marginTop: "-10px",
        paddingTop: "2rem",
        paddingBottom: "1rem"
      }}>
        <div className='p-10 xl:text-8xl lg:text-7xl leading-tight md:leading-snug lg:leading-snug xl:leading-snug md:text-5xl text-4xl lg:text-left md:text-center text-center text-white flex flex-col gap-11 lg:gap-0 xl:gap-0 lg:flex-row xl:flex-row lg:justify-around items-center height-' style={{
          width: "95vw",
          minHeight: "65vh",
        }}>
        <div className='xl:w-1/2 lg:w-1/2'>
         Welcome to the New Disposition
        </div>
        <div style={{
          paddingBottom: "1rem"
        }}>
          <img src={showcaseImg} alt="" style={{
            width: "300px"
          }} />
        </div>
      </div>
    </div>
  )
}

export default Showcase