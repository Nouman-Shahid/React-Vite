import React, { useState } from 'react'
import Textpost from './textpost/textpost';
import styles from './posts.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";


const Posts = ({ fullimg, firstname }) => {
    const [hoverState, setHoverState] = useState({});

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



    const handleMouseOver = (postId) => {
        setHoverState(prevState => ({
            ...prevState,
            [postId]: true
        }));
    };

    const handleMouseOut = (postId) => {
        setHoverState(prevState => ({
            ...prevState,
            [postId]: false
        }));
    };

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



    let emojis = [
        {
            img: 'public/like.gif'
        },
        {
            img: 'public/love.gif'
        },
        {
            img: 'public/laugh.gif'
        },
        {
            img: 'public/suprised.gif'
        },
        {
            img: 'public/sad.gif'
        },
        {
            img: 'public/angry.gif'
        }
    ]

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

            <Textpost firstname={firstname} fullimg={fullimg} />

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

                    /> {hoverState[item.id] && (
                        <div className={styles.emojies} onMouseOut={() => handleMouseOut(item.id)} onMouseOver={() => handleMouseOver(item.id)}>
                            {
                                emojis.map((emoji, index) => (
                                    <img key={index} src={emoji.img} />
                                ))
                            }
                        </div>
                    )}
                    <div className={styles.btns}>
                        <GrLike onMouseOver={() => handleMouseOver(item.id)}
                            onMouseOut={() => handleMouseOut(item.id)} className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        <FaRegComment className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        <FaRegShareSquare className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                    </div>



                </div>
            ))
            }
        </main >
    );
};

export default Posts;
