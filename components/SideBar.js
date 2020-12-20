import React, { useContext } from 'react'
import { DataContext } from './Context'
import { SideBars } from '../animation/styled'
import Switch from 'react-switch'
import Link from 'next/link'
import Close from './Close'


const ulLinks = [
    { name: 'Home', path: '/' },
    { name: 'Characters', path: '/characters' },
    { name: 'Favourites', path: '/favourites' },
    { name: 'About Us', path: '/about' },
]

const SideBar = () => {
    const { darkTheme, router, setDarkTheme, showMenu, setShowMenu } = useContext(DataContext)
    const handleChange = () => {
        setDarkTheme(prev => prev = !prev)
    }

    const className = () => {
        let a
        let b
        a = darkTheme ? 'side-bar background dark-bg' : 'side-bar background light-bg'
        b = showMenu ? 'side-bar-open' : 'side-bar-close'
        return `${a} ${b}`
    }

    return (
        <div className={className()}>
            {/* <Close /> */}
            <div>
                <div className="profile">
                    <img src="/img/digita.jpg" alt="digita" />
                    <h4>Oyediran Seun | Digita</h4>
                    <h6 className='light-text'>+2347065325645</h6>
                </div>
                <div className="side-bar-links">
                    <ul>
                        {ulLinks.map((item, index) => (
                            <Link href={item.path} key={index} >
                                <a onClick={() => { setShowMenu(false) }}>
                                    <SideBars active={router.route == item.path ? true : false} darkTheme={darkTheme}>
                                        {item.name}
                                    </SideBars>
                                </a>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="theme-selector">
                    <label >
                        <Switch onChange={handleChange} checked={darkTheme} checkedIcon={false} uncheckedIcon={false} height={22} width={50} onColor={'#120a8f'} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SideBar
