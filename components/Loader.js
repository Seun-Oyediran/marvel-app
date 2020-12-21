import React, { useContext } from 'react'
import { LoaderStyle } from '../animation/styled'
import { DataContext } from './Context'
import { AnimatePresence, motion } from 'framer-motion'
import { loaderAnimation } from '../animation/framer-motion'



const Loader = () => {
    const { darkTheme, loader } = useContext(DataContext)


    return (
        <motion.div className={darkTheme ? 'background dark-bg loader-style' : 'background light-bg loader-style'}
            variants={loaderAnimation}
            initial='initial'
            animate='animate'
            exit='exit'>
            <div>
                <img src="/img/5.png" alt="marvelhome" />
                <p>Developed by Oyediran Seun using Marvel API</p>
            </div>
        </motion.div>
    )
}

export default Loader
