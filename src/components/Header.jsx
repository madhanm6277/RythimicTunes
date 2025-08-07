import React, { useState } from 'react';
import avatar from '../assets/avatar.png';

function Header() {

    const [isActive, setIsActive] = useState(false);


    return (
        <header className='w-full text-white flex justify-around items-center h-2/4 bg-primary py-4 border-b-2 border-secondary'>
            <h1 className='text-2xl font-semibold'>Discover</h1>

            {/* <div className="flex"> */}
            <form action=""
                className={`mx-2 flex justify-start items-center border-2  px-2 py-2 w-4/12 rounded-xl bg-secondary ${isActive ? 'border-brand border-2' : 'border-transparent'}`}>
                <i className="fas fa-search"></i>
                <input type="text"
                    onClick={() => {
                        setIsActive(true);
                    }}
                    onBlur={() => {
                        setIsActive(false)
                    }}
                    name="search" id="search"
                    placeholder='Search for music...'
                    className='ms-2 outline-0 border-0 w-full' />
            </form>

            <img src={avatar}
                className="bg-red-50 w-10 h-10 rounded-full"
                alt="No image"
            />
            {/* </div> */}

        </header>
    )
}

export default Header