
import Header from '../components/Header'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { homeBox, hover } from '../animation/framer-motion'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { DataContext } from '../components/Context'
import Background from '../components/Background'
import SideBar from '../components/SideBar'
import Title from '../components/Title'
import Content from '../components/Content'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'


export default function Home() {
  const { showMenu } = useContext(DataContext)



  return (
    <>
      <Header title='Home | Welcome' />
      <>
        <Background>
          <div className="container">
            <SideBar />
            <Menu />
            <NavBar />
            <motion.div className={!showMenu ? 'remaining-close' : 'remaining'}
              variants={homeBox}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <Title title={'Home'} />
              <Content />
            </motion.div>
          </div>
        </Background>
      </>
    </>
  )
}
