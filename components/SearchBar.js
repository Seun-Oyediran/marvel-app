import React from 'react'
import { InputStyle, SelectStyle, OptionStyle } from '../animation/styled'

const SearchBar = ({ darkTheme, setSearch, setDesc }) => {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleChange2 = (e) => {
        setDesc(e.target.value);
    }

    return (
        <div className='search-bar'>
            <InputStyle darkTheme={darkTheme} placeholder='Filter: Enter Name' type="text" onChange={handleChange} />
            <SelectStyle darkTheme={darkTheme} onChange={handleChange2} >
                <OptionStyle value="both">
                    All Characters
                </OptionStyle>
                <OptionStyle value="with">
                    Characters With Description
                </OptionStyle>
                <OptionStyle value="without">
                    Characters Without Description
                </OptionStyle>
            </SelectStyle>
        </div>
    )
}

export default SearchBar
