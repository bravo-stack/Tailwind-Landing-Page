import React from 'react'

function Wrapper({children}) {
  return (
    <div>
        <section className='container px-5 md:px-10 lg:px-12 xl:px-16'>
            <div className='lg:px-6 md:px-6 px-2'>
              {children}
            </div>
        </section>
    </div>
  )
}

export default Wrapper