import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import './styles.css'
import { useHistory } from 'react-router-dom'

const Success = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className='success-container'>
            <FiCheckCircle onClick={handleClick} className='success-icon' size={200} color='#08a3fc' />
            <h2>Success!</h2>
            <p>Your inn was registered!</p>
        </div>
    )
}

export default Success