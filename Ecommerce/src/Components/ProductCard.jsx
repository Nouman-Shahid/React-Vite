import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ id, image, title, rating, count, price }) => {
  return (
    <div className="flex flex-col w-[full] md:w-[45vw] lg:w-[30vw] xl:w-[20vw] border-2 border-gray-300 p-2 m-2 rounded-md bg-gray-200">
      <img
        src={image}
        alt="product"
        className="w-full h-[25vh] object-contain rounded-md mix-blend-multiply"
      />
      <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold mt-1">
        {title.split(" ").slice(0, 4).join(" ")}
        {title.split(" ").length > 4 ? " ..." : ""}
      </p>
      <div className="flex items-center justify-start mt-1">
        <FaStar className="text-yellow-500 mr-1" />
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-500">{`${rating} (${count}) - ${count} Sold`}</p>
      </div>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-red-900 mt-1">{`Price: ${price}$`}</p>
      <div className="flex items-center justify-start mt-1">
        <p className="text-xs border border-gray-400 px-1 text-gray-600 font-semibold">
          Free Delivery
        </p>
      </div>
      <button className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 bg-gray-800 active:bg-gray-600 py-1 mt-2 rounded-md w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
