import React from 'react'
import CardImage from './CardImage'
import CardText from './CardText'

function Card({text, img}) {
  return (
    <div>
        <section className={`flex mx-2 my-4  flex-col shadow-xl lg:shadow-lg rounded-2xl`}>
            <CardImage img={img} />
            <CardText />
        </section>
    </div>
  )
}

export default Card