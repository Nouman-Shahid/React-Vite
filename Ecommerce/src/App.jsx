import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; import './App.css'
import Navbar from './Components/Navbar'
import Bottombar from './Components/Bottombar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { useState, useEffect } from "react";
import Settings from "./Components/Settings";

function App() {

  const [products, setProducts] = useState([]);

  const [userDetails, setUserDetails] = useState();

  const handleProductsAPI = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      console.log(data)
      setProducts(data)

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const handleUserAPI = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();

      const user = data.results[0]

      setUserDetails(user);
      console.log(user);

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    handleUserAPI();
    handleProductsAPI()
  }, []);


  return (
    <>

      <BrowserRouter>
        <Navbar userDetails={userDetails} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings userDetails={userDetails} handleUserAPI={handleUserAPI} />} />
        </Routes>
        <Bottombar />
      </BrowserRouter>


    </>
  )
}

export default App
