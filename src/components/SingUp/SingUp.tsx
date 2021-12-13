import styles from './Singup.module.css';
import FormSingUp from './Form-Singup'
import DecoHLines from './DecoHLines';
import Footer from './Footer';

const SingUp = ({ onSingup }) => {
  return (
    <div className={styles.formsingup}>
      <FormSingUp onSingup={onSingup}/>
      <DecoHLines />
      <Footer />
    </div>
  );
}

export default SingUp;