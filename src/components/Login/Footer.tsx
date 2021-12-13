import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.textFormat}>¿Ya estas registrado? <span>{"Accede aquí"}</span></p>
        </div>
    )
}

export default Footer