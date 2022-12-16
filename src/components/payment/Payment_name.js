import "./Payment.css"

const Payment_name = (props) => {


    return(
        <div className="form-group row" style={{marginBottom:'20px'}}>
            <label className="col-lg-4 col-form-label" for="val-username">이름:
                <span className="text-danger">*</span>
            </label>
            <div className="col-lg-8">
                <input type="text" className="form-control" id="val-username" name="val-username"
                    placeholder="ex)홍길동"/>
            </div>
        </div>


    )
}

export default Payment_name;