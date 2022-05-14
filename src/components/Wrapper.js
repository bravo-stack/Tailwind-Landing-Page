import React from 'react'

function Wrapper({children}) {
  return (
    <div>
        <section className='container p-10'>
            {children}
        </section>
    </div>
  )
}

export default Wrapper