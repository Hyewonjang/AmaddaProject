import './single_item.css'
import { Link } from 'react-router-dom';

const SB_Total_Price = (props) => {

    props.propFunction((props.product_total_preprice-props.total_coupon_sale_price/100)*props.productNum+props.total_delivery_price)

    return(
        <div className="shopping-basket-total-price">
        <div className="single-block">
            <h3 style={{margin: '10px'}}>전체 합계</h3>
            <div className="row">
                <div className="col"></div>
                <div className="col-lg-8" style={{margin: '15px 0px', paddingLeft: '20px', fontSize:'larger'}}>
                    <div>
                        <div style={{float:'left', marginLeft:'42px'}}>상품수</div>
                        <div style={{float:'right', marginRight:'35px'}}>{props.productNum}개</div>
                    </div>
                    <hr style={{margin: '8px 0px', width:'90%', marginLeft:'40px'}}/>
                    <div>
                        <div style={{float:'left', marginLeft:'42px'}}>상품금액</div>
                        <div style={{float:'right', marginRight:'35px'}}>{props.product_total_preprice*props.productNum}원</div>
                    </div>
                    <hr style={{margin: '8px 0px', width:'90%', marginLeft:'40px'}}/>
                    <div>
                        <div style={{float:'left', marginLeft:'42px'}}>할인금액</div>
                        <div style={{float:'right', marginRight:'35px'}}>{props.product_total_preprice*props.productNum*props.total_coupon_sale_price/100}원</div>
                    </div>
                    <hr style={{margin: '8px 0px', width:'90%', marginLeft:'40px'}}/>
                    <div>
                        <div style={{float:'left', marginLeft:'42px'}}>배송비</div>
                        <div style={{float:'right', marginRight:'35px'}}>{props.total_delivery_price}원</div>
                    </div>
                    <hr style={{margin: '8px 0px', width:'90%', marginLeft:'40px'}}/>
                    <div style={{marginTop: '15px'}}>
                        <h4 style={{float:'left', marginLeft:'42px'}}>전체 주문금액</h4>
                        <h4 style={{float:'right', marginRight:'35px'}}>{(props.product_total_preprice-props.total_coupon_sale_price/100)*props.productNum+props.total_delivery_price}원</h4>
                    </div>
                    </div>
                    <div>
                    <Link to='/payment' className="order_btn_Link">주문하기</Link>
                    </div>
                </div> 
            </div>  
        </div>
    )
  };
  
  export default SB_Total_Price;