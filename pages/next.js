import React, { useState, useEffect } from 'react'
import { homeBox } from '../animation/framer-motion'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'
import { getRequest } from '../helper/Helper'

const next = () => {
    const [img, setImg] = useState('')

    useEffect(() => {


    }, [])




    return (
        <>
            <Header title='next' />
            <motion.div
                className='background light-bg home-box'
                variants={homeBox}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <Link href='/'>
                    <a >Home Page</a>
                </Link>

            </motion.div>
        </>
    )
}

export default next
