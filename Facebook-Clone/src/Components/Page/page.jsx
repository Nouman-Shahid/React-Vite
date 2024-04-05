import React, { useState } from 'react';
import Navbar from '../navBar/navbar';
import Leftbar from '../leftSideBar/leftbar';
import Posts from '../Posts/posts';
import Rightbar from '../rightSideBar/rightbar';
import styles from './page.module.css'

const Page = ({ firstname, lastname, img, handleAPI }) => {


    return (
        <>

            <Navbar img={img} handleAPI={handleAPI} />

            <div className={styles.page}>
                <Leftbar img={img} firstname={firstname} lastname={lastname} />
                <Posts fullimg={img} firstname={firstname} />
                <Rightbar />
            </div>


        </>
    );
};

export default Page;
