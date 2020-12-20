import React from 'react'
import { motion } from 'framer-motion'
import { cardHover, paging } from '../animation/framer-motion';

const Character = ({ index, item, darkTheme, setSelected, fav }) => {



    const setItem = () => {
        setSelected(item);
    }


    return (

        <motion.div className={darkTheme ? 'dark' : 'light'} layout onClick={setItem} layoutId={item.id}
            variants={paging} animate='animate' initial='initial' exit='exit'
            whileHover={cardHover}
        >
            <motion.div className="char-img" >
                <img src={item.img} alt={item.name} />
            </motion.div>
            <div className="char-name">
                <p>{item.name}</p>
            </div>

            {!fav && item.fav && <img className='char-star' src="/img/6.png" alt="star" />}
        </motion.div>


    )
}

export default Character
