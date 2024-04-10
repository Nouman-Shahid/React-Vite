import React from 'react'

const body = () => {
    return (
        <main className=' bg-gradient-to-r from-[#0D0E10] to-[#303538] flex px-24 justify-between items-center  h-screen'>

            <div className="flex-col  ">
                <p className='text-4xl font-sans font-bold my-3'>Build your Apps with Bertix</p>
                <p className='text-2xl w-96 font-sans  my-3'>We are team of talented designers & developers</p>
                <button className='hover:bg-blue-400  text-1xl py-1 px-2 font-sans rounded-3xl bg-blue-300 my-3'>Get Started</button>

            </div>


            <div className="flex items-center  ">

                <img className='mix-blend-darken h-80 rounded-3xl' src="public/mobile.png" alt="" />
            </div>


        </main>
    )
}

export default body
