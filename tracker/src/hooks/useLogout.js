import React, {useEffect, useState} from 'react'
import useAuthContext from './useAuthContext'
import {auth} from '../firebase/config'
import {signOut} from 'firebase/auth'

const useLogout = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //sign out
        try {
            await signOut(auth)

            //dispatch logout action
            dispatch({type: 'LOGOUT'})
            
            //update state
            if(!isCancel) {
                setError(null)
                setIsPending(false)
            }
        }
        catch (error) {
            if(!isCancel){
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            }  
        }
    }

    useEffect(() => {
        return () => setIsCancel(true)
    },[])

    return {logout, error, isPending}
}

export default useLogout