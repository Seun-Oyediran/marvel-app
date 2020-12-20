import React, { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DataContext } from './Context'

import { pager } from '../animation/framer-motion'


const BigCharacter = ({ selected, setSelected, darkTheme, fav }) => {
    const [added, setAdded] = useState(false)
    const { addToFav, removeFromFav } = useContext(DataContext)



    const handleClick = (e) => {
        if (e.target.classList.contains('big-character')) {
            setSelected(null)
            setAdded(false)
        }
    }
    const add = () => {
        addToFav(selected.id)
        setAdded(true)
    }
    const remove = (e) => {
        setSelected(null)
        removeFromFav(selected.id)
    }

    return (

        <AnimatePresence>
            {added && <motion.div className="char-added"
                variants={pager} animate='animate' initial='initial' exit='exit'>
                <p>
                    Added  <i className="fas fa-check"></i>
                </p>

            </motion.div>}
            {selected && <motion.div key={selected.id} className={darkTheme ? 'big-character big-character-dark' : 'big-character'} onClick={handleClick}>
                <motion.div className="big-character-content" layoutId={selected.id}>
                    <div className='img-con'>
                        <img src={selected.img} alt={selected.name} />
                    </div>
                    <div className="details">
                        <h2>{selected.name}</h2>
                        {selected.description != '' ? <p>{selected.description}</p> : <p style={{ textAlign: 'center', width: '100%' }}><b>N/A</b></p>}
                        {!selected.fav && <div className="remove-button add" onClick={add}>
                            {!fav && <button>Add to favourites</button>}
                        </div>}
                        {selected.fav && <div className='favourite-added'>
                            {!fav && <button >Added To Favourites <i className="fas fa-check"></i></button>}
                        </div>}
                        {fav && <div className="remove-button " onClick={remove}>
                            <button>Remove</button>
                        </div>}
                    </div>

                </motion.div>

            </motion.div>}
            {/* {selected && <div className="blur-background"></div>} */}
        </AnimatePresence >

    )
}

export default BigCharacter
