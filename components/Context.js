import React, { useState, useEffect } from 'react'

import { characters } from '../Data/Character'
import { useRouter } from 'next/router'
export const DataContext = React.createContext()

const indexKey = 'Marvel-App'
const DARK_THEME_KEY = indexKey + 'Theme Key'
const FAV_KEY = indexKey + 'Favourite KEy'



export default function Context({ children }) {
    const [character, setCharacter] = useState([])
    const [darkTheme, setDarkTheme] = useState(false)
    const [favourites, setFavourites] = useState([])
    const [rawChars, setRawChars] = useState([])
    const [showMenu, setShowMenu] = useState(false)
    const [loader, setLoader] = useState(true)

    const router = useRouter()
    const limit = 25
    useEffect(() => {
        start()
        let data = JSON.parse(localStorage.getItem(DARK_THEME_KEY))
        if (data) {
            setDarkTheme(data)
        }
        setTimeout(() => {
            setLoader(false)
        }, 3000);

    }, [])


    const start = () => {
        let filteredCharacters = characters.filter(item => item.img.split('_')[1] != 'not')

        let localFav = JSON.parse(localStorage.getItem(FAV_KEY))
        let ids = []
        if (localFav) {
            setFavourites(localFav)
            ids = localFav.map(item => item.id)
        }
        setRawChars(filteredCharacters)
        filteredCharacters = filteredCharacters.map(item => {
            if (ids.indexOf(item.id) > -1) {
                return { ...item, fav: true }
            } else {
                return { ...item, fav: false }
            }
        })
        setCharacter(prev => prev = [...prev, ...filteredCharacters])
    }


    useEffect(() => {
        localStorage.setItem(DARK_THEME_KEY, JSON.stringify(darkTheme))

    }, [darkTheme])

    useEffect(() => {
        localStorage.setItem(FAV_KEY, JSON.stringify(favourites))
        console.log('saved');
    }, [favourites])


    const addToFav = (id) => {
        let item = character.find(item => item.id == id)
        item.fav = true
        setFavourites(prev => prev = [...prev, item])
    }

    const removeFromFav = (id) => {
        let item = character.find(item => item.id == id)
        item.fav = false
        let newFavs = favourites.filter(item => item.id != id)
        setFavourites(prev => prev = [...newFavs])
    }

    const removeFav = () => {
        setFavourites([])
        localStorage.removeItem(FAV_KEY)
        setCharacter(rawChars)
    }






    return (
        <DataContext.Provider value={{ character, darkTheme, router, setDarkTheme, favourites, setFavourites, limit, addToFav, removeFromFav, removeFav, showMenu, setShowMenu, loader }}>
            {children}
        </DataContext.Provider>
    )
}
