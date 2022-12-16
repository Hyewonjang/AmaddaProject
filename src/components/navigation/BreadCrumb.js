import './BreadCrumb.css';

const BreadCrumb = (props) => {
  return(
    <div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default BreadCrumb;