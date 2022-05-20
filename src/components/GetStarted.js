import working from "./../assets/content-man-image.png"
import Label from "./../components/Label"
import Wrapper from "./../components/Wrapper"
import GetAccessCard from "./GetAccessCard"

function GetStarted() {
  return (
    <div>
        <section className='my-bg-sec pt-10 lg:pt-0'>
            <Wrapper>

                <div className="pt-10 lg:pt-16 lg:pb-8 mb-10 md:mb-12 lg:mb-0">
                    <Label text="Getting Started" />
                </div>
                 
                {/* Getting started container */}
                <div className="flex flex-col lg:flex-row-reverse">

                    {/* Getting Started card view */}
                    <div className="flex lg:w-1/2 md:w-5/6 m-auto">
                        <GetAccessCard />
                    </div>

                    {/* Getting started image */}
                    <div className="pt-12 lg:w-1/2 md:w-5/6 m-auto">
                        <div className="flex ">
                            <img className="" src={working} alt="get started" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    </div>
  )
}

export default GetStarted