import React from 'react'

function Wrapper({children}) {
  return (
    <div>
        <section className='container p-5 md:p-10 lg:p-10'>
            <div className='lg:p-6 md:p-6 p-2 pt-6 pb-3'>
              {children}
            </div>
        </section>
    </div>
  )
}

export default Wrapper