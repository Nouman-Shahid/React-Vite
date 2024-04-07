import React, { useState } from 'react'
import Textpost from './textpost/textpost';
import Buttons from './Buttons/btn';
import styles from './posts.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const Posts = ({ fullimg, firstname, lastname }) => {

    let posts = [
        {
            id: 1,
            userImage: 'public/person1.png',
            userName: 'Muhammad Salman',
            userPost: 'public/story3.jpg',
        },
        {
            id: 2,
            userImage: 'public/person2.png',
            userName: 'Umer Ahmed',
            userPost: 'public/post1.jpg',
        },
        {
            id: 3,
            userImage: 'public/person3.png',
            userName: 'Agha Ali',
            userPost: 'public/post2.jpeg',
        },
    ]

    const stories = [
        {
            userImage: 'public/person1.png',
            userStory: 'public/story1.jpeg',
            userName: 'Muhammad Salman',
        },
        {
            userImage: 'public/person2.png',
            userStory: 'public/story4.png',
            userName: 'Saeed Ali',
        },
        {
            userImage: 'public/person3.png',
            userStory: 'public/story3.jpg',
            userName: 'Rana Bilal Ahmed',
        },
    ];


    return (
        <main className={styles.main}>
            <div className={styles.stories}>
                <div className={styles.card}>
                    <img src={fullimg} alt="" />
                    <FaCirclePlus className={styles.add} />
                    <h5>Create Story</h5>
                </div>

                {stories.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <img src={item.userStory} className={styles.st} alt={item.userName} />
                        <img src={item.userImage} className={styles.user} alt={item.userName} />
                        <h5>{item.userName}</h5>
                    </div>
                ))}
            </div>

            <Textpost firstname={firstname} lastname={lastname} fullimg={fullimg} />

            {posts.map((item) => (
                <div key={item.id} className={styles.largepost}>
                    <div className={styles.imagepost}>
                        <div className={styles.addpost}>
                            <img src={item.userImage} alt={item.userName} />
                            <h4>{item.userName}</h4>
                        </div>
                        <div className={styles.icons}>
                            <BsThreeDots className={styles.a} size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                            <RxCross1 className={styles.a} size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        </div>
                    </div>
                    <img
                        src={item.userPost}
                        className={styles.img}
                        alt={`Post by ${item.userName}`}

                    />


                    <Buttons id={item.id} />


                </div>
            ))
            }
        </main >
    );
};

export default Posts;
