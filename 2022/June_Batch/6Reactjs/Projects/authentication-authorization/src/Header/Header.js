import './Header.css';
import { Link,NavLink } from 'react-router-dom';

const Header = (props) => {
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"><Link to="">Newton School</Link></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a className="nav-link"><Link to="">Home</Link></a> */}
            <NavLink to="" className="nav-link">Home</NavLink>
          </li>
        </ul>
        {!props.getLoginStatus &&  <form className="form-inline my-2 my-lg-0">
          <button style={{ marginRight: '15px' }} className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/">Login</Link></button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/register">Register</Link></button>
        </form>}
        {props.getLoginStatus &&  <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/">Logout</Link></button>
        </form>}
       
      </div>
    </nav>
  </div>)
}
export default Header;