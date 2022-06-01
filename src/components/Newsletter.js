
function Newsletter({submit}) {
    
    return (
        // container
        <div className='bg-white' style={{width: "300px"}}>

            {/* our form */}
            <form className='flex flex-col gap-8 text-lg' onSubmit={submit}>

                    {/* first lable which serves as a container here too */}
                    <label htmlFor="name" className='my-bg-blue-lite'>

                        {/* label text */}
                        <span className="font-bold">Your Name</span>

                        {/* input field and submit btn container */}
                        <div className="flex p-3 bg-white"  style={{border: "3px solid red"}}>
                            {/* email input */}
                            <input placeholder="Type your name" className="w-full rounded-xl p-5" type="text" name="name" id="name" />

                            {/* Our submit button */}
                            <input type="submit" value="Submit" className='bg-orange-500 text-white text-bold cursor-pointer border-transparent leading-none px-6 border rounded-3xl hover:scale-105'
                            style={{
                            transition: "all .4s ease-in-out"
                            }} />
                        </div>
                    </label>
                </form>
        </div>
    )
}

export default Newsletter