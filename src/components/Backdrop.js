import React from 'react'

function Backdrop() {
  return (
    <div style={{
        postition: "relative",
        width: "100vw",
        height: "100vh",
    }}>
        <div style={{
            width: "100%",
            height: "100%",
            postion: "absolute",
            backgroundColor: "rgba(0,0,0,.25)"
        }}>

        </div>
        
    </div>
  )
}

export default Backdrop