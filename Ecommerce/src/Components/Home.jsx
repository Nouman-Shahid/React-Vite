import React from 'react'
import { ReactTyped } from "react-typed";
import { FaStar } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';


const Home = ({ products, userDetails }) => {
    return (
        <main className='flex flex-col h-auto w-screen items-center py-12 bg-gray-100  '>


            <div className="flex flex-col  h-[auto] w-screen py-4 px-5">
                <p className='text-[4.7vh] font-bold text-black '>Welcome</p>
                <p className='text-[2.7vh] font-bold text-gray-400 '>back {userDetails && userDetails.name && <ReactTyped strings={[userDetails.name.first]} typeSpeed={80} />}</p>
            </div>


            <div className="flex items-center rounded-[1vh] mt-2 bg-gray-200 px-3 py-1 w-[90%] border border-gray-300">
                <FaSearch className='text-gray-400' />
                <input className='text-gray-700 outline-none bg-transparent rounded-[1vh]  py-1 px-3' placeholder="Search..." />
            </div>

            <div className='overflow-x-scroll flex flex-wrap w-screen py-4 px-2'>
                <div className="flex flex-row gap-6 p-2">

                    <div className="flex flex-col h-[23vh] w-[75vw] rounded-[2vh]">
                        <img src="public/bag.jpg" className='size-[100%] rounded-[2vh] opacity-70' />
                        <div className="flex flex-col mt-[-22vh] px-2 w-fit  z-10">
                            <p className='font-bold text-gray-100 font-serif'>50% off</p>
                            <p className='text-[2.3vh] text-gray-100'>on everything today</p>
                        </div>
                        <div className="flex flex-col mt-[4vh] px-2 w-fit z-10">
                            <p className='text-[1.8vh] font-semibold text-gray-100'>with code: FS3427</p>
                            <button className='text-[2.2vh] font-sans font-semibold mt-2 bg-zinc-800 rounded-[1vh] text-gray-100 w-[90%] active:bg-zinc-700 '>Get Now</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[23vh] w-[75vw] rounded-[2vh]">
                        <img src="public/bag2.jpg" className='size-[100%] object-cover rounded-[2vh] opacity-70' />
                        <div className="flex flex-col mt-[-22vh] px-2 w-fit  z-10">
                            <p className='font-bold text-gray-100 font-serif'>50% off</p>
                            <p className='text-[2.3vh] text-gray-100'>on everything today</p>
                        </div>
                        <div className="flex flex-col mt-[4vh] px-2 w-fit z-10">
                            <p className='text-[1.8vh] font-semibold text-gray-100'>with code: FS3427</p>
                            <button className='text-[2.2vh] font-sans font-semibold mt-2 bg-zinc-800 rounded-[1vh] text-gray-100 w-[90%] active:bg-zinc-700 '>Get Now</button>
                        </div>
                    </div>


                </div>
            </div>



            {/* 
            <div className="flex flex-row flex-wrap justify-center">
                {products.sort((a, b) => a.id - b.id).map((item) => (
                    <div className="flex flex-col h-auto w-[45vw] border items-center justify-center border-zinc-300 p-2 m-2 rounded-2xl" key={item.id}>
                        <img src={item.image} className='size-[19vh] object-fill mix-blend-multiply' />
                        <p className='text-[2.2vh] m-1 font-semibold'>
                            {item.title.split(' ').slice(0, 4).join(' ')}
                            {item.title.split(' ').length > 4 ? ' ...' : ''}
                        </p>
                        <div className="flex items-center justify-start w-[100%] space-x-1 ">
                            <FaStar className='size-[2vh] text-yellow-500' />
                            <p className='text-[2vh] text-gray-500'>{`${item.rating.rate} (${item.rating.count}) - ${item.rating.count} Sold `}</p>
                        </div>
                        <p className='text-[2.5vh] w-[100%] font-sans  text-start m-2 font-bold text-red-900'>{`Price :${item.price}$`}</p>
                        <div className="flex items-center justify-start w-[100%] space-x-1 ">
                            <p className='text-[1.8vh] border border-gray-400 px-1 text-gray-600 font-semibold my-1'>Free Delivery</p>
                        </div>
                        <button className='text-gray-100 bg-yellow-500 active:bg-yellow-700 w-[100%] py-1  my-3 rounded-[1vh]'>Add to cart</button>
                    </div>
                ))}
            </div> */}


        </main>
    )
}

export default Home
