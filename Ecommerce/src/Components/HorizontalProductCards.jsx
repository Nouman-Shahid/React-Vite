import React from 'react'

const HorizontalProductCards = () => {
    let cardItems = [
        {
            discount: '50% off',
            code: 'with code FS3427',
            img: 'public/bag.jpg'
        },
        {
            discount: '30% off',
            code: 'with code AV1880',
            img: 'public/case.jpg'
        },
        {
            discount: '70% off',
            code: 'with code BD1923',
            img: 'public/shoes.png'
        },
    ]
    return (
        <div className='overflow-x-scroll flex flex-wrap w-screen py-2 px-2 my-3'>
            <div className="flex flex-row gap-6 p-2">
                {
                    cardItems.map((item) => (
                        <div key={item.code} className="flex flex-col h-[23vh] w-[75vw] rounded-[2vh]">
                            <img src={item.img} className='size-[100%] rounded-[2vh] opacity-80' />
                            <div className="flex flex-col mt-[-22vh] px-2 w-fit  z-10">
                                <p className='font-bold text-gray-100 font-serif'>{item.discount}</p>
                                <p className='text-[2.3vh] text-gray-100'>on everything today</p>
                            </div>
                            <div className="flex flex-col mt-[4vh] px-2 w-fit z-10">
                                <p className='text-[1.8vh] font-semibold text-gray-100'>{item.code}</p>
                                <button className='text-[2.2vh] font-sans font-semibold mt-2 bg-zinc-800 rounded-[1vh] border border-gray-600 text-gray-100 w-[90%] active:bg-zinc-700 '>Get Now</button>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default HorizontalProductCards
