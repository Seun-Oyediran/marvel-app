import React, { useContext } from 'react'
import { DataContext } from './Context'
import { MenuIcon, CloseIcons } from '../animation/styled'
import { motion } from 'framer-motion'
import { closer } from '../animation/framer-motion'


const Menu = () => {

    const { darkTheme, showMenu, setShowMenu } = useContext(DataContext)

    const handleClick = () => {
        setShowMenu(prev => prev = true)
    }
    const handleClick1 = () => {
        setShowMenu(prev => prev = false)
    }

    return (
        <>
            {/* {!showMenu && <MenuIcon darkTheme={darkTheme} onClick={handleClick}>
                <h1><i className="fas fa-bars"></i></h1>
                <h1> <i className="fas fa-align-right"></i></h1>
            </MenuIcon>} */}
            {showMenu && <CloseIcons darkTheme={darkTheme} onClick={handleClick1}>
                <motion.h1
                    variants={closer}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                ><i className="fas fa-long-arrow-alt-left"></i></motion.h1>
            </CloseIcons>}
        </>
    )
}

export default Menu


{/* <i class="fas fa-long-arrow-alt-left"></i> */ }