import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navi=useNavigate();
  const logOut=()=>{
    localStorage.removeItem("authToken");
    navi("/login");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">Food Delivery Service</Link>
  <Link to="/" className="navbar-brand active fs-2">Home</Link>
  {
    (localStorage.getItem("authToken"))?
    <Link to="/" className="navbar-brand active fs-2">My Orders</Link>
    :""
  }
 
 
  {
    (!localStorage.getItem("authToken"))?
    <div className="d-flex " style={{marginLeft:"65%"}}>
    <Link to="/login" className="btn bg-white text-success  ms-auto">Log In</Link>
  <Link to="/signup" className="btn bg-white text-success mx-1">Sign up</Link>
  </div>
    :
    <div className="d-flex " style={{marginLeft:"60%"}}>
    <div className="btn bg-white text-success "  style={{marginRight:"3%"}}>My Cart</div>
    <div className="btn bg-white text-danger " onClick={logOut}>Log out</div>
  </div>
  }

 
</nav>
    </>
  );
};

export default Navbar;
