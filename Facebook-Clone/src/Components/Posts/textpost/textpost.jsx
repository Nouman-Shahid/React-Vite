import React, { useState } from 'react'
import styles from './textpost.module.css'
import Buttons from '../Buttons/btn';
import { RiVideoAddFill } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const textpost = ({ firstname, lastname, fullimg }) => {

    let [post, setPosts] = useState([
        {
            userImg: fullimg,
            userName: `${firstname} ${lastname}`,
            postText: 'Hello World :)',
        },
    ]);

    const removeElement = (text) => {
        // const newPosts = post.filter((item) => (item.postText != text));
        // setPosts(newPosts);
    };

    const getValue = (event) => {
        if (event.key === 'Enter') {
            let newPost = event.target.value
            event.target.value = ""
            let newarr = [...post, {
                title: newPost
            }]
            setPosts(newarr)
            console.log(newarr)
        }
    }

    let icons = [
        {
            name: 'Live video',
            img: RiVideoAddFill,
            color: '#F23E5C',
        },
        {
            name: 'Photo/video',
            img: MdPhotoLibrary,
            color: '#58C472',
        },
        {
            name: 'Feeling/activity',
            img: BiHappyAlt,
            color: '#F8C03E',
        },
    ]

    return (
        <>
            <div className={styles.postInput}>
                <div className={styles.addpost}>
                    <img className='randomImg' src={fullimg} alt="" />
                    <input type='text' onKeyDown={getValue} value={post.postText} placeholder={`What's on your mind, ${firstname}?`} />
                </div>

                <hr />


                <div className={styles.share}>
                    {
                        icons.map((item) => (
                            <div className={styles.text}>
                                <item.img className={styles.icon} size='1.8em' color={item.color} />
                                <h4>{item.name}</h4>
                            </div>
                        ))
                    }

                </div>
            </div>

            {
                (post.length > 0) &&
                post.map((item) => (
                    <div className={styles.textpost}>
                        <div className={styles.imagepost}>
                            <div className={styles.header}>
                                <img src={item.userImg} alt={item.userName} />
                                <h4>{item.userName}</h4>
                            </div>
                            <div className={styles.icons}>
                                <BsThreeDots className={styles.a} size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                                <RxCross1 onClick={removeElement(item.postText)} className={styles.a} size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                            </div>
                        </div>
                        <div className={styles.post}>
                            <p>{item.postText}</p>
                        </div>

                        <Buttons />

                    </div>
                ))

            }



        </>
    )
}

export default textpost
