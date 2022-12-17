import './ContentBox.css';

const ContentBox = (props) => {
  return(
    <section className="item-details section">
      <div className="container">
        <div className="top-area">
          <div className="row align-items-center" style={{paddingLeft:'4%'}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContentBox;