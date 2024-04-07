import React, { useState } from 'react';
import Navbar from '../navBar/navbar';
import Leftbar from '../leftSideBar/leftbar';
import Posts from '../Posts/posts';
import Rightbar from '../rightSideBar/rightbar';
import styles from './page.module.css'

const Page = ({ firstname, lastname, img, group, handleUserAPI, posts, handleNewsAPI }) => {


    return (
        <>

            <Navbar img={img} handleAPI={handleUserAPI} firstname={firstname} lastname={lastname}
                handleNewsAPI={handleNewsAPI} />

            <div className={styles.page}>
                <Leftbar img={img} firstname={firstname} lastname={lastname} />
                <Posts fullimg={img} firstname={firstname} lastname={lastname} posts={posts} />
                <Rightbar lastname={lastname} group={group} />
            </div>


        </>
    );
};

export default Page;
