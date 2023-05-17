import React from 'react'
import Search from './partials/Search'

const NavBar = () => {
    return (
        <div className=' bg-gray-900 text-white flex px-10 h-14 items-center justify-between ' >
            <h1 className=' text-4xl font-extrabold ' > Yassine </h1>
            <ul className=' flex space-x-4 items-center ' >
                <li className=' font-bold hover:text-blue-400 hover:tracking-wide transition-all  duration-300' >Accueil</li>
                <li  className=' font-bold hover:text-blue-400 hover:tracking-wide transition-all duration-300'>Article par categorie</li>
                <li className=' font-bold hover:text-blue-400 hover:tracking-wide transition-all duration-300' ><Search placeholder = {"recharche"}/></li>
            </ul>
            <button className=' bg-blue-400 px-5 py-1 font-bold rounded-md uppercase hover:bg-blue-400 transition-all duration-300'>Conexion</button>
        </div>
    )
    
    }
export default NavBar