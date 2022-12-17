import React, { useState } from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import product_sample1_shampoo from '../assets/images/product-details/product_sample1_shampoo.jpg'

import { Link } from 'react-router-dom';

import Footer from '../components/navigation/Footer';
import ContentBox from '../components/navigation/ContentBox';
import BreadCrumb from '../components/navigation/BreadCrumb';
// import SlideObject from '../components/slide/SlideObject';

const DUMMY_CATEGORY = [
  {
    num: 1,
    category: '욕실'
  },
  {
    num: 2,
    category: '청소/세탁용품'
  },
  {
    num: 3,
    category: '침구류'
  },
  {
    num: 4,
    category: '주방용품'
  },
  {
    num: 5,
    category: '식품'
  },
  {
    num: 6,
    category: '기타'
  },
];


const DUMMY_EVENTS = [
  {
    id: 'e1',
    eventImage: 'img/product-16.jpg',
    eventTitle: '특별할인 이벤트'
  },
  {
    id: 'e2',
    eventImage: 'img/product-17.jpg',
    eventTitle: '폐업정리'
  },
  {
    id: 'e3',
    eventImage: 'img/product-6.jpg',
    eventTitle: '2+1 이벤트'
  },
];





const Home = (props) => {


  const [currentCategory, setCurrentCategory] = useState('욕실');
  const [imagef, setImagef] = useState('img/product_sample1_shampoo.jpg');
  const [images, setImages] = useState('img/product-11.jpg');
  const [imaget, setImaget] = useState('img/product-13.jpg');

  const categoryChangeHandler = (event) => {
    setCurrentCategory(event.target.value);
    if(imagef == 'img/product_sample1_shampoo.jpg'){
      setImagef( 'img/product-12.jpg' )
      setImages( 'img/product-14.jpg' )
      setImaget( 'img/product-15.jpg' )
    }
    else{
      setImagef( 'img/product_sample1_shampoo.jpg' )
      setImages( 'img/product-11.jpg' )
      setImaget( 'img/product-13.jpg' )
    }

  };
  
  
const DUMMY_ITEMS = [
  {
    id: 'i1',
    currentCategory: currentCategory,
    item: `first item of ${currentCategory}`,
    image: imagef,
  },
  {
    id: 'i2',
    currentCategory: currentCategory,
    item: `second item of ${currentCategory}`,
    image: images,
  },
  {
    id: 'i3',
    currentCategory: currentCategory,
    item: `third item of ${currentCategory}`,
    image: imaget,
  },
];

  return(
    <React.Fragment>
      {props.authState === false &&
        <React.Fragment>
          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title main-name">전체 상품 카테고리</h1>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <button className='breadcrumb-button'>추천 상품</button>
                <button className='breadcrumb-button'>최근 본 상품</button>
              </ul>
            </div>
          </BreadCrumb>

          <ContentBox>
            <div className='category-box'>
              <div className='slide-content'>
                <ul>
                  {DUMMY_CATEGORY.map((category, index) => (
                    <li className='category-list'><button onClick={(e)=>categoryChangeHandler(e)} key={category.num} value={category.category}>{category.category}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                {/* <SlideObject onCurrentCategory={currentCategory} /> */}
                <div className='event-box' style={{paddingBottom:'20px'}}>
                  {DUMMY_ITEMS.map((cateItems) => (
                    <Link to='/product-details'>
                    <div className='event' style={{marginLeft: '30px'}}>
                      <div className='event-image'>
                        <div className='event-image-text'>
                          <div style={{paddingTop:'20px'}}>{cateItems.item}</div>
                          <img src={cateItems.image}/>
                        </div>
                      </div>
                    </div>
                    </Link>
                  ))}
                </div>
              </div>
              
            </div>
           
          </ContentBox>

          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title main-name">이벤트</h1>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <Link className='breadcrumb-button' to='/events' style={{textDecoration : 'none'}}>이벤트 더 보기</Link>
              </ul>
            </div>
          </BreadCrumb>
          <ContentBox>
            <div className='event-box' style={{paddingBottom:'20px'}}>
              {DUMMY_EVENTS.map((event) => (
                <div className='event'>
                  <div className='event-image'>
                    
                    <div className='event-image-text'>
                      <div style={{paddingTop:'20px'}}>{event.eventTitle}</div>
                      <img src={event.eventImage} />
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentBox>
         
        </React.Fragment>
      }

      {props.authState === true &&
        <React.Fragment>
          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title main-name">알림</h1>
                </div>
            </div>
          </BreadCrumb>
          

          <ContentBox>
            <div className="single-item">
              <div className="row row1">
                  <div className="col-12">
                          <div className="align-padding"><span className="warning">(긴급!) 자동 구매 중지 상품 안내</span></div>
                          <div className="align-padding">상품명 35온스 세제 - 자동 구매 중지 사유: 가격 변동
                              <button className="use-coupon use-coupon1">자세히</button>
                          </div>
                          <div className="align-padding">상품명 위생장갑 - 관련 춤목 신제품 출시
                              <button className="use-coupon use-coupon1">자세히</button>
                          </div>
                          
                  </div>
              </div>
            </div>
          </ContentBox>

          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title main-name">전체 상품 카테고리</h1>
                  
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <ul className="breadcrumb-nav">
                  <button className='breadcrumb-button'>추천 상품</button>
                  <button className='breadcrumb-button'>최근 본 상품</button>
                </ul>
            </div>
          </BreadCrumb>
          <ContentBox>
            <div className='category-box'>
              <div className='slide-content'>
                <ul>
                  {DUMMY_CATEGORY.map((category) => (
                    <li className='category-list'><button onClick={categoryChangeHandler} key={category.num} value={category.category}>{category.category}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                {/* <SlideObject onCurrentCategory={currentCategory} /> */}
                <div className='event-box' style={{paddingBottom:'20px'}}>
                  {DUMMY_ITEMS.map((cateItems) => (
                    <Link to='/product-details'>
                    <div className='event' style={{marginLeft: '30px'}}>
                      <div className='event-image'>
                        <div className='event-image-text'>
                          <div style={{paddingTop:'20px'}}>{cateItems.item}</div>
                          <img src={cateItems.image} />
                        </div>
                      </div>
                    </div>
                    </Link>
                  ))}
                  
                </div>
              </div>
            </div>
            
          </ContentBox>

          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title main-name">이벤트</h1>
                </div>
            </div>
          </BreadCrumb>
          <ContentBox>
            <div className='event-box' style={{paddingBottom:'20px'}}>
              {DUMMY_EVENTS.map((event) => (
                <div className='event'>
                  <div className='event-image'>
                    
                    <div className='event-image-text'>
                      <div style={{paddingTop:'20px'}}>{event.eventTitle}</div>
                      <img src={event.eventImage} style={{objectFit:'contain'}}/>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentBox>
        
        </React.Fragment>
      } 
      <Footer />
      <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
    
  )
};

export default Home;