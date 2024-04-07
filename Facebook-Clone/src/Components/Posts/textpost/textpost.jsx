import React, { useState } from 'react'
import { RiVideoAddFill } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";

import styles from './textpost.module.css'

const textpost = ({ firstname, fullimg }) => {

    let [post, setPosts] = useState([
        {
            userImg: fullimg,
            userName: firstname,
            postText: 'Hello World :)',
        },
    ]);

    const removeElement = (id) => {
        // const newPosts = post.filter(item => item.id !== id);
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



        </>
    )
}

export default textpost
