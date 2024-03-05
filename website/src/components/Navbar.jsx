import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
function Navbar() {
    const [nav,setNav] = useState(false)
    
    const handlenav = () => {
        setNav(!nav)
    }
  return (
    
    <>
    <nav>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-green-500 text-3xl font-bold font-mono m-8'>REACT.</h1>
        <ul className='hidden md:flex'> 
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        {/* <button className='rounded-lg px-10 py-[2px] bg-white text-black ml-3'>Get started</button> */}
        <div onClick={handlenav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-black border-r-gray-900 m-4 ease-in-out duration-500': 'fixed left-[-100%]'}>
            <ul className='pt-12 uppercase p-4 mt-6'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar