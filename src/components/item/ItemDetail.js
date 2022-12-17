import './ItemDetail.css';
import ItemInquiry from './ItemInquiry';

const ItemDetail = (props) => {
  return(
    <div className="container">
        <div className="product-details-info">
            <div className="single-block">
                <div className="row">
                 {props.children}
                </div>
            </div>
        </div>
    </div>
  )
};

export default ItemDetail;