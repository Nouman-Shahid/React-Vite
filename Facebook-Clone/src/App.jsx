import './App.css'
import React, { useState } from 'react';
import Page from './Components/Page/page'

function App() {


  const [firstName, setFirstName] = useState('Numan');
  const [lastName, setlastName] = useState('Shahid');
  const [firstImage, setFirstImage] = useState('public/user.png');
  const [groupName, setgroupName] = useState('10-D');

  // const [articles, setArticles] = useState([]);

  // let newsAPI = async () => {
  //   try {
  //     const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-06&sortBy=publishedAt&apiKey=6464e885a15d4542a99f728cd608c184');
  //     const data = await response.json();
  //     const randomIndexes = articles.from({ length: 100 }, (_, i) => i).sort(() => 0.5 - Math.random()).slice(0, 5);
  //     const selectedArticles = randomIndexes.map(index => data.articles[index]);
  //     setArticles(selectedArticles);
  //     console.log(selectedArticles)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // newsAPI()

  let randomUserAPI = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      const firstImage = data.results[0].picture.medium;
      const groupName = data.results[0].location.city;
      setFirstName(firstName);
      setFirstImage(firstImage);
      setlastName(lastName);
      setgroupName(groupName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



  return (
    <>

      <Page firstname={firstName} lastname={lastName}
        img={firstImage} handleAPI={randomUserAPI} group={groupName} />
    </>
  )
}

export default App
