import React, { useReducer, useEffect } from 'react';
import styles from './Form-Singup.module.css';
import { Icon } from '@iconify/react';
import CheckMasterRole from './CheckRole';

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
    | { type: 'singupSuccess', payload: string } 
    | { type: 'singupFailed', payload: string } 
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
        case 'singupSuccess': 
          return {
              ...state,
              helperText: action.payload,
              isError: false
        };
        case 'singupFailed': 
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


const FormSingUp = ({onSingup}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.email.trim() && state.password.trim()) {
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
  }, [state.username, state.password, state.email]);

  const handleSingup = () => {
    onSingup({name:"", email: "", password: "",checked:true})
    if (state.username === 'username' && state.email === 'name@sample.com' && state.phoneNumber === 675789876 && state.password === 'password') {
      dispatch({
        type: 'singupSuccess',
        payload: 'SingUp Successfully'
      });
    } else {
      dispatch({
        type: 'singupFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleSingup();
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
      <div className={styles.signupContainer}>
        <div className={styles.langNav} ></div>
        <form className={styles.inputContainer} noValidate autoComplete="off">
          <div className={styles.titleBox}> 
          <h1 className={styles.title}>Hi, Neighbor! </h1>
          <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
          </div>
          <div className={styles.inputs}>
              {/* error={state.isError} 
              helperText={state.helperText}*/}
              <input type="text" className="username" placeholder="&#xf007;  Nombre" onChange={handleUsernameChange} onKeyPress={handleKeyPress} required/>

              <input type="email" className="email" placeholder="Email" onChange={handleEmailChange} onKeyPress={handleKeyPress} required/>

              <input type="tel" className="movil" placeholder="Telefono" onKeyPress={handleKeyPress}/>
  {/* onChange={handlePhoneNumberChange} */}
              <input type="password" className="password" placeholder="Password" onChange={handlePasswordChange} onKeyPress={handleKeyPress} required/>

              <button className={styles.loginBtn} onClick={handleSingup} disabled={state.isButtonDisabled}>Registrate</button>
          </div>
        </form>
        <CheckMasterRole /*onCheck={onCheck}*//>
      </div>
  );
}

export default FormSingUp;