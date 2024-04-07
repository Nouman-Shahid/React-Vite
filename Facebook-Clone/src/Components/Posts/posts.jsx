import React, { useState } from 'react'
import styles from './posts.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { RiVideoAddFill } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";


const Posts = ({ fullimg, firstname }) => {
    const [hoverState, setHoverState] = useState({});

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

    const posts = [
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

            <div className={styles.post}>
                <div className={styles.addpost}>
                    <img className='randomImg' src={fullimg} alt="" />
                    <input type='text' placeholder={`What's on your mind, ${firstname}?`} />
                </div>

                <hr />

                <div className={styles.share}>
                    <div className={styles.text}>
                        <RiVideoAddFill className={styles.icon} size='1.8em' color='#F23E5C' />
                        <h4>Live Video</h4>
                    </div>
                    <div className={styles.text}>
                        <MdPhotoLibrary className={styles.icon} size='1.8em' color='#58C472' />
                        <h4>Photo/video</h4>
                    </div>
                    <div className={styles.text}>
                        <BiHappyAlt className={styles.icon} size='1.8em' color='#F8C03E' />
                        <h4>Feeling/activity</h4>
                    </div>
                </div>
            </div>

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
