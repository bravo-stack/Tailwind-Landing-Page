
function Button({text, bgColor, textColor}) {

  return (
    <div>
        <input type="button" value={text||"text"} className='text-white text-bold cursor-pointer text-xl leading-none px-6 py-4 border rounded-lg border-solid border-1 text-sm block hover:scale-110'
        style={{
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
          transition: "all .4s ease-in-out"
        }} />
    </div>
  )
}

export default Button