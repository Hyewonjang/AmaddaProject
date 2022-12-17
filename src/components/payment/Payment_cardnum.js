const Payment_cardnum = (props) => {


    return(
        <div className="form-group row" style={{marginBottom:'20px'}}>
            <label className="col-lg-4 col-form-label" for="val-cardnumber">카드번호: <span
                    className="text-danger">*</span>
            </label>
            <div className="col-lg-8">
                <input type="text" className="form-control" id="val-cardnumber" name="val-cardnumber"
                    placeholder="카드번호를 입력하세요."/>
            </div>
        </div>

    )
}

export default Payment_cardnum;