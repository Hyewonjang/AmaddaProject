import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/navigation/BreadCrumb.css"
import "../components/payment/Payment.css"
import "../assets/css/bootstrap.min.css"

import Footer from '../components/navigation/Footer';
import BreadCrumb from '../components/navigation/BreadCrumb';
import Payment_Frame from '../components/payment/Payment_frame';
import Payment_content from '../components/payment/Payment_content';

const Payment = (props) => {

  return(
    <React.Fragment>
      <React.Fragment>
        <BreadCrumb>
          <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                  <h1 className="page-title" style={{display: "inline-block", marginRight: "10px"}}>결제하기</h1>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                    <li><a href="/" style={{textDecoration:'none'}}><i class="lni lni-home"></i> 홈</a></li>
                    <li>주문하기</li>
                    <li>결제하기</li>
              </ul>
          </div>
        </BreadCrumb>

        <Payment_Frame>
            <Payment_content/>
        </Payment_Frame>
        
        
      </React.Fragment>
      <Footer />
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
    
  )
};

export default Payment;