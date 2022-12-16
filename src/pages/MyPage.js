import React, { useState } from 'react';
import Footer from '../components/navigation/Footer';
import BreadCrumb from '../components/navigation/BreadCrumb';
import ContentBox from '../components/navigation/ContentBox';

import { NavLink, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './MyPage.css';
import BasicInfo from '../components/myPage/BasicInfo';
import InfoChange from '../components/myPage/InfoChange';
import Subscribe from '../components/myPage/Subscribe';
import PurchaseHistory from '../components/myPage/PurchaseHistory';

const MyPage = (props) => {
  const [currentLocation, setCurrentLocation] = useState('info');
  const [revisedDetail, setRevisedDetail] = useState();

  const infoHandler = () => {
    setCurrentLocation('info');
  };

  const reviseHandler = () => {
    setCurrentLocation('revise');
  };

  const subscribeHandler = () => {
    setCurrentLocation('subscribe');
  };

  const historyHandler = () => {
    setCurrentLocation('history');
  };

  props.propFunction(revisedDetail)
  
  return(
    <React.Fragment>
      <BreadCrumb>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title main-name">회원정보</h1>
            </div>
        </div>
        <ul className="my-page-nav">
          <li className="my-page-nav-item">
            <div className='my-page-nav-link' onClick={infoHandler}>회원정보</div>
          </li>
          <li className="my-page-nav-item">
            <div className="my-page-nav-link" onClick={reviseHandler}>회원정보 수정</div>
          </li>
          <li className="my-page-nav-item">
            <div className="my-page-nav-link" onClick={subscribeHandler}>구독상품</div>
          </li>
          <li className="my-page-nav-item">
            <div className="my-page-nav-link" onClick={historyHandler}>구매내역</div>
          </li>
          <li className="my-page-nav-item">
            <Link to='/shopping-basket' style={{color:'gray', textDecoration:'none'}}><div className="my-page-nav-link" >장바구니</div></Link>
          </li>
          <li className="my-page-nav-item">
            <Link to='/RW-Review' style={{color:'gray', textDecoration:'none'}}><div className="my-page-nav-link" >구매후기</div></Link>
          </li>

        </ul>    
      </BreadCrumb>
      
      <ContentBox>
        {currentLocation === 'info' && <BasicInfo userDetail={props.userDetail} revisedDetail={revisedDetail} />}
        {currentLocation === 'revise' && <InfoChange propFunction={setRevisedDetail}/>}
        {currentLocation === 'subscribe' && <Subscribe />}
        {currentLocation === 'history' && <PurchaseHistory />}
      </ContentBox>


      <Footer />
    </React.Fragment>
    
  )
};

export default MyPage;