import './App.css'
import React, { useState } from 'react';
import Page from './Components/Page/page'

function App() {


  const [firstName, setFirstName] = useState('Numan');
  const [lastName, setlastName] = useState('Shahid');
  const [firstImage, setFirstImage] = useState('public/user.png');

  let userAPI = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      console.log(data)
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      const firstImage = data.results[0].picture.medium;
      setFirstName(firstName);
      setFirstImage(firstImage);
      setlastName(lastName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



  return (
    <>

      <Page firstname={firstName} lastname={lastName} img={firstImage} handleAPI={userAPI} />
    </>
  )
}

export default App
