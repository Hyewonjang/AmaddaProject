import './single_item.css'
import { useState } from 'react';
const SB_Item = (props) => {

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

    const coupon_popUp_visible = ()=>{
        props.propFunction(1)
    }

    const [productNum, setProductNum] = useState(props.productNum);
    const plus_num=()=>{
        const new_num = Number(productNum) + 1;
        setProductNum(new_num)
    }
    const minus_num=()=>{
        if(Number(productNum) > 1){
            const new_num = Number(productNum) - 1;
            setProductNum(new_num)
        }
    }

    props.propFunction2(productNum)

    return(
        <div className="single-item">
            <div className="row" style={{paddingTop:"10px", textAlign: "center", marginBottom:'10px'}}>
                <div className="col-lg-4 col-12">
                    <div style={{float:"left"}}><button className="item-checked" style={{border:'1px solid gray', width: '25px', marginTop: '38px', marginRight: '15px'}} onClick={(e)=>item_checked(e, e.currentTarget.checked, 0)}><i className="lni lni-checkmark"></i></button></div>
                    <div style={{float:"left"}}><img src={props.product_image} style={{width:'100px', height:'100px', marginRight: '15px', borderRadius:'10px'}}/></div>
                    <div style={{float:"left", textAlign: 'left'}}>
                        <div style={{paddingTop:'28px', fontWeight: '600'}}>{props.product_name}</div>
                        <div>8000원 </div>
                    </div>
                </div>
                <div className="col-lg-1 col-12" style={{paddingTop: '35px'}}>
                    <span style={{border: '1px solid gray', backgroundColor: 'whitesmoke', margin: "auto auto", textAlign: 'center'}}>
                        <button className="minus_button" onClick={()=>minus_num()}>-</button>
                        <span style={{margin: '0px',width:'18px'}}>{productNum}</span>
                        <button className="plus_button" onClick={()=>plus_num()}>+</button>
                    </span>
                </div>
                <div className="col-lg-2 col-12" style={{paddingTop: '35px'}}>{props.preprice*productNum}원</div>
                <div className="col-lg-2 col-12">
                    <div style={{marginTop:"20px"}}>{props.coupon_sale_price}원</div>
                    <button className="use-coupon" onClick={()=>coupon_popUp_visible()}>쿠폰사용</button>
                </div>
                <div className="col-lg-2 col-12" style={{paddingTop: '35px'}}>{props.preprice*productNum-props.coupon_sale_price}원</div>
                <div className="col-lg-1 col-12" style={{paddingTop: '35px'}}>{props.delivery_price}원</div>
                </div>
                <div className="col-12 single_total_price">
                <div style={{float:"left"}}>총금액</div>
                <div style={{float:'right'}}>{props.preprice*productNum-props.coupon_sale_price+props.delivery_price}원</div>
            </div>
        </div>

        // <div className="single-item">
        // <div className="row" style="padding-top:10px; text-align: center;">
        //     <div className="col-lg-4 col-12">
        //         <div style="float:left"><button className="item-checked" style="border:1px solid gray; width: 25px; margin-top: 38px; margin-right: 15px;" onClick="item_checked(event)"><i className="lni lni-checkmark"></i></button></div>
        //         <div style="float:left"><img src="./assets/images/products/product-10.jpg" style="width:100px;height:100px; margin-right: 15px;"></div>
        //         <div style="float:left; text-align: left;">
        //             <div style="padding-top:28px; font-weight: 600;">35온스 세제</div>
        //             <div>10000원</div>
        //         </div>
        //     </div>
        //     <div className="col-lg-1 col-12" style="padding-top: 35px">
        //         <span style="border: 1px solid gray; background-color: whitesmoke; margin: auto auto; text-align: center;">
        //             <button className="minus_button" onClick="minus_num()">-</button>
        //             <span style="margin: 0px;width:18px">1</span>
        //             <button className="plus_button" onClick="plus_num()">+</button>
        //         </span>
        //     </div>
        //     <div className="col-lg-2 col-12" style="padding-top: 35px;">10000원</div>
        //     <div className="col-lg-2 col-12">
        //         <div style="margin-top:20px">5000원</div>
        //         <button className="use-coupon" onClick="coupon_popUp_visible()">쿠폰사용</button>
        //     </div>
        //     <div className="col-lg-2 col-12" style="padding-top: 35px;">5000원</div>
        //     <div className="col-lg-1 col-12" style="padding-top: 35px;">2000원</div>
        // </div>
        // <div className="col-12 single_total_price">
        //     <div style="float:left">총금액</div>
        //     <div style="float:right;">7000원</div>
        // </div>
        // </div>

    )
  };
  
  export default SB_Item;