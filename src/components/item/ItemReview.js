import './singleProduct.css'
import '../../assets/css/LineIcons.3.0.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/glightbox.min.css'
import review_rating from '../../assets/images/product-details/rating.PNG';
import './ItemReview.css'

const ItemReview = (props) => {
  return(
    <div id='review' className="product-details-info">
        <div className="single-block">
            <div className="row">
                <div className="col-lg-4 col-12">
                    <ul id='review_stars' className="info-body custom-responsive-margin">
                        <h4>구매후기</h4>
                        <h5 style={{marginBottom: "10px", fontWeight: "400"}}><span style={{color:"red", fontWeight:"bold"}}>{props.total_rate}</span> ({props.rater_num})</h5>
                        <li className="stars" style={{color:"orange"}}>
                            <span style={{margin : "0px 10px", color: "gray"}}>5점 - {props.stars5_num}</span>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                        </li>
                        <li className="stars" style={{color:"orange"}}>
                            <span style={{margin : "0px 10px", color: "gray"}}>4점 - {props.stars4_num}</span>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star"></i>
                        </li>
                        <li className="stars" style={{color:"orange"}}>
                            <span style={{margin : "0px 10px", color: "gray"}}>3점 - {props.stars3_num}</span>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                        </li>
                        <li className="stars" style={{color:"orange"}}>
                            <span style={{margin : "0px 10px", color: "gray"}}>2점 - {props.stars2_num}</span>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                        </li>
                        <li className="stars" style={{color:"orange"}}>
                            <span style={{margin : "0px 10px", color: "gray"}}>1점 - {props.stars1_num}</span>
                            <i className="lni lni-star-filled" style={{marginLeft:"2px"}}></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                        </li>
                        <li className="stars" style={{color:"orange"}}>
                            <span style={{margin : "0px 10px", color: "grey"}}>0점 - {props.stars0_num}</span>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                            <i className="lni lni-star"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="latest_review">
                        <h5 style={{fontWeight:"500"}}>최신 리뷰</h5>
                        <hr/>
                        <div className='single-review' style={{border:"1px solid gray", backgroundColor:"none", paddingTop: "5px", marginBottom: "20px", borderRadius: "10px"}}>
                            <div>
                                <img src={review_rating} style={{height:"20px",paddingBottom:"2px", paddingLeft: "3px"}}/>
                                <span> | </span> 
                                <span style={{fontSize: "13px"}}> user1_id </span> 
                                <span> | </span> 
                                <span style={{fontSize: "13px"}}> 2020.02.01 </span>
                            </div>
                            <hr style={{margin:"5px", width:"98%"}}/>
                            <div style={{margin:"12px"}}>
                                {props.Review}
                                    It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here', making it look like 
                                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
                                    their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                                    on purpose (injected humour and the like).
                            </div>
                        </div>
                        <div className='single-review' style={{border:'1px solid gray', backgroundColor:'none', paddingTop: '5px', marginBottom: '20px', borderRadius: '10px'}}>
                            <div>
                                <img src={review_rating} style={{height:"20px", paddingBottom:"2px", paddingLeft: "3px"}}/>
                                <span> | </span> 
                                <span style={{fontSize: "13px"}}> user2_id </span> 
                                <span> | </span> 
                                <span style={{fontSize: "13px"}}> 2021.01.21 </span>
                            </div>
                            <hr style={{margin:"5px", width:"98%"}}/>
                            <div style={{margin:"12px"}}>
                                {props.review}
                                    It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here', making it look like 
                                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
                                    their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                                    on purpose (injected humour and the like).
                            </div>
                        </div>
                        <button className="review-more">더보기</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
};

ItemReview.defaultProps = {
    total_rate : 5,
    rater_num : 2,
    stars5_num : 2,
    stars4_num : 0,
    stars3_num : 0,
    stars2_num : 0,
    stars1_num : 0,
    stars0_num : 0,
}


export default ItemReview;