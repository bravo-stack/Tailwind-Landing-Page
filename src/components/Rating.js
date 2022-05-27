import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating() {
  return (
    <div>
        <div className="flex gap-1 text-orange-500">
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            <FontAwesomeIcon icon={faStar} size="lg" />
            <FontAwesomeIcon icon={faStar} size="lg" />
        </div>
    </div>
  )
}

export default Rating