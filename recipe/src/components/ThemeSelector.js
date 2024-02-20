import './ThemeSelector.css'
import React from 'react'
import useThemeContext from '../hooks/useThemeContext'
import modeIcon from '../assets/modeIcon.svg'

const themeColor = ['orange', 'blue', 'green']

const ThemeSelector = () => {
    const {changeColor, mode, changeMode} = useThemeContext()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
        console.log(mode)
    }
  
    return (
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img src={modeIcon}
                    onClick={toggleMode}
                />
            </div>
            <div className="theme-buttons">
                {themeColor.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSelector