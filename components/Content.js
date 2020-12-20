import React, { useContext } from 'react'
import { ContentDiv } from '../animation/styled'
import { motion } from 'framer-motion'
import { hoverLinks } from '../animation/framer-motion'
import Link from 'next/link'
import { DataContext } from './Context'


const Content = () => {

    const { character } = useContext(DataContext)


    return (
        <ContentDiv>
            <div className='grid-1'>
                <div className="wide-grid">
                    {/* <img src="/img/4.png" alt="image" /> */}
                    <div className="text">
                        <h3>View all characters</h3>
                        <br />
                        <p>There are {character.length} charcaters. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, alias? Nesciunt dolore quos quae? Quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <Link href='/characters'>
                            <motion.a whileHover={hoverLinks}>
                                View characters
                            </motion.a>
                        </Link>
                    </div>
                </div>
                <div className='small-div1 '>
                    {/* <img src="/img/7.png" alt="image" /> */}
                    <div className="text">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum.</p>
                        <motion.div whileHover={hoverLinks} className='circle-triangle'></motion.div>
                    </div>
                </div>
                <div className='small-div1 small-div'>
                    {/* <img src="/img/9.png" alt="image" /> */}
                    <div className="text">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum.</p>
                        <motion.div whileHover={hoverLinks} className='circle-triangle'></motion.div>
                    </div>
                </div>

            </div>
            <div>

            </div>
        </ContentDiv>
    )
}

export default Content
