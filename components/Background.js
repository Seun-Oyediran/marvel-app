import React, { useContext } from 'react'
import { DataContext } from './Context'


const Background = ({ children }) => {

    const { darkTheme } = useContext(DataContext)


    return (
        <div className={darkTheme ? 'home-box background dark-bg' : 'home-box background light-bg'}>
            {children}
        </div>
    )
}

export default Background
