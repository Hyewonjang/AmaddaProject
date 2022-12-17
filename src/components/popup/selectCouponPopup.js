import './selectCouponPopup.css'
import { useState } from 'react';

const Select_Coupon_Popup = (props) => {

    const item_checked = (e, checked, id)=>{
        check_item(checked, id);
        if(e.currentTarget.style.color=='gray'){
            e.currentTarget.style.color='red';
            e.currentTarget.style.fontWeight="bold";
        }
        else{
            e.currentTarget.style.color='gray';
        }
    }

    const [checkedInputs, setCheckedInputs] = useState([]);

    const check_item = (checked, id) => {

        if (checked) {
            setCheckedInputs([...setCheckedInputs, id]);
          } else {
            // 체크 해제
            setCheckedInputs(checkedInputs.filter((el) => el !== id));
          }
    }

    const coupon_popUp_invisible = ()=>{
        props.propFunction(0)
    }

    props.propFunction2(checkedInputs)

    return(
        <div id="select_coupon" style={{width: "50%", display: ''}}>
        <div className="coupon-header">
            <h6 style={{display:'inline'}}>보유 쿠폰목록</h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{float:'right'}} onClick={()=>coupon_popUp_invisible()}></button>
        </div>
        <hr style={{width: '100%', margin:'10px auto'}}/>
        <div className="coupon-items">
            <div className="coupon-item">
                <div style={{float:'left'}}><button className="item-checkbox-btn" style={{border:'0px', marginRight:'10px',color:'gray'}} onClick={(e)=>item_checked(e, e.currentTarget.checked, 50)}><i className="lni lni-checkmark" style={{border:"1px solid gray", fontSize:'8px', padding: '3px'}}></i></button></div>
                <div className="coupon-content" style={{float: 'left', marginTop:'1px'}}>회원가입 기념 선물(전품목 50% 할인)</div>
                <div className="coupon-expiry-date" style={{float : 'right', marginTop:'1px'}}>0000-00-00</div>
            </div>
            <div className="coupon-item">
                <div style={{float:'left'}}><button className="item-checkbox-btn" style={{border:'0px', marginRight:'10px',color:'gray'}} onClick={(e)=>item_checked(e, e.currentTarget.checked, 70)}><i className="lni lni-checkmark" style={{border:"1px solid gray", fontSize:'8px', padding: '3px'}}></i></button></div>
                <div className="coupon-content" style={{float: 'left', marginTop:'1px'}}>회원가입 기념 선물(전품목 70% 할인 / 80,000원 이상 구매 시)</div>
                <div className="coupon-expiry-date" style={{float : "right", marginTop:"1px"}}>0000-00-00</div>
            </div>
        </div>
        <button type="button" className="coupon-button" onClick={()=>coupon_popUp_invisible()}>적용</button>
    </div>
    )
  };
  
  export default Select_Coupon_Popup;