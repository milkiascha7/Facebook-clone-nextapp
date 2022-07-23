import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import styles from '../MessageSender/Message.module.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../../utils/StoreProvider';
import firebase from 'firebase';
import db from '../../utils/firebase';


const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })


        setInput("")
        setImageUrl("")
    }
    return (
        <div className={styles.messageSender}>
            <div className={styles.messageSender__top}>
                <Avatar src={user.photoURL} />
                <form>
                    <input placeholder={`What's on your mind, ${user.displayName}?`} className={styles.messageSender__input} value={input} onChange={e => setInput(e.target.value)} />

                    <input placeholder='image URL (Optional)' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className={styles.messageSender__bottom}>
                <div className={styles.messageSender__option}>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className={styles.messageSender__option}>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className={styles.messageSender__option}>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender