import { useState } from 'react'

function useCallSuccess() {
  
    const [isSuccessful, setStatus] = useState(false)

    function handleForm(e) {
        e.preventDefault();
        setTimeout(() => {
            setStatus(false)
        }, 4000);
        setStatus(true)
    }

    return [isSuccessful, handleForm]
    

}

export default useCallSuccess