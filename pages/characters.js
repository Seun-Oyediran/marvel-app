import React, { useState, useContext } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Title from '../components/Title'
import Background from '../components/Background'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { homeBox } from '../animation/framer-motion'
import CharsContent from '../components/CharsContent'
import '../styles/CharsContent.css'
import BigCharacter from '../components/BigCharacter'
import { DataContext } from '../components/Context'
import SmallTitle from '../components/SmallTitle'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'



const characters = () => {
    const [selected, setSelected] = useState(null)
    const { darkTheme, favourites, showMenu } = useContext(DataContext)


    return (
        <>
            <Header title='Characters' />
            <Background>
                <div className="container">
                    <SideBar />
                    <Menu />
                    <NavBar />
                    <AnimateSharedLayout type='crossfade'>

                        <motion.div className={!showMenu ? 'remaining-close' : 'remaining'}
                            variants={homeBox}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <Title title='Characters' />
                            <SmallTitle title='Favourites' img='/img/6.png' nos={`${favourites.length}`} path='/favourites' />

                            <CharsContent selected={selected} setSelected={setSelected} />
                        </motion.div>

                        <BigCharacter selected={selected} setSelected={setSelected} darkTheme={darkTheme} />

                    </AnimateSharedLayout>
                </div>

            </Background>
        </>
    )
}

export default characters
