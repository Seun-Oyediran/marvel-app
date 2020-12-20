import React, { useContext } from 'react'
import { NavStyle, MenuIcon } from '../animation/styled'
import { DataContext } from './Context'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const NavBar = () => {
    const router = useRouter()
    const { darkTheme, setShowMenu, showMenu } = useContext(DataContext)
    const handleClick = () => {
        setShowMenu(prev => prev = true)
    }

    return (

        <NavStyle darkTheme={darkTheme}>
            {!showMenu && <MenuIcon darkTheme={darkTheme} className='menu' onClick={handleClick}>
                <h1><i className="fas fa-bars"></i></h1>
                {/* <h1> <i className="fas fa-align-right"></i></h1> */}
            </MenuIcon>}

            <div className='nav-img'>
                <motion.img onClick={() => { router.push('/') }} src="/img/5.png" alt="marvel logo" />
            </div>
        </NavStyle>
    )
}

export default NavBar
