import React from 'react'
import styles from './posts.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { RiVideoAddFill } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const posts = ({ fullimg, firstname }) => {



    let stories = [
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
    ]

    let posts = [
        {
            userImage: 'public/person1.png',
            userName: 'Muhammad Salman',
            userPost: 'public/story3.jpg'
        },
        {
            userImage: 'public/person2.png',
            userName: 'Umer Ahmed',
            userPost: 'public/post1.jpg'
        },
        {
            userImage: 'public/person3.png',
            userName: 'Agha Ali',
            userPost: 'public/post2.jpeg'
        },
    ]

    return (
        <main className={styles.main}>

            <div className={styles.stories}>

                <div className={styles.card}>
                    <img src={fullimg} alt="" />
                    <FaCirclePlus className={styles.add} />
                    <h5>Create Story</h5>
                </div>

                {
                    stories.map((item) => (
                        <div className={styles.card}>
                            <img src={item.userStory} className={styles.st} />
                            <img src={item.userImage} className={styles.user} />
                            <h5>{item.userName}</h5>
                        </div>
                    ))
                }



            </div>

            <div className={styles.post}>

                <div className={styles.addpost}>
                    <img className='randomImg' src={fullimg} />
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


            {
                posts.map((item) => (
                    <div className={styles.largepost}>

                        <div className={styles.imagepost}>
                            <div className={styles.addpost}>
                                <img src={item.userImage} />
                                <h4>{item.userName}</h4>
                            </div>

                            <div className={styles.icons}>

                                <BsThreeDots size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                                <RxCross1 size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                            </div>
                        </div>

                        <img src={item.userPost} className={styles.img} />
                    </div>
                ))
            }




        </main>
    )
}

export default posts
