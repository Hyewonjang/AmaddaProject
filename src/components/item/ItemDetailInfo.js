
import ItemReview from './ItemReview';
import ItemInquiry from './ItemInquiry';
import PropTypes from "prop-types";


const ItemDetailInfo = (props) => {
  return(
    <div class="product-details-info">
        <div class="single-block">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="info-body custom-responsive-margin">
                        <h4>상품 소개</h4>
                        <p style={{backgroundColor:"white", textAlign:"left"}}>
                            {props.product_info_detail}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        <h4 style={{marginTop:"50px"}}>교환/반품 정보</h4>
                        <ul class="features">
                            <li>반품배송비(편도) : 편도 {props.return_cost}원</li>
                            <li>교환배송비(왕복) : 편도 {props.sexchange_cost}원</li>
                            <li>보내실 곳 : {props.address}</li>
                            <li style={{marginBottom: "5px"}}>교환조건</li>
                                <div style={{marginLeft: "15px"}}>{props.exchange_condition}</div>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="info-body">
                        <h4>판매자 정보</h4>
                        <ul class="normal-list">
                            <li><span>상호명 : </span>{props.business_name}</li>
                            <li><span>대표자 : </span>{props.representative}</li>
                            <li><span>연락처 : </span>{props.phone_number}</li>
                            <li><span>통신판매업자번호 : </span>{props.supplier_number_1}</li>
                            <li><span>사업자등록번호 : </span>{props.company_register_num}</li>
                            <li><span>사업장소재지 : </span>{props.business_location}</li>
                            <li><span>Email : </span>{props.business_email}</li>
                        </ul>
                        <h4 style={{marginTop:"50px"}}>주의사항</h4>
                        <ul class="normal-list">
                            <li>전자상거래 등에서의 소비자보호법에 관한 법률에 의거하여 미성년자가 물품을 구매하는 경우, 법정대리인이 동의하지 않으면 미성년자 본인 또는 법정대리인이 구매를 취소할 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
};

ItemDetailInfo.defaultProps = {
    product_info_detail : '',
    return_cost : 4000,
    sexchange_cost : 8000,
    address : 'oo시 oo구 oo로 XXXX',
    exchange_condition : "- 파손 또는 손상된 상태로 배송된 경우",
    business_name : ' OO업체',
    representative : ' XXX',
    phone_number : ' 000-0000-0000',
    supplier_number_1 : ' 0000-0000-0000',
    company_register_num : ' 0000-0000-0000',
    business_location : ' xx시 xx구 xx로 **',
    business_location : ' product@gmail.com'
}

export default ItemDetailInfo;