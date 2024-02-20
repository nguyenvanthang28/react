import {useEffect, useState} from 'react'

const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [option, setOption] = useState(null);

  const postData = (postData) => {
    setOption({
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const fetchData = async (fetchOption) => {
        setIsPending(true)
        try {
            const res = await fetch(url, {...fetchOption})
            if(!res.ok) {
                throw new Error('could not fetch the data')
            }
            const data = await res.json()

            setData(data)
            setIsPending(false)
            setError(null)
        }
        catch (error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }
    
    if(method === 'GET'){
      fetchData()
    }
    if(method === 'POST' && option){
      fetchData(option)
    }



  },[url, method, option])
  
  return {data, error, isPending, postData}
}

export default useFetch