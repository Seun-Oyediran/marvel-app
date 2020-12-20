import React, { useContext } from 'react'
import { DataContext } from './Context'
import { CloseIcons } from '../animation/styled'

const Close = () => {


    const { darkTheme, showMenu, setShowMenu } = useContext(DataContext)

    const handleClick = () => {
        setShowMenu(prev => prev = false)
    }

    return (
        <CloseIcons darkTheme={darkTheme} onClick={handleClick}>
            {/* <h2><i className="fas fa-long-arrow-alt-left"></i></h2> */}
        </CloseIcons>
    )
}

export default Close
