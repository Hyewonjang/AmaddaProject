const RWR_Frame_Title = (props) => {
  return(
    <div className="review-list-title">
        <div className="row review-header">
            <div className="col-lg-2 col-12" >주문일(결제번호)</div>
            <div className="col-lg-4 col-12" >상품명</div>
            <div className="col-lg-3 col-12" style={{borderLeft:'1px solid gray'}}>구매후기 작성 상태</div>
            <div className="col-lg-3 col-12" style={{borderLeft:'1px solid gray'}}>구매후기 작성 기한</div>
        </div>
    </div>
  )
};

export default RWR_Frame_Title;