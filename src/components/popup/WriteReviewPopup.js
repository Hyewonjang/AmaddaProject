import './WriteReviewPopup.css'

const WriteReviewPopup = (props) => {

    const write_review_popUp_invisible = ()=>{
        props.propFunction(0)
    }

  return(
    <div id="write-review" style={{display: ''}}>
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">구매후기 남기기</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>write_review_popUp_invisible()}></button>
        </div>
        <div className="modal-body">
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label for="review-rating">구매후기</label>
                        <select className="form-control" id="review-rating">
                            <option>5점</option>
                            <option>4점</option>
                            <option>3점</option>
                            <option>2점</option>
                            <option>1점</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label for="review-message">후기</label>
                <textarea className="form-control" id="review-message" rows="8" required></textarea>
            </div>
        </div>
        <div className="modal-footer button">
            <button type="button" className="btn" onClick={()=>write_review_popUp_invisible()}>제출</button>
        </div>
    </div>
  )
};

export default WriteReviewPopup;