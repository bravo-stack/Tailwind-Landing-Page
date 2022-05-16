import React from 'react'

function CardImage({img}) {
  return (
    <div>
        <div className={` 
            my-bg-blue-lite 
            w-full 
            lg:rounded
            lg:rounded-t-2xl
            rounded-t-2xl`}>
                <img className='my-transition hover:scale-110'  src={img} alt="text" />
            </div>
    </div>
  )
}

export default CardImage