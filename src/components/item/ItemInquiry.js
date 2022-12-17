import InquiryPopup from '../popup/InquiryPopup';
import './ItemInquiry.css';
import { useState, useEffect } from 'react';

const ItemInquiry = (props) => {
    const inquiry_Popup_visible = ()=>{
        props.propFunction(1)
    }

    return(
        <div id='product_inquiry' className="product-details-info">
            <div className="single-block">
                <div className="row">
                    <div className="col-12">
                        <div className="inquiry_list">
                            <h5 style={{fontWeight:"500", display: "inline"}}>상품문의</h5>
                            <button onClick={()=>inquiry_Popup_visible()} style={{display:"inline", float:"right", width: "50px", backgroundColor: "rgb(240, 88, 32)", color: "white", border: "none", borderRadius: "10px", marginTop: "10px", marginRight: "7px"}}>작성</button>

                            <hr/>
                            <table style={{width:"100%", marginBottom:"10px"}}>
                                <tr style={{borderBottom:"1px solid gray"}}>
                                    <th className="col-lg-1 -col-12" style={{textAlign: 'center'}}>번호</th>
                                    <th className="col-lg-1 -col-12" style={{textAlign: 'center', borderLeft:'1px solid gray'}}>답변상태</th>
                                    <th className="col-lg-1 -col-12" style={{textAlign: 'center', borderLeft:'1px solid gray'}}>문의유형</th>
                                    <th className="col-lg-7 -col-12" style={{textAlign: 'center', borderLeft:'1px solid gray'}}>문의제목</th>
                                    <th className="col-lg-1 -col-12" style={{textAlign: 'center', borderLeft:'1px solid gray'}}>작성자</th>
                                    <th className="col-lg-1 -col-12" style={{textAlign: 'center', borderLeft:'1px solid gray'}}>작성일자</th>
                                </tr>
                                <tr id = "inquiry_0" className="single-inquiry" style={{textAlign:"center", borderBottom:"1px solid gray"}}>
                                    <td>0</td>
                                    <td style={{borderLeft:'1px solid gray'}}>답변완료</td>
                                    <td style={{borderLeft:'1px solid gray'}}>배송</td>
                                    <td style={{borderLeft:'1px solid gray'}}><button style={{backgroundColor: "whitesmoke", border:"none"}}>택배가 안 옵니다...</button></td>
                                    <td style={{borderLeft:'1px solid gray'}}>*****</td>
                                    <td style={{borderLeft:'1px solid gray'}}>0000.00.00</td>
                                </tr>
                                <tr id = "inquiry_0_answer" style={{display:"none"}}>
                                    <td colspan="6">
                                        <div style={{margin : "10px", backgroundColor:"rgb(236, 236, 236)", padding: "5px"}}> 
                                            <div style={{margin: "2px"}}>[질문] 일주일이 지났는데 아직 택배가 오지 않았어요? 언제쯤 도착할까요?</div>
                                            <div style={{margin: "2px"}}>[답변]</div>
                                            <div style={{margin: "2px 8px", textIndent: "10px"}}>
                                                고객님, 물품 전달이 늦어서 죄송합니다. 재고 부족으로 인해 배송이 지체되었습니다.
                                                내일 오전 중으로 물품이 배송될 수 있도록 조치하겠습니다. 불편을 드려 죄송합니다.
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>   
                        </div>
                    </div>
                </div>
            </div>
            {/* {visible ? <InquiryPopup/> : "" } */}
        </div> 
    )
  };
  
  export default ItemInquiry;
