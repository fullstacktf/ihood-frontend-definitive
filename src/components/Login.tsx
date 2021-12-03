import React, { useReducer, useEffect } from 'react';
import styles from './Login.module.css';
import { Icon } from '@iconify/react'

//state type

type State = {
    username: string
    email: string
    phoneNumber: number
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
    };

const initialState = {
    username: '',
    email: '',
    phoneNumber: 0,
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,
};

type Action = { type: 'setUsername', payload: string } 
    | { type: 'setEmail', payload: string } 
    | { type: 'setPhoneNumber', payload: number }
    | { type: 'setPassword', payload: string } 
    | { type: 'setIsButtonDisabled', payload: boolean } 
    | { type: 'loginSuccess', payload: string } 
    | { type: 'loginFailed', payload: string } 
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action)  => {
    switch (action.type) {
        case 'setUsername': 
          return {
              ...state,
              username: action.payload
        };
        case 'setEmail': 
          return {
              ...state,
              email: action.payload
        };
        case 'setPhoneNumber': 
          return {
              ...state,
              phoneNumber: action.payload
        };
        case 'setPassword': 
          return {
              ...state,
              password: action.payload
        };
        case 'setIsButtonDisabled': 
          return {
              ...state,
              isButtonDisabled: action.payload
        };
        case 'loginSuccess': 
          return {
              ...state,
              helperText: action.payload,
              isError: false
        };
        case 'loginFailed': 
          return {
              ...state,
              helperText: action.payload,
              isError: true
          };
        case 'setIsError': 
          return {
              ...state,
              isError: action.payload
        };
    }
}


const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.email.trim() && state.phoneNumber && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password, state.email, state.phoneNumber]);

  const handleLogin = () => {
    if (state.username === 'username' && state.email === 'name@sample.com' && state.phoneNumber === 675789876 && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  // const handleUsernameChange = (event) => {
  //     dispatch({
  //       type: 'setUsername',
  //       payload: event.target.value
  //     });
  //   };

  // const handlePasswordChange = (event) => {
  //     dispatch({
  //       type: 'setPassword',
  //       payload: event.target.value
  //     });
  //   }

  return (
    <form className={styles.formlogin} noValidate autoComplete="off">
      <div className={styles.langNav} ></div>
      <div className={styles.inputcontainer}>
        <div className={styles.titleBox}> 
        <h1 className={styles.title}>Hi, Neighbor! </h1>
        <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
        </div>
        <div className={styles.inputs}>
            {/* error={state.isError} */}
            <input type="text" className="username" placeholder="/f007;  Nombre" />
{/* onChange={handleUsernameChange} */}
            <input type="email" className="email" placeholder="Email" />
{/* onChange={handleEmailChange} */}
            <input type="tel" className="movil" placeholder="Telefono" />
{/* onChange={handlePhoneChange} */}
            <input type="password" className="password" placeholder="Password" />
{/* onChange={handlePasswordChange} */}
            <button className={styles.loginBtn} onClick={handleLogin}>Registrate</button>
        </div>
      </div>
    </form>
  );
}

export default Login;