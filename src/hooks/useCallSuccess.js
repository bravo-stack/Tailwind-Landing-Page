import { successful, notSuccessful } from "./../features/success/successSlice"
import { useSelector, useDispatch } from "react-redux"

function useCallSuccess() {
  
    const successStatus = useSelector((state)=> state.success.value)
    const dispatch = useDispatch()

    function handleForm(e) {
        e.preventDefault();
        setTimeout(() => {
            dispatch(notSuccessful())
        }, 4000);
        dispatch(successful())
    }

    return [successStatus, handleForm]
    

}

export default useCallSuccess