const Payment_card_exp = (props) => {


    return(
        <div className="form-group row" style={{marginBottom:'20px'}}>
            <label className="col-lg-4 col-form-label" for="val-expiredate">만료일: <span
                    className="text-danger">*</span>
            </label>
            <div className="col-lg-8">
                <input type="text" className="form-control" id="val-expiredate" name="val-expiredate"
                    placeholder="MM/YY"/>
            </div>
        </div>

    )
}

export default Payment_card_exp;