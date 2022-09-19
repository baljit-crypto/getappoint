import { Link } from "react-router-dom";
import LoginCtrl from "../utils/login_ctrl";
import Dropdown_btn from "../components/Dropdown";
function Navbar() {
  LoginCtrl.loginRequired();
  const user = LoginCtrl.getUser();
  return (
    <>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">
            Appointment App
          </Link>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="btn">
              {user ? (
                <Dropdown_btn />
              ) : (
                <Link to="/Login" className="nav-link">
                  Get Started
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
