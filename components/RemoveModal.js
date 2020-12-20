import React from 'react'
import { Remove } from '../animation/styled'

const RemoveModal = ({ darkTheme, setModal, removeFav }) => {

    const closeModal = (e) => {
        if (e.target.classList.contains('remove-box')) {
            setModal(false)
        }
    }

    const handleRemove = () => {
        removeFav()
        setModal(false)
    }

    return (
        <Remove darkTheme={darkTheme} className='remove-box'
        // onClick={closeModal}
        >
            <div className="remove-modal">
                <h3>Are you sure you want to remove all?</h3>
                <div className="btns">
                    <p style={{ backgroundColor: '#c62828' }} onClick={handleRemove}>Yes</p>
                    <p style={{ backgroundColor: '#01579b' }} onClick={() => { setModal(false) }}>No</p>
                </div>

            </div>
        </Remove>
    )
}

export default RemoveModal
