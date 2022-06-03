import FooterNote from "./FooterNote"

function Newsletter({submit}) {
    
    return (
        // container
        <div className='bg-white w-full lg:w-auto flex flex-col gap-7'>
            
            <FooterNote text="Newsletter" />

            {/* our form */}
            <form className='flex flex-col gap-8 text-lg my-bg-blue-liter p-6 rounded-2xl' onSubmit={submit}>

                    {/* first lable which serves as a container here too */}
                    <label htmlFor="name" className='flex flex-col gap-6'>

                        {/* label text */}
                        <span className="font-bold text-base">Get monthly update in your inbox</span>

                        {/* input field and submit btn container */}
                        <div className="flex flex-col gap-3 md:flex-row lg:flex-row p-0 md:p-2 lg:p-2
                        bg-transparent
                        rounded-3xl md:bg-white lg:bg-white">
                            {/* email input */}
                            <input placeholder="Enter your email" className="w-full rounded-2xl p-5" type="email" name="name" id="name" />

                            {/* Our submit button */}
                            <input type="submit" value="Subscribe" className='
                            my-bg-blue 
                            text-white font-bold cursor-pointer border-transparent leading-none 
                            px-6 py-5 
                            border 
                            w-2/4 
                            rounded-2xl hover:scale-105'
                            style={{
                            transition: "all .4s ease-in-out"
                            }} />
                        </div>
                        <p className="text-gray-500 text-sm">
                            We won't spam you at all!
                        </p>
                    </label>
                </form>
        </div>
    )
}

export default Newsletter