import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error('useThemeContext must be inside the ThemeContextProvider')
    }
    
    return context;
}

export default useThemeContext