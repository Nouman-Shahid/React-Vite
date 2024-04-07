import React, { useState } from 'react'
import styles from './btn.module.css'
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const btn = ({ id }) => {

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
        <>
            {hoverState[id] && (
                <div className={styles.emojies} onMouseOut={() => handleMouseOut(id)} onMouseOver={() => handleMouseOver(id)}>
                    {
                        emojis.map((emoji, index) => (
                            <img key={index} src={emoji.img} />
                        ))
                    }
                </div>
            )}
            <div className={styles.btns}>
                <GrLike onMouseOver={() => handleMouseOver(id)}
                    onMouseOut={() => handleMouseOut(id)} className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                <FaRegComment className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                <FaRegShareSquare className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
            </div>
        </>
    )
}

export default btn
