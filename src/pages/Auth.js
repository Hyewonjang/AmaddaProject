import classes from './Auth.module.css';
import React, { useState } from 'react';

import Login from '../components/enroll/Login';
import Signup from '../components/enroll/Signup';

const Auth = (props) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const loginModeHandler = () => {
    setIsLoginMode((prev) => !prev);
  };

  // Login 컴포넌트에서 Login 시도했을 때 App.js로 전송
  const userLoginInformation = (userInformation) => {
    const userData = {
      ...userInformation,
      mode: 'LOGIN',
    };

    props.onAuth(userData);
  };

  // Signup 컴포넌트에서 Signup 시도했을 때 App.js로 전송
  const userSignupInformation = (userInformation) => {
    const userData = {
      ...userInformation,
      mode: 'SIGNUP',
    };

    props.onAuth(userData);
  };

  return (
    <div className={classes.authContainer}>
      {isLoginMode && <Login onModeChange={loginModeHandler} onInformation={userLoginInformation} />}
      {!isLoginMode && <Signup onModeChange={loginModeHandler} onInformation={userSignupInformation} />}
    </div>
   
  )
};

export default Auth;