import React from 'react'

function GetAccessCard() {
    return (
        <div className=' getstarted-rounded p-10 shadow-xl bg-white flex flex-col gap-5 lg:gap-10 leading-normal my-auto'>
            <div className='flex flex-col gap-6 lg:gap-8 '>
                <p className="text-3xl lg:text-5xl font-bold my-text-primary">
                    Get access to your daily cost.
                </p>
                <p className='text-gray-600 lg:leading-loose text-base lg:text-lg'>
                    With lots of unique blocks, you can easily build a page without coding. Build your next website within few minutes.
                </p>
                <div>
                    <input type="button" value="Get started now" className='
                    shadow-xl 
                    lg:w-auto 
                    text-white 
                    text-bold 
                    cursor-pointer 
                    text-xl 
                    lg:text-xl 
                    leading-none 
                    px-6 
                    py-5 
                    lg:px-8 
                    md:px-6 
                    lg:px-6 
                    border 
                    rounded-2xl l
                    g:rounded-2xl 
                    border-solid 
                    border-1 
                    text-sm 
                    block 
                    hover:scale-110'
                    style={{
                    backgroundColor: `rgb(48, 24, 186)`,
                    color: `white`,
                    transition: "all .4s ease-in-out"
                    }} />
                </div>
            </div>
        </div>
    )
}

export default GetAccessCard