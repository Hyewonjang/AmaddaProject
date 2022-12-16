import './InfoChange.css';
import { useRef, useState } from 'react';


const InfoChange = (props) => {
  const categories = [
    {
      cate: "욕실 용품",
      num: 1
    },
    {
      cate: "청소/세탁 용품",
      num: 2
    },
    {
      cate: "침구류",
      num: 3
    },
    {
      cate: "주방용풍",
      num: 4
    },
    {
      cate: "식품",
      num: 5
    },
  ];

  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordVerifyRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const [userName, setUserName] = useState()
  const [userPW, setUserPW] = useState()
  const [userVPW, setUserVPW] = useState()
  const [userPhone, setUserPhone] = useState()
  const [userAddress, setUserAddress] = useState()
  const [userInterest, setUserInterest] = useState([])

  const changeHandler = (id, checked) => {
    if (checked) {
      setUserInterest([...userInterest, id]);
    } else {
      // 체크 해제
      setUserInterest(userInterest.filter((el) => el !== id));
    }
  };

  const infoChangeHandler = (event) => {
    event.preventDefault();

    if(usernameRef.current.value.length < 3){
      alert('3글자 이상')
    }
    
    const revisedInformation = {
      revisedUsername: usernameRef.current.value,
      revisedPassword: passwordRef.current.value,
      revisedVerifyPassword: passwordVerifyRef.current.value,
      revisedPhone: phoneRef.current.value,
      revisedAddress: addressRef.current.value,
      revisedInterest : userInterest,
    };
    // revisedInformation으로 DB 업데이트

    props.propFunction(revisedInformation)

    setUserName('')
    setUserPW('')
    setUserVPW('')
    setUserPhone('')
    setUserAddress('')
    setUserInterest('')
    
  };

  return(
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card info-card">
          <div className="card-body">

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 info-title">회원정보</h6>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >
              <h2 className="info-title-big">회원정보 수정</h2>
            </div>

            <form onSubmit={infoChangeHandler} className='form'>
              <div className="info-box">
                
                <div className="info-flex">
                  <label className="info-detail" htmlFor="val-username">닉네임<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="val-username" name="val-username" placeholder="3글자 이상의 사용자명을 입력하세요." ref={usernameRef} value={userName} onChange={()=>setUserName(usernameRef.current.value)} />
                </div>
                <div className="info-flex">
                  <label className="info-detail" htmlFor="val-password">비밀번호<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="val-password" name="val-password" placeholder="6글자 이상의 비밀번호를 입력하세요." ref={passwordRef} value={userPW} onChange={()=>setUserPW(passwordRef.current.value)}/>
                </div>
                <div className="info-flex">
                  <label className="info-detail" htmlFor="val-confirm-password">비밀번호 확인<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="val-confirm-password" name="val-username" placeholder="비밀번호를 다시 한 번 입력하세요." ref={passwordVerifyRef} value={userVPW} onChange={()=>setUserVPW(passwordVerifyRef.current.value)}/>
                </div>
                <div className="info-flex">
                  <label className="info-detail" htmlFor="val-phonenumber">핸드폰 번호<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="val-phonenumber" name="val-phonenumber" placeholder="- 없이 숫자만 입력하세요." ref={phoneRef} value={userPhone} onChange={()=>setUserPhone(phoneRef.current.value)}/>
                </div>
                <div className="info-flex">
                  <label className="info-detail" htmlFor="val-address">메일<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="val-address" name="val-address" placeholder="주소를 입력하세요." ref={addressRef} value={userAddress} onChange={()=>setUserAddress(addressRef.current.value)}/>
                </div>
                <div className="info-flex">
                  <label className="info-detail detail-check">관심물품 (복수 선택 가능)</label>

                  <ul style={{marginTop:'10px', paddingTop:'5px'}}>
                    {categories.map((cate) => (
                      <li style={{display:"inline-block", marginRight:'20px'}}>
                        <input type="checkbox" key={cate.num} value={cate.cate} id="val-interest" className='checkbox' checked = {userInterest.includes(cate.cate)} onChange={(e)=>changeHandler(cate.cate, e.target.checked)} />
                        <label htmlFor="val-interest">{cate.cate}</label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="info-flex-center" style={{paddingTop:'25px'}}>
                  <input type="submit" value="수정하기" />
                </div>
                
              </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default InfoChange;