import React, { useState } from 'react';

const Page = () => {
    const [firstName, setFirstName] = useState('');
    const [firstImage, setFirstImage] = useState('');

    const userAPI = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            console.log(data)
            const firstName = data.results[0].name.first;
            const firstImage = data.results[0].picture.medium;
            setFirstName(firstName);
            setFirstImage(firstImage);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <img src={firstImage} alt="" />
            <h1>{firstName}</h1>
            <button onClick={userAPI}>Click me</button>
        </div>
    );
};

export default Page;
