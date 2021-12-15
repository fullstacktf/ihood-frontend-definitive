import styles from './css/Footer.module.css';



const Footer = ({onGoHomeLog}) => {
        return (
        <div className={styles.footer}>
            <p className={styles.textFormat}>¿Ya estás registrado en iHood? </p>
            
            <button className={styles.loginButton} onClick={onGoHomeLog}>Accede aquí</button>
        </div>
    )    
}

export default Footer