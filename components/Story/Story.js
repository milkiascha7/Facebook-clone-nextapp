import React from 'react'
import styles from '../Story/Story.module.css'
import Avatar from '@mui/material/Avatar';


const Story = ({ image, profileSrc, title }) => {
    return (
        <div className={styles.story} style={{ backgroundImage: `url(${image})` }}>
            <Avatar src={profileSrc} className={styles.story__avatar} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story