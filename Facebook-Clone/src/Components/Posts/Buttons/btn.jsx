import React, { useState } from 'react';
import styles from './btn.module.css';
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const Btn = ({ id }) => {
    const [hoverState, setHoverState] = useState({});
    const [selectedEmoji, setSelectedEmoji] = useState(null);

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

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
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
    ];

    return (
        <>
            <hr className={styles.hr} />
            {hoverState[id] && (
                <div className={styles.emojies} onMouseOut={() => handleMouseOut(id)} onMouseOver={() => handleMouseOver(id)}>
                    {emojis.map((emoji, index) => (
                        <img key={index} src={emoji.img} onClick={() => handleEmojiClick(emoji)} />
                    ))}
                </div>
            )}
            <div className={styles.btns}>
                <div className={styles.text} onMouseOut={() => handleMouseOut(id)} onMouseOver={() => handleMouseOver(id)}>
                    {selectedEmoji ? (
                        <img src={selectedEmoji.img} style={{ height: '5vh' }} />
                    ) : (
                        <><GrLike className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} /><h4>Like</h4>
                        </>

                    )}
                </div>
                <div className={styles.text}>
                    <FaRegComment className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                    <h4>Comment</h4>
                </div>
                <div className={styles.text}>
                    <FaRegShareSquare className={styles.b} size='1.5em' color='#B0B3B8' style={{ margin: '0 1vh' }} />
                    <h4>Share</h4>
                </div>
            </div>
        </>
    );
}

export default Btn;
