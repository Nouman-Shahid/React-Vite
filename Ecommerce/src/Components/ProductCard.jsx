import React from 'react'
import { FaStar } from "react-icons/fa6";


const ProductCard = ({ id, image, title, rating, count, price }) => {
    return (
        <div className="flex flex-col h-auto w-[45vw] border-2 items-center justify-center border-gray-300 p-2 m-2 rounded-[2vh] bg-gray-200" key={id}>
            <img src={image} className='size-[15vh] object-fill mix-blend-multiply' />
            <p className='text-[2.2vh] m-1 font-semibold'>
                {title.split(' ').slice(0, 4).join(' ')}
                {title.split(' ').length > 4 ? ' ...' : ''}
            </p>
            <div className="flex items-center justify-start w-[100%] space-x-1 ">
                <FaStar className='size-[2vh] text-yellow-500' />
                <p className='text-[2vh] text-gray-500'>{`${rating} (${count}) - ${count} Sold `}</p>
            </div>
            <p className='text-[2.5vh] w-[100%] font-sans  text-start m-2 font-bold text-red-900'>{`Price :${price}$`}</p>
            <div className="flex items-center justify-start w-[100%] space-x-1 ">
                <p className='text-[1.8vh] border border-gray-400 px-1 text-gray-600 font-semibold my-1'>Free Delivery</p>
            </div>
            <button className='text-gray-100 bg-gray-800 active:bg-gray-600 w-[100%] py-1  my-3 rounded-[1vh]'>Add to cart</button>
        </div>
    )
}

export default ProductCard
