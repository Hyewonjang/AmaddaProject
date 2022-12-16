import product_shampoo_1 from "../../assets/images/product-details/product_sample1_shampoo.jpg";
import rating from "../../assets/images/product-details/rating.PNG";
import ItemDetailInfo from './ItemDetailInfo';
import { useState } from 'react';
import ItemReview from "./ItemReview";
import ItemInquiry from "./ItemInquiry";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemBasicInfo = (props) => {

    const [productNum, setProductNum] = useState(1);
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


    return(
        <div className="container">
            <div className="top-area">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="product-images">
                            <main id="gallery">
                                <div className="main-img">
                                    {/* <a href="https://kr.freepik.com/free-psd/large-pump-bottle-mockup_12038968.htm#query=shampoo&position=0&from_view=keyword">작가 pmvchamara</a> 출처 Freepik*/}
                                    <img src={product_shampoo_1} id="current" alt="#" />
                                </div>
                                <div className="images">
                                    <img src="" className="img" alt="" style={{backgroundColor:"rgb(234, 228, 228)"}}/>
                                    <img src="" className="img" alt="" style={{backgroundColor:"rgb(234, 228, 228)"}}/>
                                    <img src="" className="img" alt="" style={{backgroundColor:"rgb(234, 228, 228)"}}/>
                                    <img src="" className="img" alt="" style={{backgroundColor:"rgb(234, 228, 228)"}}/>
                                    <img src="" className="img" alt="" style={{backgroundColor:"rgb(234, 228, 228)"}}/>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="product-info" style={{marginTop: "20px"}}>
                            <h2 className="title">샴푸 펌프 병(대형)</h2>
                            <p className="category" style={{backgroundColor:"white", textAlign:"left"}}>
                                <img src={rating} style={{height:"30px"}}/>
                                <span style={{fontSize:"small", margin: "0px 3px"}}>({props.rater_num})</span> | <span style={{margin:"0px 3px"}}>{props.buy_num}</span>
                            </p>
                            <div className="category" style={{textAlign:"left"}}><i className="lni lni-tag"></i> 판매처:<a href="{vendor링크}">{props.vendor}</a></div>
                            <h3 className="price">
                                <div style={{display:"inline-block", color:"red"}}>{props.sale}%</div> 
                                <span style={{fontSize:"small", marginLeft: "5px"}}>{props.original_price}원</span> 
                                <div style={{display: "inline-block", fontSize:"medium", marginLeft: "5px"}}>{props.sale_price}원</div>
                            </h3>
                            <p className="info-text" style={{backgroundColor:"white", textAlign:"left"}}>
                                {props.product_info}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                            <div>
                                <div><span style={{marginTop:"2px", marginBottom:"3px", color:"rgb(240, 88, 32)", fontWeight: "600"}}>배송료</span></div>
                                <div style={{marginLeft:"20px", marginBottom:"1px"}}>- 무료배송 {props.free_delivery_ox}</div>
                                <div style={{marginLeft:"20px"}}>- 추가배송료</div>
                                <div style={{marginLeft:"30px"}}>{props.additional_delivery_cost}</div>
                                <hr style={{color:"lightgray"}}/>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div style={{display:"block",backgroundColor: "rgb(192, 198, 205)", borderRadius: "10px", color: "black", paddingBottom: "15px"}}>
                                        <div style={{paddingTop:"15px", paddingLeft: "15px", height: "25px"}}>수량</div>
                                        <hr style={{width:"465px", textAlign:"center", color: "gray", marginTop:"20px", marginLeft:"10px"}}/>
                                        <span style={{marginLeft:"10px", display: "flex"}}>
                                            <div>
                                                <button onClick={()=>minus_num()} style={{display:"inline", backgroundColor: "whitesmoke", borderColor:"gray", padding: "0px 6px"}}>-</button>
                                                <span style={{backgroundColor: "whitesmoke", padding: "1px 5px", border: "1px solid gray"}}>{productNum}</span>
                                                <button onClick={()=>plus_num()} style={{display:"inline", backgroundColor: "whitesmoke", padding:"0px 5px", borderColor: "gray"}}>+</button>
                                            </div>
                                            <div style={{textAlign:"left", marginLeft: "auto", marginRight:"20px"}}>{props.sale_price*productNum}원</div>
                                        </span>
                                    </div>
                            </div>
                            <div className="bottom-content">
                                <div className="row align-items-end">
                                    <div className="col-lg-6 col-md-4 col-12">
                                        <div className="button cart-button">
                                            <Link to='/shopping-basket' className="btn"><button className="btn" style={{width: "100%"}}><i className="lni lni-cart"></i>장바구니</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-12">
                                        <div className="button2 cart-button">
                                            <Link to='/payment' className="btn"><button className="btn">구매하기</button></Link>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4 col-md-4 col-12">
                                        <div className="wish-button">
                                            <button className="btn"><i className="lni lni-heart"></i>찜</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div> 
                </div>
        </div>
    </div>
  )
};

ItemBasicInfo.defaultProps = {
    rater_num : 5,
    buy_num : 10,
    vendor : '쿠팡',
    sale : 10,
    original_price : 5000,
    sale_price : 4500,
    product_info : "",
    free_delivery_ox : 'O',
    additional_delivery_cost : 'none',
}

export default ItemBasicInfo;