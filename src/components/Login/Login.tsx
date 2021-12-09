import styles from './Login.module.css';
import Form from '../Login/Form'
import DecoHLines from '../Login/DecoHLines';

const Login = () => {
  return (
    <div className={styles.formlogin}>
      <Form />
      <DecoHLines />
    </div>
  );
}

export default Login;