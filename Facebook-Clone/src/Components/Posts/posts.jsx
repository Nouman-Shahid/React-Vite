import React from 'react'
import styles from './posts.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { RiVideoAddFill } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const posts = () => {
    return (
        <main className={styles.main}>

            <div className={styles.stories}>

                <div className={styles.card}>
                    <img src="public/user.jpg" alt="" />
                    <FaCirclePlus className={styles.add} />
                    <h5>Create Story</h5>
                </div>

                <div className={styles.card}>
                    <img src="public/user1.jpeg" alt="" />
                    <img src="public/person1.png" className={styles.user} />
                    <h5>Muhammad Salman </h5>
                </div>
                <div className={styles.card}>
                    <img src="public/user2.jpeg" alt="" />
                    <img src="public/person2.jpeg" className={styles.user} />
                    <h5>Saeed Ali</h5>
                </div>
                <div className={styles.card}>
                    <img src="public/user3.jpg" alt="" />
                    <img src="public/person3.jpeg" className={styles.user} />
                    <h5>Rana Bilal Ahmed </h5>
                </div>


            </div>

            <div className={styles.post}>

                <div className={styles.addpost}>
                    <img src="public/user.png" alt="Facebook Logo" />
                    <input type='text' placeholder="What's on your mind, Numan?" />
                </div>

                <hr />

                <div className={styles.share}>

                    <div className={styles.text}>
                        <RiVideoAddFill size='1.8em' color='#F23E5C' />
                        <h4>Live Video</h4>
                    </div>
                    <div className={styles.text}>
                        <MdPhotoLibrary size='1.8em' color='#58C472' />
                        <h4>Photo/video</h4>
                    </div>
                    <div className={styles.text}>
                        <BiHappyAlt size='1.8em' color='#F8C03E' />
                        <h4>Feeling/activity</h4>
                    </div>

                </div>

            </div>


            <div className={styles.largepost}>
                <div className={styles.imagepost}>

                    <div className={styles.addpost}>
                        <img src="public/person2.png" alt="Facebook Logo" />
                        <h4>Umar Salman</h4>
                    </div>

                    <div className={styles.icons}>

                        <BsThreeDots size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        <RxCross1 size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                    </div>
                </div>

                <img src="public/user2.jpeg" className={styles.img} alt="" />

            </div>
            <div className={styles.largepost}>
                <div className={styles.imagepost}>

                    <div className={styles.addpost}>
                        <img src="public/person3.png" alt="Facebook Logo" />
                        <h4>Agha Ali</h4>
                    </div>

                    <div className={styles.icons}>

                        <BsThreeDots size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        <RxCross1 size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                    </div>
                </div>

                <img src="public/user1.jpeg" className={styles.img} alt="" />

            </div>
            <div className={styles.largepost}>
                <div className={styles.imagepost}>

                    <div className={styles.addpost}>
                        <img src="public/person1.png" alt="Facebook Logo" />
                        <h4>Muhammad Salman</h4>
                    </div>

                    <div className={styles.icons}>

                        <BsThreeDots size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                        <RxCross1 size='1.3em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                    </div>
                </div>

                <img src="public/user3.jpg" className={styles.img} alt="" />

            </div>

        </main>
    )
}

export default posts
