import CardGroup from './CardGroup'
import Label from './Label'

function Features() {

  return (
    <div className='
    pt-20
    pb-10
    md:pt-24
    md:pb-12
    lg:pt-24
    lg:pb-12
    flex 
    flex-col 
    gap-4 
    md:gap-6
    lg:gap-6'>
        <Label text="New Features" />
        <CardGroup />
    </div>
  )
}

export default Features