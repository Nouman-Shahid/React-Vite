import React from 'react'

const navbar = () => {
    return (
        <nav className='bg-blue-700 p-2 flex items-center justify-evenly h-auto'>

            <h1 className='text-white font-mono font-bold text-center text-3xl ' >Bertix</h1>

            <ul className='flex space-x-6 px-2'>
                <li className='cursor-pointer hover:text-red-300  text-white '>Home</li>
                <l className='cursor-pointer hover:text-red-300  text-white '>About</l>
                <li className='cursor-pointer hover:text-red-300  text-white '>Features</li>
                <li className='cursor-pointer hover:text-red-300  text-white '>Gallery</li>
                <li className='cursor-pointer hover:text-red-300  text-white '>Team</li>
                <li className='cursor-pointer hover:text-red-300  text-white '>Prcing</li>
                <select className='cursor-pointer bg-transparent hover:text-red-300  text-white ' >
                    <option className='cursor-pointer bg-white  text-black ' selected >Drop Down</option>
                    <option className='cursor-pointer bg-white  text-black ' >Office</option>
                </select>
                <li className='cursor-pointer hover:text-red-300  text-white '>Help</li>
                <li className='cursor-pointer hover:text-red-300  text-white '>Contact</li>
            </ul>
        </nav>
    )
}

export default navbar
