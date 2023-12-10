
const Card = (props) => {
  

  return (
    <>
      <div className="card mt-3 card-container" key={props.id}>

        <img
          className="card-img-top"
          src={props.imgs}
          alt="Card image cap"
          style={{ width: '300px', height: '200px' }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="container w-100">
            <select className="m-2 h-100 rounded">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
           
          

            {props.Category === "Pizza" ? (
            <select className="m-2 h-100 rounded">
              <option value="half">{props.options[0].regular}</option>
              <option value="full">{props.options[0].medium}</option>
              <option value="full">{props.options[0].large}</option>
            </select>
          ) : (
            <select className="m-2 h-100 rounded">
              <option value="half">{props.options[0].half}</option>
              <option value="full">{props.options[0].full}</option>
            </select>
          )}
           
           
            <div className="d-inline h-70 fs-3">Total Price</div>
          </div>
       
       <hr />
       <button className="btn">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
