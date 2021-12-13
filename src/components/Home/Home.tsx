import styles from './Home.module.css';
import { Icon } from '@iconify/react';
import DecoVLines from '../Home/DecoVLines';
import TextCarousel from './TextCarousel';

const Home = () => {
return (
    <div className={styles.homeContainer}>
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcome}>Bienvenidos a la web de iHood!</h1>

            <TextCarousel />

            <Icon className= {styles.icon} icon="noto:house-with-garden" />
            
            <p className={styles.textFormat}>Entra y descubre una nueva forma de comunicarte con tus vecinos!</p>
        </div>
        <DecoVLines />
    </div>
    
)
}
export default Home;