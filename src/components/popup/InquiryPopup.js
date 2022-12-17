import './InquiryPopup.css';

const InquiryPopup = (props) => {

    const inquiry_Popup_invisible = ()=>{
        props.propFunction(0)
    }

    return(
        <div id="inquiry_Popup" style={{display:''}}>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">상품 문의 남기기</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>inquiry_Popup_invisible()}></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inquiry-email">이메일</label>
                                <input class="form-control" type="email" id="inquiry-email" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="review-rating">문의유형</label>
                                <select class="form-control" id="inquiry-type">
                                    <option>상품(성능/사이즈)</option>
                                    <option>배송</option>
                                    <option>교환</option>
                                    <option>반품/취소/환불</option>
                                    <option>기타</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="inquiry-subject">제목</label>
                                <input class="form-control" type="text" id="inquiry-subject" required />
                            </div>
                        </div>
                        
                    </div>
                    <div class="form-group">
                        <label for="review-message">질문</label>
                        <textarea class="form-control" id="review-message" rows="8" required></textarea>
                    </div>
                </div>
                <div class="modal-footer button">
                    <button type="button" class="btn" onClick={()=>inquiry_Popup_invisible()}>제출</button>
                </div>
            </div>
        </div>
    )
  };
  
  export default InquiryPopup;
