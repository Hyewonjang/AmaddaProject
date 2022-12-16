import './Payment.css';
import { useState } from 'react';

const Payment_cardcom = (props) => {
    const [checkedInputs, setCheckedInputs] = useState([]);

    const checkOnlyOne = (checked, id) => {

        if (checked) {
            setCheckedInputs([id]);
          } else {
            // 체크 해제
            setCheckedInputs(checkedInputs.filter((el) => el !== id));
          }
    }

    return(
        <div className="form-group row" style={{marginBottom:'20px'}}>
            <label className="col-lg-4 col-form-label" htmlFor="val-interest">카드사 선택 <span
                    className="text-danger">*</span>
            </label>
            <div className="col-lg-8">
                <div className="basic-form">
                    {/* <form> */}

                        <div className="form-group">

                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input" value="국민" onClick={(e)=>checkOnlyOne(e.currentTarget.checked, 0)} checked={checkedInputs.includes(0) ? true : false}/>국민
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input" value="BC" onClick={(e)=>checkOnlyOne(e.currentTarget.checked, 1)} checked={checkedInputs.includes(1) ? true : false}/>BC
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input"
                                        value="" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,2)} checked={checkedInputs.includes(2) ? true : false}/>신한</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input" value="현대" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,3)} checked={checkedInputs.includes(3) ? true : false}/>현대
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input" value="삼성" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,4)} checked={checkedInputs.includes(4) ? true : false}/>삼성
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input" value="롯데" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,5)} checked={checkedInputs.includes(5) ? true : false}/>롯데
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input"
                                        value="하나" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,6)} checked={checkedInputs.includes(6) ? true : false}/>하나</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input"
                                        value="농협" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,7)} checked={checkedInputs.includes(7) ? true : false}/>농협</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input"
                                        value="우리" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,8)} checked={checkedInputs.includes(8) ? true : false}/>우리</label>
                            </div>


                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input name='bank' type="checkbox" className="form-check-input" value="" onClick={(e)=>checkOnlyOne(e.currentTarget.checked,9)} checked={checkedInputs.includes(9) ? true : false}/>기타
                                </label>
                            </div>



                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>

    )
}

export default Payment_cardcom;