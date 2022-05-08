
function Button({text, bgColor, textColor}) {

  return (
    <div>
        <input type="button" value={text||"text"} className='text-white cursor-pointer text-xl leading-none px-6 hover:opacity-30 py-4 border rounded-lg border-solid border-1 text-sm block'
        style={{
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
          transition: "all .4s ease-in-out"
        }} />
    </div>
  )
}

export default Button