import React from 'react'
import { Link } from "react-router-dom"
import '../App.css'


const Navbar = () => {

    return (
        <div className='flex justify-between text-lg px-10 sm:px-16 md:px-20 py-4 sm:py-8 font-Gotham-Black '>
            <div className="image-container flex gap-1">
                <img src="./src/assets/happy.png" alt="Happy" className='w-9 h-9' />
                <img src="./src/assets/happy-face.png" alt="Happy Face" className='w-9 h-9' />
                <img src="./src/assets/in-love.png" alt="In Love" className='w-9 h-9' />
                <img src="./src/assets/sad.png" alt="Sad" className='w-9 h-9' />
                <img src="./src/assets/angry.png" alt="Angry" className='w-9 h-9' />
            </div>
            <nav className='list-none flex gap-14 '>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/contact'>Contact</Link></li>
            </nav>
        </div>
    )
}

export default Navbar