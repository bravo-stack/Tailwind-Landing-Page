import working from "./assets/content-man-image.png"
import Wrapper from "./components/Wrapper"
import GetAccessCard from "./GetAccessCard"

function GetStarted() {
  return (
    <div>
        <section className='my-bg-sec pt-10 lg:pt-0'>
            <Wrapper>

                {/* Getting started container */}
                <div className="flex flex-col lg:flex-row-reverse">

                    {/* Getting Started card view */}
                    <div className="flex lg:w-1/2 md:w-2/3 m-auto">
                        <GetAccessCard />
                    </div>

                    {/* Getting started image */}
                    <div className="pt-12 lg:w-1/2 md:w-2/3 m-auto">
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