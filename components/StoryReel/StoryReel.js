import React from 'react'
import Story from '../Story/Story'
import styles from '../StoryReel/StoryReel.module.css'

const StoryReel = () => {
    return (
        <div className={styles.storyReel}>
            <Story
                image={require('../Images/photo1.jpg')}
                profileSrc="https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/275634825_259435462925759_4162893567053207529_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tTSfqiZZ7xQAX9U0j9R&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-SE2kpjKmFjkvOy6Exn5XpuVXXk7rl-e7Y3ound4oZSQ&oe=624A4030&_nc_sid=7bff83"
                title="Milkias Hailu"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BpYh8wABdcGBP2o93-K-qWjHZojUTJ8hpA&usqp=CAU"
                profileSrc={require('../Images/cristiano.jpg')}
                title="Cristiano Ronaldo"
            />
            <Story
                image={require('../Images/messi2.jpg')}
                profileSrc={require('../Images/messi.jpg')}
                title="Lionel Messi"
            />
            <Story
                image={require('../Images/rock2.jpg')}
                profileSrc={require('../Images/rock.jpg')}
                title="The Rock"
            />
            <Story
                image={require('../Images/kevin.jpg')}
                profileSrc={require('../Images/kevin2.jpg')}
                title="Kevin Hart"
            />
        </div>
    )
}

export default StoryReel