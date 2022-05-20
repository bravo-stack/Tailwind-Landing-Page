import teamimage from "./../assets/team-image-1.png"
import teamimage2 from "./../assets/team-image-2.png"
import teamimage3 from "./../assets/team-image-3.png"
import Label from "./Label"
import TestimonialCard from "./TestimonialCard"
import Wrapper from "./Wrapper"

function Testimonial() {
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
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7 md:gap-7'>
                    <TestimonialCard img={teamimage} />
                    <TestimonialCard img={teamimage2} />
                    <TestimonialCard img={teamimage3} /> 
                </div>
            </Wrapper>
        </div>
    </div>
  )
}

export default Testimonial