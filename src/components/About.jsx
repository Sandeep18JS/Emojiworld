import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/blogs')
    }
    return (
        <div className='mt-20'>
            <h1>About us </h1>
            <p>lets goooo</p>
            <button onClick={handleClick}>for more</button>
        </div>
    )
}

export default About