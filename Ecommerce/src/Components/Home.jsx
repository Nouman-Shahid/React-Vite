import React from "react";
import { ReactTyped } from "react-typed";
import { FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";
import HorizontalProductCards from "./HorizontalProductCards";

const Home = ({ products, userDetails }) => {
  return (
    <main className="flex flex-col items-center py-20 bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-xl px-4 md:px-6 lg:px-8">
        <p className="text-4xl font-bold text-gray-800 mb-2">Welcome</p>
        <p className="text-lg font-bold text-gray-500 mb-4">
          back{" "}
          {userDetails && userDetails.name && (
            <ReactTyped strings={[userDetails.name.first]} typeSpeed={100} />
          )}
        </p>

        <div className="flex items-center rounded-full bg-gray-200 px-3 py-1 mb-4">
          <FaSearch className="text-gray-400" />
          <input
            className="text-gray-700 outline-none bg-transparent rounded-full py-1 px-3 flex-1"
            placeholder="Search..."
          />
        </div>

        <HorizontalProductCards />

        <p className="text-3xl my-4 font-bold text-gray-700">Top Collections</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products
            .filter((item) => item.id < 5)
            .map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                rating={item.rating.rate}
                count={item.rating.count}
                price={item.price}
              />
            ))}
        </div>

        <p className="text-3xl my-4 font-bold text-gray-700">Discounts</p>
        <HorizontalProductCards />

        <p className="text-3xl my-6 font-bold text-gray-700">For You</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products
            .filter((item) => item.id >= 10 && item.id < 16)
            .map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                rating={item.rating.rate}
                count={item.rating.count}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
