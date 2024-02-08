import React, {useEffect, useRef, useState} from 'react'
import {db} from '../firebase/config'
import {collection, onSnapshot, query, where, orderBy} from 'firebase/firestore'

const useCollection = (col, _query, _orderBy) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    const q = useRef(_query).current
    const order = useRef(_orderBy).current

    useEffect(() => {
        let ref = collection(db, col)

        if(q) {
           ref = query(ref, where(...q))
        }
        if(order) {
            ref = query(ref, orderBy(...order))
        }

        const unsubscribe = onSnapshot(ref, (snapshot) => {
            let result = []
            snapshot.docs.forEach((doc) => {
                result.push({...doc.data(), id: doc.id})
            })
            //update state
            setDocument(result)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('could not fetch the data')
        })
        return () => unsubscribe()

    }, [col, q])

    return {document, error}
}

export default useCollection