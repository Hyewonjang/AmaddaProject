import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineIcon from "react-lineicons";

import amaddaLogo from '../../assets/logo_amadda.png';

import "bootstrap/dist/css/bootstrap.min.css";
import './Navigation.css'

const Navigation = (props) => {

  const [revisedOrNot, setRevisedOrNot] = useState(false)
  
  useEffect(()=>{
  if (props.revisedDetail == undefined){
    setRevisedOrNot(false)
  }
  else{
    setRevisedOrNot(true)
  }}, [props.revisedDetail] )


  return(
    <React.Fragment>
      <header className="header navbar-area">
        {/* start topbar */}
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="top-left">
                     
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12" style={{marginBottom:'0px'}}>
                    <div className="top-middle">
                        
                          <ul className="useful-links">
                            <div className='welcome'>환영합니다.</div>
                          </ul>
                        

                        {props.authState === true &&
                          <ul className="useful-links">
                            <li><Link to ='/purchase-history' >구매 내역</Link></li>
                            <li><Link to="/subscribe">구매주기 설정 사항</Link></li>
                          </ul>
                        }
                    
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                      <div className="top-end">
                          <div className="user">
                              <i className="lni lni-user"></i>
                              {props.authState === false && <span>안녕하세요!</span>}
                              {props.authState === true && <span>{revisedOrNot ? props.revisedDetail.revisedUsername : '아기멋사'}님</span>}
                          </div>
                            {props.authState === false &&
                                <ul className="user-login">
                                    
                                    <li>
                                        <Link to='/auth' className='removeUnderbar'>로그인</Link>
                                    </li>
                                    <li>
                                        <Link to='/new-member' className='removeUnderbar'>회원가입</Link>
                                    </li>
                                </ul>
                            }
                            
                            {props.authState === true &&
                            
                            <ul className="user-login">
                                <li>
                                    <Link to='/' className='removeUnderbar' onClick={props.logout}>로그아웃</Link>
                                </li>
                                <li>
                                    <Link to='/my-page' style={{textDecoration :'none'}}>마이페이지</Link>
                                </li>
                            </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* start middlebar */}
        <div className="header-middle">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-7">
                        {/* <!-- Start Header Logo --> */}
                        <Link className="navbar-brand" to="/">
                          <img src={amaddaLogo} alt="Logo" />
                        </Link>
                        {/* <!-- End Header Logo --> */}
                    </div>
                    <div className="col-lg-5 col-md-7 d-xs-none">
                        {/* <!-- Start Main Menu Search --> */}
                        <div className="main-menu-search">
                            {/* <!-- navbar search start --> */}
                            <div className="navbar-search search-style-5">
                                <div className="search-select">
                                    {/* <!-- <div class="select-position">
                                        <select id="select1">
                                            <option selected>All</option>
                                            <option value="1">option 01</option>
                                            <option value="2">option 02</option>
                                            <option value="3">option 03</option>
                                            <option value="4">option 04</option>
                                            <option value="5">option 05</option>
                                        </select>
                                    </div> --> */}
                                </div>
                                <div className="search-input">
                                    <input type="text" placeholder="Search" />
                                </div>
                                <div className="search-btn">
                                    <button><LineIcon name="search-alt"></LineIcon></button>
                                </div>
                            </div>
                            {/* <!-- navbar search Ends --> */}
                        </div>
                        {/* <!-- End Main Menu Search --> */}
                    </div>
                    <div className="col-lg-2 d-xs-none"></div>
                    <div className="col-lg-2 d-xs-none" style={{textAlign:'right', paddingTop:'7px', paddingRight: '25px'}}>
                        <Link to='/shopping-basket' style={{color:'black', textAlign:'right', display:'inline-block', fontSize:'18px'}}><i className="lni lni-cart lni-cart-css" style={{float:'right'}}></i></Link>
                        {/* <span style={{margin:'10px'}}></span>
                        <Link to='/shopping-basket' style={{color:'black', textAlign:'right', display:'inline-block', fontSize:'18px'}}><i className="lni lni-heart-filled" style={{float:'right'}}></i></Link> */}
                    </div>
                </div>
            </div>
        </div>

        {/* start header bottom */}
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="nav-inner">
                        {/* <!-- Start Mega Category Menu --> */}
                        <div className="mega-category-menu">
                            <span className="cat-button"><i className="lni lni-menu"></i>전체 카테고리</span>
                            <ul className="sub-category">
                                <li><a href="product-grids.html" className='removeUnderbar'>욕실 용품<i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html" className='removeUnderbar'>칫솔/치약/비누</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>화장실 휴지</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>수건</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>욕실 슬리퍼</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>샴푸/린스/바디워시</a></li>
                                    </ul>
                                </li>
                                <li><a href="product-grids.html" className='removeUnderbar'>청소/세탁 용품<i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html" className='removeUnderbar'>물티슈</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>빗자루/청소기</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>휴지통/쓰레기봉투</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>빨래 건조대</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>세탁 세제</a></li>
                                    </ul>
                                </li>
                                <li><a href="product-grids.html" className='removeUnderbar'>침구류<i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html" className='removeUnderbar'>침대/매트리스</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>이불/베개</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>온수매트</a></li>
                                    </ul>
                                </li>
                                <li><a href="product-grids.html" className='removeUnderbar'>주방용품<i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html" className='removeUnderbar'>숟가락/젓가락</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>접시</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>물컵</a></li>
                                    </ul>
                                </li>
                                <li><a href="product-grids.html" className='removeUnderbar'>식품<i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html" className='removeUnderbar'>생수/음료</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>간편조리식품</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>건강식품</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>과자/간식</a></li>
                                    </ul>
                                </li>    
                                <li><a href="product-grids.html" className='removeUnderbar'>기타<i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html" className='removeUnderbar'>책상/의자</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>기초화장품</a></li>
                                        <li><a href="product-grids.html" className='removeUnderbar'>전자제품</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Mega Category Menu --> */}
                        {/* <!-- Start Navbar --> */}
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            
                        </nav>
                        {/* <!-- End Navbar --> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    {/* <!-- Start Nav Social --> */}
                    <div className="nav-social">
                      <ul style={{marginTop:'15px'}}>
                        <li>
                            <a href="https://www.facebook.com"><i className="lni lni-facebook-filled"></i></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com"><i className="lni lni-twitter-original"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com"><i className="lni lni-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.skype.com"><i className="lni lni-skype"></i></a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Nav Social --> */}
                </div>
            </div>
        </div>
      </header>
      {props.children}
    </React.Fragment>
    
    
  )
};

export default Navigation;