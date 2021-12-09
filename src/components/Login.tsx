import styles from './Login.module.css';
import Form from './Form'
import DecoHLines from './DecoHLines';

const Login = () => {
  return (
    <div className={styles.formlogin}>
      <Form />
      <DecoHLines />
    </div>
  );
}

export default Login;