import LoginCtrl from "../utils/login_ctrl";
import { Link } from "react-router-dom";
import SelectDropdown from "../components/SelectDropdown";
function Homepage() {
  const user = LoginCtrl.getUser();
  return (
    <>
      <div className="home_container">
        <div className="banner_container">
          <h1>Appointment App</h1>
          <h3>Scheduling that makes your work effortless</h3>
          <div className="btn">
            {user ? <SelectDropdown /> : <Link to="/Login">Get Started</Link>}
          </div>
        </div>
        <div className="content_container">
          <div className="content_title">
            <h1>The all-in-one point of sale for booking, payment and more.</h1>
            <h6>We handle the admin while you do more of what you love.</h6>
          </div>
          <div className="content_grid">
            <div className="content_grid_row">
              <div className="content_row_cell">
                <div className="content_row_cell_title">
                  <h4>Simplify scheduling</h4>
                  <p>
                    Manage your availability from the app, let customers book
                    online and send reminders.
                  </p>
                </div>
                <Link to="/features">See top features</Link>
                <img
                  src="https://images.pexels.com/photos/7214600/pexels-photo-7214600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="mobile img"
                />
              </div>
              <div className="content_row_cell">
                <div className="content_row_cell_title">
                  <h4>Simplify scheduling</h4>
                  <p>
                    Manage your availability from the app, let customers book
                    online and send reminders.
                  </p>
                </div>
                <Link to="/features">See top features</Link>
                <img
                  src="https://images.pexels.com/photos/7214600/pexels-photo-7214600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="mobile img"
                />
              </div>
            </div>
            <div className="content_grid_row">
              <div className="content_row_cell">
                <div className="content_row_cell_title">
                  <h4>Simplify scheduling</h4>
                  <p>
                    Manage your availability from the app, let customers book
                    online and send reminders.
                  </p>
                </div>
                <Link to="/features">See top features</Link>
                <img
                  src="https://images.pexels.com/photos/7214600/pexels-photo-7214600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="mobile img"
                />
              </div>
              <div className="content_row_cell">
                <div className="content_row_cell_title">
                  <h4>Simplify scheduling</h4>
                  <p>
                    Manage your availability from the app, let customers book
                    online and send reminders.
                  </p>
                </div>
                <Link to="/features">See top features</Link>
                <img
                  src="https://images.pexels.com/photos/7214600/pexels-photo-7214600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="mobile img"
                />
              </div>
            </div>
          </div>
          <div className="content_title">
            <h1>Made to match your craft.</h1>
            <h4>
              Select a business type to find out how Square Appointments could
              work for you.
            </h4>
          </div>
          <div className="content_slider_container">
            {/* <div className="slider_cell">
              <img src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
