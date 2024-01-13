import React from 'react'
import { Btn } from './Btn'

function Navbar() {
    return (<>
        <div className='flex justify-between px-3 w-full items-center sticky top-0 bg-purple-800 text-white font-bold'>
            <div>
                <h1 className='lg:text-3xl xl:text-4xl py-2 cursor-pointer hover:text-orange-200'>TODO APP</h1>
            </div>            
            <div className='flex items-center cursor-pointer text-xs lg:text-lg xl:text-2xl space-x-5'>
                <h6 className='hover:text-orange-200'>HOME</h6>
                <h6 className='hover:text-orange-200'>Library</h6>
                <h6 className='hover:text-orange-200'>About US</h6>
            </div>
            <div className='flex items-center'>
                <input placeholder="Search" className="px-1 text-black" />
                <Btn text={<i className='fa-solid fa-magnifying-glass mx-1'></i>} />
            </div>
        </div>
    </>
    )
}

export { Navbar }