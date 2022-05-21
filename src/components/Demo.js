import DemoForm from "../DemoForm"
import Wrapper from "./Wrapper"
import flower from "./../assets/flower-image.png"
import rocket from "./../assets/rocket-image.png"

function Demo() {
    return (
        <div className="my-bg-blue3 pt-16  pb-12 xl:pb-0">

            {/* Wrapper component */}
            <Wrapper>

                {/* Flex container */}
                <div className="flex">

                    {/* SVG Flower Icon */}
                    <div className="animate-pulse w-32 relative left-10 bottom-0 xl:inline-flex flex-col-reverse hidden">
                        <img src={flower} alt="flower img" />
                    </div>

                    {/* Contact Form Container*/}
                    <div className="md:w-2/3 lg:w-2/3 xl:w-2/5 md:mx-auto xl:pb-16">
                        <div className='text-white'>
                            <p className="text-4xl font-bold text-center mb-8">
                                Get a Demo
                            </p>
                            <p className="text-base text-gray-400 text-center leading-relaxed xl:text-lg">
                                Be one of the first to try out our amazing new features, because those feedbacks would be nice you know.
                            </p>
                        </div>

                        {/* DemoForm Component */}
                        <div className="mt-10">
                            <DemoForm />
                        </div>
                    </div>

                    {/* SVG Flower Icon */}
                    <div className="animate-bounce delay-100 w-20 relative right-16 bottom-32 xl:inline-flex flex-col-reverse hidden">
                        <img src={rocket} alt="flower img" />
                    </div>
                    
                </div>
            </Wrapper>
        </div>
    )
}

export default Demo