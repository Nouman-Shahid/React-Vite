import React, { useState } from 'react';
import Navbar from '../navBar/navbar';
import Leftbar from '../leftSideBar/leftbar';
import Posts from '../Posts/posts';
import Rightbar from '../rightSideBar/rightbar';
import styles from './page.module.css'

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
        <>

            <Navbar />

            <div className={styles.page}>
                <Leftbar />
                <Posts />
                <Rightbar />
            </div>


        </>
    );
};

export default Page;
