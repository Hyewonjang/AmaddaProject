import classes from './Signup.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNickname, setEnteredNickname] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');

  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredNicknameIsValid, setEnteredNicknameIsValid] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
  const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(true);
  const [enteredAddressIsValid, setEnteredAddressIsValid] = useState(true);

  const [nicknameLessThan3IsValid, setNicknameLessThan3IsValid] = useState(true);
  const [passwordLessThan6IsValid, setPasswordLessThan6IsValid] = useState(true);

  const history = useHistory();

  const nameInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nicknameInputChangeHandler = (event) => {
    setEnteredNickname(event.target.value);
  }

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const addressInputChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    if(enteredEmail.trim() == ''){
      setEnteredEmailIsValid(false);

      return;
    };

    if(enteredNickname.trim() == ''){
      setEnteredNicknameIsValid(false);
      setNicknameLessThan3IsValid(true);
      return;
    };

    if(enteredNickname.length < 3){
      setNicknameLessThan3IsValid(false);
      setEnteredNicknameIsValid(true);
      return;
    }

    if(enteredPassword.trim() == ''){
      setEnteredPasswordIsValid(false);
      setPasswordLessThan6IsValid(true);
      return;
    };

    if(enteredPassword.length <6){
      setPasswordLessThan6IsValid(false);
      setEnteredPasswordIsValid(true);
      
      return;
    };

    if(enteredPhone.trim() == ''){
      setEnteredPhoneIsValid(false);

      return;
    };

    if(enteredAddress.trim() == ''){
      setEnteredAddressIsValid(false);

      return;
    };
    
    const userInformation = {
      userEmail: enteredEmail,
      userNickname: enteredNickname,
      userPassword: enteredPassword,
      userPhone: enteredPhone,
      userAddress: enteredAddress,
    };
    
    props.onInformation(userInformation);

    if(userInformation){
      alert('회원가입에 성공하셨습니다.');
      // 인증 절차 마련해야 함

      history.replace('/');
      setEnteredEmailIsValid(true);
      setEnteredNicknameIsValid(true);
      setEnteredPasswordIsValid(true);
      setEnteredPhoneIsValid(true);
      setEnteredAddress(true);
    };
  };

  return(
    <form onSubmit={submitHandler} className={classes.authForm}>
      <input id='email' type='email' placeholder='E - MAIL' className={classes.info} onChange={nameInputChangeHandler} value={enteredEmail} />
      {!enteredEmailIsValid && <h6 className={classes.errorText}>이메일을 입력해주세요.</h6>}
      <input id='text' type='text' placeholder='닉네임' className={classes.info} onChange={nicknameInputChangeHandler} value={enteredNickname} />
      {!enteredNicknameIsValid && <h6 className={classes.errorText}>닉네임을 입력해주세요.</h6>}
      {!nicknameLessThan3IsValid && <h6 className={classes.errorText}>닉네임은 3글자 이상이어야 합니다.</h6>}
      <input id='password' type='password' placeholder='비밀번호' className={classes.info} onChange={passwordInputChangeHandler} value={enteredPassword} />
      {!enteredPasswordIsValid && <h6 className={classes.errorText}>비밀번호를 입력해주세요.</h6>}
      {!passwordLessThan6IsValid && <h6 className={classes.errorText}>비밀번호는 6글자 이상이어야 합니다.</h6>}
      <input id='tel' type='tel' placeholder='전화번호(숫자만)' className={classes.info} onChange={phoneInputChangeHandler} value={enteredPhone} />
      {!enteredPhoneIsValid && <h6 className={classes.errorText}>전화번호를 입력해주세요.</h6>}
      <input id='address' type='address' placeholder='주소' className={classes.info} onChange={addressInputChangeHandler} value={enteredAddress} />
      {!enteredAddressIsValid && <h6 className={classes.errorText}>주소를 입력해주세요.</h6>}
      <input type='submit' value='회원 가입하기' className={classes.submit} />
    </form>
  )
};

export default Signup;