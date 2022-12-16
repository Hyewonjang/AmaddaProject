import './Rw_review.css'

const RWR_Frame = (props) => {
  return(
    <section class="review-list section">
        <div class="container">
            <div class="top-area">
                <div class="row align-items-center">
                    {props.children}
                </div>
            </div>
        </div>
    </section>
  )
};

export default RWR_Frame;