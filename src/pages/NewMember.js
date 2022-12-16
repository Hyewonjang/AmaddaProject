import classes from './NewMember.module.css';
import React, { useState } from 'react';


import Signup from '../components/enroll/Signup';

const NewMember = (props) => {
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
      <h3 style={{textAlign: 'center', marginBottom: '30px'}}>회원 가입</h3>
      <Signup onInformation={userSignupInformation} />
    </div>
   
  )
};

export default NewMember;