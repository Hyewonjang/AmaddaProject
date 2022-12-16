import "./Payment.css"

const Payment_phnum_authen = (props) => {


    return(
        <div className="form-group row" style={{marginBottom:'20px'}}>
            <label className="col-lg-4 col-form-label" for="val-phonenumber">핸드폰번호: <span
                    className="text-danger">*</span>
            </label>
            <div className="col-lg-8">
                <input type="text" className="form-control" id="val-phonenumber" name="val-phonenumber"
                    placeholder="ex) 000-0000-0000"/>
                <div  style={{float:'left'}}>
                    <button className="btn btn-dark mb-2 payment-btn"
                        style={{borderColor: 'transparent', 
                        marginTop:'5px', width: '70px', height:'30px', fontSize: '11px'}}>인증하기</button>
                </div>
            </div>
        </div>

    )
}

export default Payment_phnum_authen;