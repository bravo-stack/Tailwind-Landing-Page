import React from 'react'

function Wrapper({children}) {
  return (
    <div>
        <section className='container p-6 md:p-10 lg:p-10'>
            {children}
        </section>
    </div>
  )
}

export default Wrapper