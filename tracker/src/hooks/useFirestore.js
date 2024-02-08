import React, {useReducer, useState, useEffect} from 'react'
import {db} from '../firebase/config'
import {collection, addDoc, serverTimestamp, deleteDoc, doc} from 'firebase/firestore'

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return {isPending: true, document: null, success: false, error: null}
        case 'ADD_DOCUMENT':
            return {isPending: false, document: action.payload, success: true, error: null}
        case 'DELETE_DOCUMENT':
            return {isPending: false, document: null, success: true, error: null}
        case 'ERROR':
            return {isPending: false, document: null, success: false, error: action.payload}
        default:
            return state
    }
}

const useFirestore = (col) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    
    //collection ref
    const ref = collection(db, col)
    //add document
    const addDocument = async (doc) => {
        dispatch({type: 'IS_PENDING'})

        try {
            const createdAt = serverTimestamp()
            const addedDoc = await addDoc(ref, {...doc, createdAt})
            dispatch({type: 'ADD_DOCUMENT', payload: addedDoc})
        }
        catch (error) {
            dispatch({type:'ERROR', payload: error.message})
        }
    }
    //delete document
    const deleteDocument = async (id) => {
        dispatch({type: 'IS_PENDING'})
        try {
            const deletedDoc = await deleteDoc(doc(ref, id))
            dispatch({type: 'DELETE_DOCUMENT'})
        }
        catch (error) {
          dispatch({type: 'ERROR', payload: 'could not delete' })
        }
    }

    return {addDocument, deleteDocument, response }
}

export default useFirestore

