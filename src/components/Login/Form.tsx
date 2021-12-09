import React, { useReducer, useEffect } from 'react';
import styles from './Form.module.css';
import { Icon } from '@iconify/react';

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
    username: "",
    email: "",
    phoneNumber: 678905432,
    password: "",
    isButtonDisabled: true,
    helperText: "",
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


const Form = () => {
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

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };
  
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: 'setEmail',
      payload: event.target.value
    });
  };

  // const handlePhoneNumberChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   dispatch({
  //     type: 'setPhoneNumber',
  //     payload: event.target.value
  //   });
  // };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  return (
    <div className={styles.logincontainer}>
      <div className={styles.langNav} ></div>
      <form className={styles.inputcontainer} noValidate autoComplete="off">
        <div className={styles.titleBox}> 
        <h1 className={styles.title}>Hi, Neighbor! </h1>
        <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
        </div>
        <div className={styles.inputs}>
            {/* error={state.isError} 
            helperText={state.helperText}*/}
            <input type="text" className="username" placeholder="&#xf007;  Nombre" onChange={handleUsernameChange} onKeyPress={handleKeyPress}/>

            <input type="email" className="email" placeholder="Email" onChange={handleEmailChange} onKeyPress={handleKeyPress}/>

            <input type="tel" className="movil" placeholder="Telefono" onKeyPress={handleKeyPress}/>
{/* onChange={handlePhoneNumberChange} */}
            <input type="password" className="password" placeholder="Password" onChange={handlePasswordChange} onKeyPress={handleKeyPress}/>

            <button className={styles.loginBtn} onClick={handleLogin} disabled={state.isButtonDisabled}>Registrate</button>
        </div>
      </form>
    </div>
  );
}

export default Form;