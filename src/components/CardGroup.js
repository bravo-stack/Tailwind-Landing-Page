import { useEffect } from 'react'
import Card from './Card'
import multitasking from "./../assets/multitasking.png"
import infographics from "./../assets/Infographics.png"

// Axios Package
import axios from "axios"

function CardGroup() {


  // Base URL
  const baseURL = "./../json/features.json"

  // fetching all features using axios
  useEffect(() => {
    axios.get(baseURL).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error.message, error.code)
    })
  }, [])

  // function that fetches data with axios.get
    



  return (
    <div>
        <div className="
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
          <Card img={multitasking} />
          <Card img={infographics} />
          <Card img={multitasking} />
          <Card img={infographics} />
          <Card img={multitasking} />
          <Card img={infographics} />
          <Card img={multitasking} />
          <Card img={infographics} />
        </div>
    </div>
  )
}

export default CardGroup