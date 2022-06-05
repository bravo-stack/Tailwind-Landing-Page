import { useEffect, useState } from 'react'
import Card from './Card'

// Axios Package
import axios from "axios"

function CardGroup() {
  const [features, setFeatures] = useState([])

  // Base URL
  const baseURL = "json/features.json"


  // fetching all features using axios
  useEffect(() => {
    axios.get(baseURL).then(response => {

      // convertin the features object to array
      const obj = response.data    
      const arrTemp = []

      // loops through the obj object using it's index(key)
      for (const key in obj.features ){
        const feature = {
          id: key,
          ...obj.features[key]
        }

        arrTemp.push(feature)
      }
      setFeatures(arrTemp)
    }).catch(error => {
      // Prints the error out to the console
      console.log(error.message, error.code)
    })
  }, [])

  return (
    <div>
        <ul className="
        flex 
        flex-col 
        md:grid 
        md:grid-cols-2 
        md:gap-2 
        md:gap-x-4 
        lg:grid 
        lg:grid-cols-3 
        lg:gap-4
        xl:grid-cols-4
        xl:gap-6">
          {features.map((feature, i)=>(<Card key={feature.id} image={feature.image} name={feature.name} title={feature.title} />))}
        </ul>
    </div>
  )
}

export default CardGroup