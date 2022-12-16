import {React,useState, useEffect} from "react";
import './BasicInfo.css';

const BasicInfo = (props) => {
  const [revisedOrNot, setRevisedOrNot] = useState(false)
  
  useEffect(()=>{
  if (props.revisedDetail == undefined){
    setRevisedOrNot(false)
  }
  else{
    setRevisedOrNot(true)
  }}, [props.revisedDetail] )

  return(
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card info-card">
          <div className="card-body" style={{margin: '25px'}}>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 info-title">회원정보</h6>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >
              <h2 className="info-title-big">회원정보</h2>
            </div>

            <div className="info-box">
              <div className="info-flex">
                <div className="info-detail ">닉네임</div>
                <div className="info-content">{revisedOrNot ? props.revisedDetail.revisedUsername : '아기멋사'}</div>
              </div>
              <div className="info-flex">
                <div className="info-detail ">핸드폰 번호</div>
                <div className="info-content ">{revisedOrNot ? props.revisedDetail.revisedPhone : '010-0000-0000'}</div>
              </div>
              <div className="info-flex">
                <div className="info-detail ">메일</div>
                <div className="info-content">{revisedOrNot ? props.revisedDetail.revisedAddress : props.userDetail.userEmail}</div>
              </div>
              <div className="info-flex">
                <div className="info-detail">관심 물품(복수 선택 가능)</div>
                <div className="info-content">
                  {revisedOrNot ? props.revisedDetail.revisedInterest.map((cate, index) => {
                    if(index+1 == props.revisedDetail.revisedInterest.length)
                      return <span>{cate}</span>
                    else
                      return <span style={{paddingRight:'10px'}}>{cate},</span>
                  }):''}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BasicInfo;