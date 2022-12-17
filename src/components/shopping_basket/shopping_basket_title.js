const SB_Frame_Title = (props) => {
  return(
    <div className="shopping-list-title">
        <div className="row basket-header">
            <div className="col-lg-4 col-12" >상품명</div>
            <div className="col-lg-1 col-12" style={{borderLeft:'1px solid gray'}}>수량</div>
            <div className="col-lg-2 col-12" style={{borderLeft:'1px solid gray'}}>(할인전)가격</div>
            <div className="col-lg-2 col-12" style={{borderLeft:'1px solid gray'}}>할인금액</div>
            <div className="col-lg-2 col-12" style={{borderLeft:'1px solid gray'}}>할인적용금액</div>
            <div className="col-lg-1 col-12" style={{borderLeft:'1px solid gray'}}>배송비</div>
        </div>
    </div>
  )
};

export default SB_Frame_Title;