import React from 'react';
import Footer from '../components/navigation/Footer';
import './Events.css';
import BreadCrumb from '../components/navigation/BreadCrumb';
import ContentBox from '../components/navigation/ContentBox';

const Events = () => {

  const DUMMY_EVENTS = [
    {
      id: 'e1',
      eventImage: 'img/product-4.jpg',
      eventTitle: '특별할인 이벤트'
    },
    {
      id: 'e2',
      eventImage: 'img/product-5.jpg',
      eventTitle: '폐업정리'
    },
    {
      id: 'e3',
      eventImage: 'img/product-6.jpg',
      eventTitle: '2+1 이벤트'
    },
  ];

  return(
    <React.Fragment>
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
                      <img src={event.eventImage}/>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentBox>
      <Footer />
    </React.Fragment>
    
  )
};

export default Events;