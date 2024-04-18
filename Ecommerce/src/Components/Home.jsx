import React from 'react'
import { ReactTyped } from "react-typed";
import { FaSearch } from 'react-icons/fa';
import ProductCard from './ProductCard';
import HorizontalProductCards from './HorizontalProductCards';


const Home = ({ products, userDetails }) => {


    return (
        <main className='flex flex-col h-auto w-screen items-center py-1 pb-14 bg-gray-100  '>

            <div className="flex flex-col  h-[auto] w-screen py-4 px-5">
                <p className='text-[4.7vh] font-sans font-bold text-gray-800 '>Welcome</p>
                <p className='text-[2.7vh] font-bold text-gray-500 '>back {userDetails && userDetails.name && <ReactTyped strings={[userDetails.name.first]} typeSpeed={100} />}</p>
            </div>

            <div className="flex items-center rounded-[1vh] mt-2 bg-gray-200 px-3 py-1 w-[90%] border-2 border-gray-300">
                <FaSearch className='text-gray-400' />
                <input className='text-gray-700 outline-none bg-transparent rounded-[1vh]  py-1 px-3' placeholder="Search..." />
            </div>

            <HorizontalProductCards />

            <p className='text-[3.5vh] my-3 font-bold text-gray-700'>Top Collections</p>
            <div className="flex flex-row flex-wrap justify-center my-3">

                {
                      products.filter(item => item.id < 5).map((item) => (
                        <ProductCard key={item.id} id={item.id} image={item.image} title={item.title}
                            rating={item.rating.rate} count={item.rating.count} price={item.price} />
                    ))}

            </div>


            <p className='text-[3.5vh] my-3 font-bold text-gray-700'>Discounts</p>
            <HorizontalProductCards />


            <p className='text-[3.5vh] my-6 font-bold text-gray-700'>For You</p>
            <div className="flex flex-row flex-wrap justify-center ">

                {
                    products.filter(item => (item.id >= 10) && (item.id < 16)).map((item) => (

                        <ProductCard key={item.id} id={item.id} image={item.image} title={item.title}
                            rating={item.rating.rate} count={item.rating.count} price={item.price} />
                    ))}

            </div>
        </main>
    )
}

export default Home
