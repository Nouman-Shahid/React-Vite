import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; import './App.css'
import Navbar from './Components/Navbar'
import Bottombar from './Components/Bottombar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([]);

  const [userImg, setUserImg] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

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
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      const newUserImg = data.results[0].picture.medium;
      const newUserName = `${firstName} ${lastName}`;
      const newUserEmail = firstName.toLowerCase() + '@gmail.com'

      setUserEmail(newUserEmail);
      setUserName(newUserName);
      setUserImg(newUserImg);

      console.log(data);
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
        <Navbar userName={userName} userImg={userImg} userEmail={userEmail} handleUserAPI={handleUserAPI} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Bottombar />
      </BrowserRouter>


    </>
  )
}

export default App
