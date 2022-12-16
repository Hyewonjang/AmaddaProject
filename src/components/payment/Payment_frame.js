const Payment_Frame = (props) => {
  return(
    <div className="row justify-content-center">
        <div className="col-lg-8">
            <div className="card" style={{margin:'5% 0% 20% 0%'}}>
              {props.children}
            </div>
        </div>
    </div>
  )
};

export default Payment_Frame;