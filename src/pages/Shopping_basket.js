import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '../components/navigation/Footer';
import BreadCrumb from '../components/navigation/BreadCrumb';
import SB_Frame from '../components/shopping_basket/shopping_basket_frame';
import SB_Frame_Title from '../components/shopping_basket/shopping_basket_title';
import SB_Item from '../components/shopping_basket/shopping_basket_item';
import '../components/shopping_basket/shopping_basket.css'
import Select_Coupon_Popup from './../components/popup/selectCouponPopup';
import SB_Total_Price from './../components/shopping_basket/shopping_basket_total_price';
import product_image1 from '../assets/images/products/product-9.jpg'
import product_image2 from '../assets/images/products/product-10.jpg'
import product_image0 from '../assets/images/product-details/product_sample1_shampoo.jpg'


const Shopping_basket = (props) => {
  const [productNum, setProductNum] = useState(1);

  const AddProduct =()=>{
    const count = productNum+1;
    setProductNum(count);
  }
  const MinusProduct=()=>{
    const count = productNum-1;
    setProductNum(count);
  }

  const [cpPopupShow, setCpPopupShow] = useState(0);
  const CouponPopup = (show) => {
    setCpPopupShow(show);
  }

  const [salePoint, setSalePoint] = useState(0);

  return(
    <React.Fragment>
      <React.Fragment>
        <BreadCrumb>
          <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                  <h1 className="page-title" style={{display: "inline-block", marginRight: "10px"}}>장바구니</h1>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                    <li><a href="index.html" style={{textDecorationLine:'none'}}><i className="lni lni-home"></i> 홈</a></li>
                    <li>장바구니</li>
              </ul>
          </div>
        </BreadCrumb>

        <section className="shopping-basket section">
            <div className="container">
                <SB_Frame>
                    <SB_Frame_Title/>
                    <SB_Item propFunction = {CouponPopup} product_image = {product_image0} product_name = '샴푸 펌프 병(대형)' preprice={4500} coupon_sale_price={0} delivery_price={0}/>
                    {/* <SB_Item propFunction = {CouponPopup} product_image = {product_image1} product_name = '화장품 용기(1묶음당 4병)' preprice={8000} coupon_sale_price={0} delivery_price={3000}/>
                    <SB_Item propFunction = {CouponPopup} product_image = {product_image2} product_name = '35온스 세제' preprice={10000} coupon_sale_price={5000} delivery_price={2000}/> */}
                </SB_Frame>
                <SB_Total_Price product_num = {productNum} product_total_preprice={4500} total_coupon_sale_price ={salePoint} total_delivery_price={0} />
                {cpPopupShow ? <Select_Coupon_Popup propFunction = {CouponPopup} propFunction2= {setSalePoint}/> : ""}
            </div>
        </section>         

      </React.Fragment>
      <Footer />
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
    
  )
};

export default Shopping_basket;