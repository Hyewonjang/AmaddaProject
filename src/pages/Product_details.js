import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '../components/navigation/Footer';
import BreadCrumb from '../components/navigation/BreadCrumb';
import ItemDetail from '../components/item/ItemDetail';
import ItemDetailInfo from '../components/item/ItemDetailInfo';
import ItemReview from '../components/item/ItemReview';
import ItemInquiry from '../components/item/ItemInquiry';
import ItemBasicInfo from './../components/item/ItemBasicInfo';
import InquiryPopup from '../components/popup/InquiryPopup';

const Product_details = (props) => {
  
  const [iqPopupShow, setIqPopupShow] = useState(0);
  const IpPopupShow = (show) => {
    setIqPopupShow(show);
  }

  

  return(
    <React.Fragment>
      <React.Fragment>
        <BreadCrumb>
          <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                  <h1 className="page-title" style={{display: "inline-block", marginRight: "10px"}}>샴푸 펌프 병(대형)</h1>
                  <span>상품번호 : {props.product_number}</span>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                  <li><a href="index.html"><i className="lni lni-home"></i> 홈</a></li>
                  <li><a href="product-grids.html">욕실용품</a></li>
                  <li>샴푸/린스/바디워시</li>
              </ul>
          </div>
        </BreadCrumb>

        <section className="item-details section">
          <ItemBasicInfo propFunction = {props.propFunction} propFunction2={props.propFunction2} propFunction3 = {props.propFunction3} propFunction4={props.propFunction4}/>
          <ItemDetail>
              <ItemDetailInfo/>
              <ItemReview/>
              <ItemInquiry propFunction = {IpPopupShow}/>
          </ItemDetail>
        </section>  

        {iqPopupShow ? <InquiryPopup propFunction = {IpPopupShow}/> : ""}  

      </React.Fragment>
      <Footer />
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
    
  )
};

export default Product_details;