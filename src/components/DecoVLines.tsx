import styles from './DecoVLines.module.css';


const DecoVLines = () => {
    return (
        <div className={styles.decoLinesContainer}>
            <span className={styles.decoLine1}></span>
            <div className={styles.decoLine2}></div>
            <div className={styles.decoLine3}></div>
            <div className={styles.decoLine4}></div>
            <div className={styles.decoLine5}></div>
        </div>
    )
}
export default DecoVLines