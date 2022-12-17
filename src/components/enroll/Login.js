import classes from './Login.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const history = useHistory();

  const nameInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
 
  const submitHandler = (event) => {
    event.preventDefault();

    if(enteredEmail.trim() == ''){
      setEnteredEmailIsValid(false);
      setEnteredEmail('');
      setEnteredPassword('');
      return;
    };

    if(enteredPassword.trim() == ''){
      setEnteredPasswordIsValid(false);
      setEnteredEmail('');
      setEnteredPassword('');
      return;
    } 

    const userInformation = {
      userEmail: enteredEmail,
      userPassword: enteredPassword,
    };
    
    props.onInformation(userInformation);

    if(userInformation){
      history.replace('/');
      setEnteredEmailIsValid(true);
      setEnteredPasswordIsValid(true);
    };
 
    
    // 홈 화면으로 이동하도록 history.replace 사용 - 뒤로가기 불가
    
  };

  return(
    <form onSubmit={submitHandler} className={classes.authForm}>
      <input id='email' type='email' placeholder='E - MAIL' className={classes.info} onChange={nameInputChangeHandler} value={enteredEmail} />
      {!enteredEmailIsValid && <h6 className={classes.errorText}>이메일을 입력해주세요.</h6>}
      <input id='password' type='password' placeholder='password' className={classes.info} onChange={passwordInputChangeHandler} value={enteredPassword} />
      {!enteredPasswordIsValid && <h6 className={classes.errorText}>비밀번호를 입력해주세요.</h6>}
      <input type='submit' value='로그인' className={classes.submit} />
    </form>
  )
};

export default Login;