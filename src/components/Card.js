import CardImage from './CardImage'
import CardText from './CardText'

function Card({name, title, image}) {
  
  return (
    <div>
        <li className={`flex mx-2 my-4  flex-col shadow-xl lg:shadow-lg rounded-2xl`}>
            <CardImage img={image} />
            <CardText name={name} title={title} />
        </li>
    </div>
  )
}

export default Card