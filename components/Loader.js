import React, { useContext } from 'react'
import { LoaderStyle } from '../animation/styled'
import { DataContext } from './Context'
import { AnimatePresence, motion } from 'framer-motion'



const Loader = () => {
    const { darkTheme, loader } = useContext(DataContext)


    return (
        <motion.div>
            <LoaderStyle className={darkTheme ? 'background dark-bg' : 'background light-bg'}>
                <div>
                    <img src="/img/5.png" alt="marvelhome" />
                    <p>Developed by Oyediran Seun using Marvel API</p>
                </div>
            </LoaderStyle>
        </motion.div>

    )
}

export default Loader
