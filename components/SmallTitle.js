import React from 'react'
import Link from 'next/link'

const SmallTitle = ({ title, img, nos, path }) => {


    return (
        <div className='small-title-box'>
            <Link href={path}><a >
                <div className='small-title'>
                    {img && <img src={img} alt="image" />}
                    <p>{title}</p>
                    {nos && nos != 0 && <span>{nos}</span>}
                </div>
            </a></Link>

        </div >
    )
}

export default SmallTitle
