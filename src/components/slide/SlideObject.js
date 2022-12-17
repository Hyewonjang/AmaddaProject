import React, { useState } from 'react';
import './SlideObject.css';
import LineIcon from "react-lineicons";

const SlideObject = (props) => {
  const [slidePx, setSlidePx] = useState(0);

  return(
    <React.Fragment>
      <div>{props.onCurrentCategory}</div>
      <div className='slide-object'>
        <button className='slide-button'><LineIcon name="chevron-left"></LineIcon></button>
        
        <button className='slide-button'><LineIcon name="chevron-right"></LineIcon></button>
      </div>
    </React.Fragment>
  )
};

export default SlideObject;