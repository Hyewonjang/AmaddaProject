import './Footer.css';

const Footer = () => {
  return(
    <footer className="footer">
        
        <div className="footer-middle">
            <div className="container">
                <div className="bottom-inner">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                           
                            <div className="single-footer f-contact">
                                <h3>고객센터</h3>
                                <div className="phone">경기도 00시 00로 00(상세주소)</div>
                                <ul>
                                    <li><span>Tel: </span>0000-0000</li>
                                    <li><span>운영시간: </span> (주중)9.00 am - 8.00 pm / (주말)10.00 am - 6.00 pm</li>
                                </ul>
                                <div className="mail">
                                    <a href="">business_test@gmail.com</a>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer our-app">
                                <h3>모바일 앱 설치</h3>
                                <ul className="app-btn">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-apple"></i>
                                            <span className="small-title">Download on the</span>
                                            <span className="big-title">App Store</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-play-store"></i>
                                            <span className="small-title">Download on the</span>
                                            <span className="big-title">Google Play</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>연락처</h3>
                                <ul>
                                    <li><span>Tel: </span>0000-0000</li>
                                    <li><span>Fax: </span>00-000-0000</li>
                                    <li><span>Mail: </span>business_test@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="container">
                <div className="inner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                        </div>
                        <div className="col-lg-4 col-12">
                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className="socila">
                                <li>
                                    <span>소셜 : </span>
                                </li>
                                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="lni lni-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </footer>
  )
};

export default Footer;