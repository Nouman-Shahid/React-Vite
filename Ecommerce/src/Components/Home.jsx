import React from 'react'
import { ReactTyped } from "react-typed";
import { FaStar } from "react-icons/fa6";


const Home = ({ products }) => {
    return (
        <main className='flex flex-col h-auto w-screen items-center py-16 overflow-x-hidden '>

            {/* <img src="public/bg.jpg" className='w-screen h-[45vh] opacity-90' />

            <div className="flex flex-col absolute top-[9.5vh] h-[45vh] w-screen bg-black/[.7] justify-between py-20  px-10">
                <p className='text-[3vh] font-semibold text-white '>Looking for something special?</p>
                <ReactTyped strings={["Elegant Women's Attire.", "Sleek Men's Fashion.", "Fashion-forward Accessories.",]} typeSpeed={70} backSpeed={60} className=' text-[3vh] font-bold text-blue-300  font-sans' loop />

                <button className='text-blue-100 bg-blue-500 w-fit rounded-2xl px-2'>Shop now</button>
            </div> */}


            <div className="flex flex-row flex-wrap justify-center">
                {
                    products.map((item) => (
                        <div className="flex flex-col h-auto w-[45vw] border-2 items-center justify-between border-gray-400 p-2 m-2 rounded-2xl" key={item.id}>
                            <img src={item.image} className='size-[15vh]' />
                            <p className='text-[2.2vh] m-1 font-semibold'>{item.title}</p>
                            <div className="flex items-center justify-start w-[100%] space-x-1 ">
                                <FaStar className='size-[2vh] text-yellow-500' />
                                <p className='text-[2vh] text-gray-500'>{`${item.rating.rate} (${item.rating.count}) - ${item.rating.count} Sold `}</p>
                            </div>
                            <p className='text-[2.5vh] w-[100%] font-sans  text-start m-2 font-bold text-red-900'>{`Price :${item.price}$`}</p>
                            <div className="flex items-center justify-start w-[100%] space-x-1 ">
                                <p className='text-[1.8vh] border border-gray-400 px-1 text-gray-600 font-semibold my-1'>Free Delivery</p>
                            </div>
                            <button className='text-gray-100 bg-yellow-500 py-1 px-3 m-3 rounded-[1vh]'>Add to cart</button>
                        </div>
                    ))
                }

            </div>

        </main>
    )
}

export default Home
