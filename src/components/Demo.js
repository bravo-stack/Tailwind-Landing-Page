import DemoForm from "../DemoForm"
import Wrapper from "./Wrapper"

function Demo() {
    return (
        <div className="my-bg-blue3 pt-16">
            <Wrapper>
                <div className='text-white'>
                    <p className="text-4xl font-bold text-center mb-8">
                        Get a Demo
                    </p>
                    <p className="text-base text-gray-400 text-center leading-relaxed">
                        Be one of the first to try out our amazing new features, because those feedbacks would be nice you know.
                    </p>
                </div>
                <div>
                    <DemoForm />
                </div>
            </Wrapper>
        </div>
    )
}

export default Demo