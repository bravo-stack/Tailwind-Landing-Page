import Label from "./Label"
import TestimonialCard from "./TestimonialCard"
import Wrapper from "./Wrapper"
import { useState, useEffect } from "react"
import axios from "axios"

function Testimonial() {
    const [testimonial, setTestimonial] = useState([])

    // specifying the base URL
    const baseURL = "json/testimonial.json"

    // use effect to set data everytime the component mounts
    useEffect(()=>{

        // axios.get to fetch
        axios.get(baseURL).then(response=>{
            
            // converting object ot arr
            const temp = response.data
            const arr = []
            for(const key in temp.testimonial){
                const obj = {
                    id: key,
                    ...temp.testimonial[key]
                }
                
                arr.push(obj)
            }

            // Storing th converted arr as our state
            setTestimonial(arr)
            console.log(arr)
         
        // catching error
        }).catch(error=>{

            // print error message
            console.log(error)
        })
    }, [])



  return (
    <div>
        <div className="my-bg-sec pt-16 pb-12">
            <Wrapper>
                <div className="mb-6">
                    <Label text="Testimonials" />
                </div>
                <p className="text-3xl lg:text-4xl my-text-primary text-center font-bold mb-6 lg:mb-10 ">
                    Lots of positive feebacks!
                </p>
                <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-7 md:gap-7'>
                    {testimonial&&testimonial.map((data)=>(<TestimonialCard image={data.image} message={data.message} name={data.name} position={data.position} key={data.id} />))}
                </ul>
            </Wrapper>
        </div>
    </div>
  )
}

export default Testimonial