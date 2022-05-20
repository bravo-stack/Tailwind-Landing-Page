import React from 'react'

function Wrapper({children}) {
  return (
    <div>
        <section className='px-3 md:px-10 lg:px-12 xl:px-16'>
            <div className='lg:px-6 md:px-6 px-1'>
              {children}
            </div>
        </section>
    </div>
  )
}

export default Wrapper