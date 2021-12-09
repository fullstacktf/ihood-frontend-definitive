import styles from './Home.module.css';
import { Icon } from '@iconify/react';



const Home = () => {
return (
    <div className={styles.homeContainer}>
        <h1 className={styles.welcome}>Welcome to iHood Web-app</h1>
        <p className={styles.textFormat}>The web-app where you can create your own neighborhood community, manage it and connect all its members in one place</p>
        <Icon className= {styles.icon} icon="noto:house-with-garden" />
        <p className={styles.textFormat}>Come in, and discover a new way to neighbor communication</p>
    </div>
)
}
export default Home;