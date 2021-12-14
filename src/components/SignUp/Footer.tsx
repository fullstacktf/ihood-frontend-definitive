import styles from './css/Footer.module.css';
// import HomeLog from '../Home/HomeLog'


const Footer = () => {
        return (
        <div className={styles.footer}>
            <p className={styles.textFormat}>¿Ya estás registrado en iHood? </p>

            <button className={styles.loginButton} >Accede aquí</button>
        </div>
    )    
}

export default Footer