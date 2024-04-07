import './App.css'
import React, { useState } from 'react';
import Page from './Components/Page/page'

function App() {

  const [posts, setPosts] = useState([
    {
      urlToImage: 'public/post1.jpg ',
      description: 'Read quotes of Philosphers on daily basis to get educated ',
      title: '100+ daily quotes',
      source: {
        name: 'Ahmed Yasin'
      }
    },
    {
      urlToImage: 'public/story3.jpg',
      description: 'All that happened in a span of 4 months that shows Babar is surely the main man here.Happy to hear that Babar Azam the captain is truly back!! ',
      title: '15th November 2023 - Babar Azam was forced to step down from captaincy.31st March 2024 - Babar Azam was literally begged to become the captain of Pakistan in White Ball cricket once again. ',
      source: {
        name: 'Qasim Shehzad '
      }
    },
    {
      urlToImage: 'public/post2.jpeg',
      description: 'Football is played on a rectangular field, typically with natural or artificial grass. The objective of the game is straightforward: teams must use their feet, head, or torso to maneuver the ball and score goals while adhering to a set of rules designed to ensure fair play and sportsmanship.',
      title: '"Football: A Global Passion Uniting Nations Beyond Borders: Exploring the World of Football"',
      source: {
        name: 'Zain Asim '
      }
    },

  ]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-07&sortBy=publishedAt&apiKey=90d1b45832a54d8abbd46ce373a3b92b");
      const data = await response.json();
      const shuffledArticles = shuffle(data.articles);
      const selectedArticles = shuffledArticles.slice(0, Math.min(4, shuffledArticles.length));
      setPosts(selectedArticles);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };



  const [firstName, setFirstName] = useState('Numan');
  const [lastName, setlastName] = useState('Shahid');
  const [firstImage, setFirstImage] = useState('public/user.png');
  const [groupName, setgroupName] = useState('10-D');

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
        img={firstImage} handleUserAPI={randomUserAPI} group={groupName}
        posts={posts} handleNewsAPI={fetchPosts} />
    </>
  )
}

export default App
