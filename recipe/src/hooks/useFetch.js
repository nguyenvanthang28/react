import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {

        const fecthData = async () => {
            setIsPending(true)
            try {
                const res = await fetch(url)
                
                if(!res.ok){
                    throw new Error(res.statusText)
                }

                const data = await res.json()

                setIsPending(false)
                setError(null)
                setData(data)
            }
            catch (error) {
                setError('could not feth data ')
                setIsPending(false)
            }
        }

        fecthData()

    }, [url])


    return {isPending, error, data}
 
}

export default useFetch