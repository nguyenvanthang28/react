import React, {useEffect, useState} from 'react'
import {auth} from '../firebase/config'
import useAuthContext from './useAuthContext'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

const UseSignup = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //signup user
            const res = await createUserWithEmailAndPassword(auth, email, password)
            
            if(!res){
                throw new Error('could not fetch the data')
            }
            
            //add display name
            await updateProfile(res.user, {displayName})

            //dispatch login
            dispatch({ type: 'LOGIN', payload: res.user })

            if(!isCancel){
                setIsPending(false)
                setError(null)
            }
        }
        catch (error) {
            if(!isCancel) {
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            }      
        }
    }

    useEffect(() =>{
        return () => setIsCancel(true)
    },[])

    return {error, isPending, signup}
}

export default UseSignup