import React, { useState } from 'react'
import Textpost from './textpost/textpost';
import Buttons from './Buttons/btn';
import styles from './posts.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const Posts = ({ fullimg, firstname, lastname, posts }) => {
    const stories = [
        {
            userImage: 'public/person1.png',
            userStory: 'public/story1.jpeg',
            userName: ' حسن خالد',
        },
        {
            userImage: 'public/person2.png',
            userStory: 'public/story4.png',
            userName: 'Mason Taylor',
        },
        {
            userImage: 'public/person3.png',
            userStory: 'public/story3.jpg',
            userName: 'James Noah',
        },
    ];


    return (
        <main className={styles.main}>
            <div className={styles.stories}>
                <div className={styles.card}>
                    <img src={fullimg} alt="" />
                    <FaCirclePlus className={styles.add} />
                    <h5 >Create Story</h5>
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

            {posts.map((item, index) => (
                <div key={index} className={styles.largepost}>
                    <div className={styles.imagepost}>
                        <div className={styles.addpost}>
                            <img src={item.urlToImage} alt={item.source.name} />
                            <h4>{item.source.name}</h4>
                        </div>
                        <div className={styles.icons}>
                            <BsThreeDots className={styles.a} size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                            <RxCross1 className={styles.a} size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        </div>
                    </div>
                    <h4 className={styles.p}>{item.title}</h4>
                    <p className={styles.p}>{item.description}</p>
                    <img
                        src={item.urlToImage}
                        className={styles.img}
                        alt={`Post by ${item.source.name}`}
                    />
                    <Buttons id={item.id} />
                </div>
            ))}
        </main >
    );
};

export default Posts;
