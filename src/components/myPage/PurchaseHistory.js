import './PurchaseHistory.css';
import { Link } from 'react-router-dom';


// 구매내역 더미 데이터
const DUMMY_HISTORY = [
    {
        id: "p1",
        productName: "화장품 용기",
        productPrice: 8000,
        productAmount: 2,
        PurchasedDate: '2022-03-21',
        productImage: "img/product-9.jpg",
        deliveryStatus: '배송완료',
        categoty: '기타',
    },
    {
        id: "p2",
        productName: "헤드폰",
        productPrice: 32000,
        productAmount: 1,
        PurchasedDate: '2022-05-15',
        productImage: "img/product-5.jpg",
        deliveryStatus: '배송완료',
        productCategoty: '기타',
    },    
    {
        id: "p3",
        productName: "공기청정기",
        productPrice: 451000,
        productAmount: 2,
        PurchasedDate: '2022-03-21',
        productImage: "img/product-2.jpg",
        deliveryStatus: '배송완료',
        productCategoty: '청소/세탁용품',
    },
];

const PurchaseHistory = () => {
  return(
    <section class="shopping-basket section">
    <div class="container" >
        <div class="top-area">
            <div class="row align-items-center">
                <div class="shopping-list-title">
                    <div class="row basket-header">
                        <div class="col-lg-4 col-12">상품명</div>
                        <div class="col-lg-1 col-12 row-name">수량</div>
                        <div class="col-lg-2 col-12 row-name">결제금액</div>
                        <div class="col-lg-2 col-12 row-name">구매일자</div>
                        <div class="col-lg-2 col-12 row-name">추가정보</div>
                        <div class="col-lg-1 col-12 row-name" style={{fontSize:'12px', fontWeight:'normal'}}>배송상태</div>
                    </div>
                </div>


                {DUMMY_HISTORY.map((item) => (
                    <div class="single-item">
                        <div class="row row2">
                            <div class="col-lg-4 col-12" style={{marginTop:'5px'}}>
                                <div style={{float: 'left'}}><img src={item.productImage} className='product-image' /></div>
                                <div style={{float: 'left'}}>
                                    <div style={{paddingTop: '28px', fontWeight: '600'}}>{item.productName}</div>
                                    <div>{item.productPrice}원</div>
                                </div>
                            </div>
                            <div class="col-lg-1 col-12" style={{paddingTop: '35px'}}>
                                <div>{item.productAmount}개</div>
                            </div>
                            <div class="col-lg-2 col-12" style={{paddingTop: '35px'}}>{item.productPrice * item.productAmount}원</div>
                            <div class="col-lg-2 col-12" style={{paddingTop: '35px'}}>
                                <div>{item.PurchasedDate}</div>
                            </div>
                            <div class="col-lg-2 col-12" style={{paddingTop: '20px'}}>
                                
                                <div><button class="use-coupon">구매영수증</button></div>
                                <div><button class="use-coupon">자세히</button></div>

                            </div>
                            <div class="col-lg-1 col-12" style={{paddingTop: '35px', fontSize:'12px', fontWeight:'normal'}}>{item.deliveryStatus}</div>
                        </div>
                        <div class="col-12">
                            <div style={{float: 'right', marginTop:'-20px', marginBottom:'10px'}}>
                                <div><button class="use-coupon use-coupon1">미수령</button>
                                <button class="use-coupon use-coupon1">반품신청</button>
                                <button class="use-coupon use-coupon1">교환신청</button>
                                <Link to='/RW-Review'><button class="use-coupon use-coupon1">구매후기</button></Link></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        <div style={{width:'100%'}} className="select-num"> 
            <ul style={{listStyle: 'none', marginTop:'25px', padding:'auto auto', width:'100%', textAlign:'center'}}>
                <li style={{display:'inline-block', color:'black'}}><a class="page-link" href="#">1</a></li>
                {/* <li style={{display:'inline-block', color:'black'}}><a class="page-link" href="#">2</a></li>
                <li style={{display:'inline-block', color:'black'}}><a class="page-link" href="#">3</a></li>
                <li style={{display:'inline-block', color:'black'}}><a class="page-link" href="#">4</a></li>
                <li style={{display:'inline-block', color:'black'}}><a class="page-link" href="#">5</a></li>
                <li style={{display:'inline-block', color:'black'}}><a class="page-link" href="#">6</a></li> */}
            </ul>
        </div>
        

            
    </div>
    </div>
    </section>
  )
};

export default PurchaseHistory;