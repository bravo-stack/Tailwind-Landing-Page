
function Newsletter({submit}) {
    
    return (
        // container
        <div className='bg-white'>

            {/* our form */}
            <form className='flex flex-col gap-8 text-lg' onSubmit={submit}>

                    {/* first lable which serves as a container here too */}
                    <label htmlFor="name" className='my-bg-blue-lite flex flex-col gap-4'>

                        {/* label text */}
                        <span className="font-bold">Your Name</span>

                        {/* email input */}
                        <input placeholder="Type your name" className="w-full rounded-xl inline-block p-5" type="text" name="name" id="name" />

                        {/* Our submit button */}
                        <input type="submit" value="Submit" className='bg-orange-500 text-white text-bold cursor-pointer border-transparent leading-none p-7 border rounded-xl block hover:scale-105'
                        style={{
                        transition: "all .4s ease-in-out"
                        }} />
                    </label>
                </form>
        </div>
    )
}

export default Newsletter