import React from "react";

const HorizontalProductCards = () => {
  let cardItems = [
    {
      discount: "50% off",
      code: "with code FS3427",
      img: "public/bag.jpg",
    },
    {
      discount: "30% off",
      code: "with code AV1880",
      img: "public/case.jpg",
    },
    {
      discount: "70% off",
      code: "with code BD1923",
      img: "public/shoes.png",
    },
  ];
  return (
    <div className="overflow-x-scroll flex w-full py-2 px-2 my-3">
      <div className="flex flex-row gap-6 p-2">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-[23vh] w-[60vw] sm:w-[45vw] md:w-[25vw]  rounded-[2vh]"
          >
            <img
              src={item.img}
              alt="product"
              className="w-full h-full object-fill rounded-[2vh] opacity-80"
            />
            <div className="flex flex-col mt-[-22vh] px-2 w-fit z-10">
              <p className="font-bold text-gray-100 font-serif">
                {item.discount}
              </p>
              <p className="text-sm text-gray-100">on everything today</p>
            </div>
            <div className="flex flex-col mt-[4vh] px-2 w-fit z-10">
              <p className="text-xs font-semibold text-gray-100">{item.code}</p>
              <button className="text-sm font-semibold mt-2 bg-zinc-800 rounded-[1vh] border border-gray-600 text-gray-100 w-[90%] active:bg-zinc-700">
                Get Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalProductCards;
