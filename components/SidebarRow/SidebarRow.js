import React from 'react'
import styles from '../SidebarRow/Sidebar.module.css'
import Avatar from '@mui/material/Avatar';

const SidebarRow = ({ src, title, Icon }) => {
    return (
        <div className={styles.sidebarRow}>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow