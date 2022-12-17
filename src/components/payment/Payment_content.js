import '../item/ItemDetail.css'
import './Payment.css'
import Payment_cardcom from './Payment_cardcom';
import Payment_cardnum from './Payment_cardnum';
import Payment_card_exp from './Payment_card_exp';
import Payment_name from './Payment_name';
import Payment_phnum_authen from './Payment_phnum_authen';
import Payment from './../../pages/Payment';
import React, { useState } from 'react';

const Payment_content = (props) => {

    const current = document.getElementById("current");
    const opacity = 0.6;
    const imgs = document.querySelectorAll(".img");
    imgs.forEach(img => {
        img.addEventListener("click", (e) => {
            //reset opacity
            imgs.forEach(img => {
                img.style.opacity = 1;
            });
            current.src = e.target.src;
            //adding class 
            //current.classList.add("fade-in");
            //opacity
            e.target.style.opacity = opacity;
        });
    });

    const [payComplete, setPayComplete] = useState(0);
    const text = '결제가 완료되었습니다.';
    const confirm = ()=>{
        setPayComplete(1);
    }


    return(
        
        <div className="card-body" style={{padding: '7%'}}>
            {payComplete ? <div style={{textAlign:'center', fontSize:"20px"}}>{text}</div> :
            <div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <h2 style={{margin: '0px 0px 20px 10px', fontWeight:'bold', fontSize:'30px', height:'35px'}}>결제하기<br/></h2>
            </div>

            <div style={{float:'right', marginRight: '70px'}}>
                <p style={{fontSize: '17px',backgroundColor:'white'}}>결제 금액: {props.price}원</p>
            </div>

            <div className="form-validation" style={{padding: '10%', display:'block'}}>
                {/* <form className="form-valide" action="#" method="post" action={} enctype="multipart/form-data"> */}
                    {/* <!-- {% csrf_token %} --> */}
                    
                    <Payment_name />

                    <Payment_phnum_authen />

                    <Payment_cardcom />
                    
                    <Payment_cardnum />

                    <Payment_card_exp />

                {/* </form> */}
                <div className="submit" style={{float:'right'}}>
                    <button type="submit" className="btn btn-dark mb-2 payment-btn"
                        // style={{backgroundColor:'coral', borderColor: 'transparent'}} onClick={()=>confirm('결제가 완료되었습니다.')} location.href='shopping-basket.html'>완료</button>
                        onClick={()=>confirm()} 
                    >완료</button>
                </div>
            </div>
            </div>
            }
        </div>

    )
  };
  
  export default Payment_content;