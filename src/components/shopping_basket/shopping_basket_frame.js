import './shopping_basket.css';
const SB_Frame = (props) => {
  return(
    <div className="top-area">
        <div className="row align-items-center">
                {props.children}
        </div>
    </div>
  )
};

export default SB_Frame;