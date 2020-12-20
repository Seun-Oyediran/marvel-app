import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { DataContext } from './Context'
import Character from './Character'
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion'
import { homeBox, paging } from '../animation/framer-motion'
import { JumpInput } from '../animation/styled'



const CharsContent = ({ selected, setSelected }) => {
    const [chars, setChars] = useState([])
    const [page, setPage] = useState(1)
    const [paginated, setPaginated] = useState([])
    const [search, setSearch] = useState('')
    const [jumpError, setJumpError] = useState(null)
    const [pageChange, setPageChange] = useState(0)
    const [desc, setDesc] = useState('both')

    const { darkTheme, character, limit } = useContext(DataContext)





    useEffect(() => {
        setChars(prev => prev = [...character])
    }, [character])

    useEffect(() => {
        pagination()
        setPageChange(page)
    }, [chars, page])

    useEffect(() => {
        filterChars()
    }, [search, desc])

    useEffect(() => {
        if (jumpError) {
            // setTimeout(setJumpError(null), 5000)
            setTimeout(() => {
                setJumpError(null)
            }, 5000);
        }
    }, [jumpError])



    const filterChars = () => {
        let filtered = [...character]
        filtered = filtered.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        if (desc === 'with') {
            filtered = filtered.filter(item => item.description != '')
        } else if (desc == 'without') {
            filtered = filtered.filter(item => item.description == '')
        }
        setChars(prev => prev = [...filtered])
        setPage(1)
    }

    const pagination = () => {
        let start = (page - 1) * limit
        let end = page * limit
        let data = chars.slice(start, end)
        setPaginated(data)
    }

    const prevPage = () => {
        window.scrollTo({ top: 0 })
        setPage(prev => prev = prev - 1)
    }


    const nextPage = () => {
        window.scrollTo({ top: 0 })
        setPage(prev => prev = prev + 1)
    }

    const handleJump = (e) => {
        if (e.which == 13) {
            if (pageChange < 1 || pageChange > Math.ceil(chars.length / limit)) {
                setJumpError(`Value must be between 0 and ${Math.ceil(chars.length / limit) + 1}`)
                return
            } else {
                window.scrollTo({ top: 0 })
                setPage(pageChange)
                setJumpError(null)
            }
        }
    }


    const handleChange = (e) => {
        setPageChange(parseInt(e.target.value))
    }


    return (
        <div className='chars-box'>
            <SearchBar darkTheme={darkTheme} setSearch={setSearch} setDesc={setDesc} />
            <AnimatePresence exitBeforeEnter>
                <motion.div className='chars-grid'>

                    {paginated.map((item, index) => (

                        <Character key={item.id + item.name} item={item} index={index} darkTheme={darkTheme} setSelected={setSelected} />

                    ))}
                    {paginated.length == 0 && <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>No Character Was Found</h2>}
                </motion.div>
            </AnimatePresence>
            <br />

            {jumpError && <div className="jump">
                <p>{jumpError} !!!</p>
            </div>}
            <br />
            {Math.ceil(chars.length / limit) > 1 && <div className="page-jump">
                <span>Jump To Page</span>
                <JumpInput darkTheme={darkTheme} type="number" value={pageChange} onKeyPress={handleJump} onChange={handleChange} />
                <span>/ {Math.ceil(chars.length / limit)}</span>
            </div>}

            <div className="pagination">
                {page > 1 && <button className="prev" onClick={prevPage}>Prev</button>}
                {(page * limit) < chars.length && <button className="next" onClick={nextPage}>next</button>}
            </div>

        </div>
    )
}

export default CharsContent
