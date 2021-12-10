import styles from './Login.module.css';
import Form from './Form'
import DecoHLines from './DecoHLines';
import Footer from './Footer';

const Login = ({ onLogin }) => {
  return (
    <div className={styles.formlogin}>
      <Form onLogin={onLogin}/>
      <DecoHLines />
      <Footer />
    </div>
  );
}

export default Login;