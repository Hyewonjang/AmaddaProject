import './SubscribeTermPopup.css'
import { useState } from 'react';

const SubscribeTermPopup = (props) => {

    const subscribe_term_popUp_invisible = ()=>{
        props.propFunction(0)
        props.propFunction2(subscribeTerm)
    }

    const [subscribeTerm, setSubscribeTerm] = useState()

  return(
    <div id="subscribe-term" style={{display: ''}}>
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">구독상품 자동구매 주기 변경</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>subscribe_term_popUp_invisible()}></button>
        </div>
        <div className="modal-body">
            <div className="form-group">
                <label for="review-message">자동구매주기(단위: 일)</label>
                <input className="form-control" id="review-message" rows="8" required value={subscribeTerm} onChange={(e)=>setSubscribeTerm(e.target.value)}/>
            </div>
        </div>
        <div className="modal-footer button">
            <button type="button" className="btn" onClick={()=>subscribe_term_popUp_invisible()}>제출</button>
        </div>
    </div>
  )
};

export default SubscribeTermPopup;