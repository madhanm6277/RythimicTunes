import React from 'react'

function SideMenu() {
    return (
        <div className='bg-primary border-2 border-r-secondary h-screen w-2/12 p-4'>
            <Header></Header>
        </div>
    )
}

function Header() {
    return (
        <div className='flex justify-evenly items-center border-b-2 border-secondary py-4'>
            <div className="w-5 h-5 bg-brand"></div>
            <h1 className="font-bold text-brand text-xl">Rythimic Tunes</h1>
        </div>
    )
}

export default SideMenu