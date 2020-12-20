import React, { useState, useContext } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Title from '../components/Title'
import Background from '../components/Background'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { homeBox } from '../animation/framer-motion'
import FavContent from '../components/favContent'
import '../styles/CharsContent.css'
import BigCharacter from '../components/BigCharacter'
import { DataContext } from '../components/Context'
import SmallTitle from '../components/SmallTitle'
import RemoveModal from '../components/RemoveModal'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'
import Loader from '../components/Loader'



const favourites = () => {
    const [selected, setSelected] = useState(null)
    const [modal, setModal] = useState(false)
    const { darkTheme, removeFav, showMenu, loader } = useContext(DataContext)

    return (
        <>
            <Header title='Characters | Favourites' />
            <Background>

                <div className="container">
                    <AnimatePresence exitBeforeEnter>
                        {loader && <Loader />}
                    </AnimatePresence>

                    <NavBar />


                    <SideBar />
                    <Menu />

                    <AnimateSharedLayout type='crossfade'>

                        <motion.div className={!showMenu ? 'remaining-close' : 'remaining'}
                            variants={homeBox}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <Title title='Favourites' />
                            <SmallTitle title='All Characters' path='/characters' />

                            <FavContent selected={selected} setSelected={setSelected} setModal={setModal} />
                        </motion.div>

                        <BigCharacter selected={selected} setSelected={setSelected} darkTheme={darkTheme} fav={'val'} />
                        {modal && <RemoveModal darkTheme={darkTheme} setModal={setModal} removeFav={removeFav} />}
                    </AnimateSharedLayout>
                </div>

            </Background>
        </>
    )
}

export default favourites
