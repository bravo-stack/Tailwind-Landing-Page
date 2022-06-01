import useCallSuccess from "../hooks/useCallSuccess"

function DemoForm() {
    const [,handleForm] = useCallSuccess()


    return (
        <div>
            <form className='flex flex-col gap-8 text-lg' onSubmit={handleForm}>
                <label htmlFor="name" className='flex flex-col gap-4'>
                    <span className="font-bold text-white">Your Name</span>
                    <input placeholder="Type your name" className="block w-full rounded-xl p-5" type="text" name="name" id="name" />
                </label>
                
                <label htmlFor="name" className='flex flex-col gap-4'>
                    <span className="font-bold text-white">Email Address</span>
                    <input placeholder="Enter your email" className="block w-full rounded-xl p-5" type="email" name="name" id="name" />
                </label>
                
                {/* Button */}
                <input type="submit" value="Submit" className='text-white text-bold cursor-pointer my-bg-blue border-transparent leading-none p-7 border rounded-xl block hover:scale-105'
                style={{
                transition: "all .4s ease-in-out"
                }} />

            </form>
        </div>
    )
}

export default DemoForm