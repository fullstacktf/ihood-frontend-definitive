import styles from './DecoLines.module.css';


const decoLines = () => {
    return (
        <div className={styles.decorationLines}>
            <span className={styles.decoLine1}></span>
            <span className={styles.decoLine2}></span>
            <span className={styles.decoLine3}></span>
            <span className={styles.decoLine4}></span>
            <span className={styles.decoLine5}></span>
        </div>
    )
}

export default decoLines