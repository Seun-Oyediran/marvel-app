import React, { useContext } from 'react'
import { LoaderStyle } from '../animation/styled'
import { DataContext } from './Context'
import { AnimatePresence, motion } from 'framer-motion'
import { loaderAnimation } from '../animation/framer-motion'



const Loader = () => {
    const { darkTheme, loader } = useContext(DataContext)


    return (

        <motion.div
            variants={loaderAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
        >
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
