import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from '../Post/Post.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className={styles.post}>
            < div className={
                styles.post__top}>
                <Avatar src={profilePic} className={styles.post__avatar} />
                <div className={styles.post__topInfo}>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div >
            </div >

            <div className={styles.post__bottom}>
                <p>{message}</p>
            </div>

            <div className={styles.post__image}>
                <img src={image} alt="" />
            </div>

            <div className={styles.post__options}>
                <div className={styles.post__option}>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className={styles.post__option}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className={styles.post__option}>
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className={styles.post__option}>
                    <AccountCircleOutlinedIcon />
                    <ExpandMoreOutlinedIcon />

                </div>
            </div>

        </div >
    )
}

export default Post