import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';
import Events from './pages/Events';

import logoImage from './assets/logo_amadda.png';

import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MyPage from './pages/MyPage';

import BasicInfo from './components/myPage/BasicInfo';
import InfoChange from './components/myPage/InfoChange';
import NewMember from './pages/NewMember';


import Product_details from './pages/Product_details';
import Shopping_basket from './pages/Shopping_basket';
import RW_Review from './pages/Rw_review';
import Payment from './pages/Payment';
import PurchaseHistory from './components/myPage/PurchaseHistory';
import Subscribe from './components/myPage/Subscribe';
import SubscribeTermPopup from './components/popup/SubscribeTermPopup';


function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [userRevisedDetail, setUserRevisedDetail] = useState();
  const [productNumInfo, setProductNumInfo] = useState(1);
  
  useEffect(() => {
    if(localStorage.length > 0){
      setIsAuthed(true);
    }

    // 이 부분 DB로 변경하기...
  }, []);
  // useEffect(() => {

  // }, []);

  const userAuthed = (userInformation) => {
    const userData = {
      ...userInformation
    };

    console.log(userData);

    // Authentication

    // 1. userData.mode === 'LOGIN'
    if(userData.mode === 'LOGIN'){
      localStorage.setItem(userData.userEmail, userData.userPassword);
      setIsAuthed(true);
      setUserDetail(userData);
      // 현재는 userData로 userDetail을 업데이트했지만, DB에서 닉네임, 주소 등까지 가져오기...
    };

    // 2. userData.mode === 'SIGNUP'
    if(userData.mode === 'SIGNUP'){
      // DB로 전송
    }
    };

    // 2. userData.mode === 'SIGNUP'


  const unauthedHandler = () => {
    setIsAuthed(false);
    localStorage.clear();
  };

  const [stPopupShow, setStPopupShow] = useState(0);
  
  const [subscribeTerm, setSubscribeTerm] = useState();
  const [subscribeInfo, setSubscribeInfo] = useState();

  const [price, setPrice] = useState();
  
  return(
    <div className='content-container'>
      {!isAuthed &&
      <React.Fragment>
        <Switch>
          <Route path='/' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/' exact>
                <Home authState={isAuthed} />
              </Route>          
            </Navigation>
          </Route>
          
          <Route path='/product-details' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/product-details' exact>
              <Product_details authState={isAuthed} propFunction={setProductNumInfo} propFunction2={setPrice} propFunction3 = {setStPopupShow} propFunction4 = {setSubscribeTerm}  />
              {stPopupShow ? <SubscribeTermPopup propFunction = {setStPopupShow} propFunction2={setSubscribeTerm}/> : ""}

              </Route>              
            </Navigation>
          </Route>

          <Route path='/shopping-basket' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/shopping-basket' exact>
              <Shopping_basket authState={isAuthed} productNum={productNumInfo} propFunction={setPrice} />
              </Route>              
            </Navigation>
          </Route>

          <Route path='/rw-review' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/rw-review' exact>
              <RW_Review authState={isAuthed} />
              </Route>              
            </Navigation>
          </Route>

          <Route path='/payment' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/payment' exact>
              <Payment authState={isAuthed} price={price}/>
              </Route>              
            </Navigation>
          </Route>

          <Route path='/auth'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <Auth onAuth={userAuthed} />
            </div>
          </Route>

          <Route path='/new-member'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <NewMember onAuth={userAuthed} />
            </div>
          </Route>

          <Route path='/events' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Events />
            </Navigation>
          </Route>

          <Route path='/purchase-history' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/purchase-history' exact>  
                <PurchaseHistory />
              </Route>
            </Navigation>
          </Route>

          {/* <Route path='/subscribe' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/subscribe' exact>
                <Subscribe/>
              </Route>
            </Navigation>
          </Route> */}
        </Switch>

      </React.Fragment>
      }

      {isAuthed &&
      <Navigation logout={unauthedHandler} authState={isAuthed} userDetail={userDetail} revisedDetail={userRevisedDetail}>
        <Switch>

          <Route path='/' exact>
            <Home authState={isAuthed} />
          </Route>

          <Route path='/events' exact>
            <Events />
          </Route>

          <Route path='/my-page'>
            <MyPage userDetail={userDetail} propFunction={setUserRevisedDetail}/>
          </Route>

          <Route path='/Product-details' exact>
            <Product_details authState={isAuthed} propFunction={setProductNumInfo} propFunction2={setPrice} propFunction3 = {setStPopupShow} propFunction4 = {setSubscribeTerm} />
            {stPopupShow ? <SubscribeTermPopup propFunction = {setStPopupShow} propFunction2={setSubscribeTerm}/> : ""}
          </Route>

          <Route path='/shopping-basket' exact>
            <Shopping_basket authState={isAuthed} productNum={productNumInfo} propFunction={setPrice} />
          </Route>

          <Route path='/payment' exact>
            <Payment authState={isAuthed} price={price}/>
          </Route>

          <Route path='/rw-review' exact>
              <RW_Review authState={isAuthed} />
          </Route>

          <Route path='/events' exact>
            <Events />
          </Route>

          <Route path='/purchase-history' exact>
            <PurchaseHistory />
          </Route>

          <Route path='/subscribe' exact>
            <Subscribe propFunction = {setStPopupShow} propFunction2 = {setSubscribeInfo} propFunction3 = {setSubscribeTerm} subscribeTerm={subscribeTerm} subscribeInfo={subscribeInfo}/>
            {stPopupShow ? <SubscribeTermPopup propFunction = {setStPopupShow} propFunction2={setSubscribeTerm}/> : ""}
          </Route>
        </Switch>
      </Navigation>
      }
    </div>
  )
};

export default App;
