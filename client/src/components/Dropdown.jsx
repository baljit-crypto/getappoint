import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsPersonCircle } from "react-icons/bs";
import LoginCtrl from "../utils/login_ctrl";
function Dropdown_btn() {
  const signout = () => {
    LoginCtrl.signout();
  };
  const handleEvent = (e) => {
    if (e === "1") {
      signout();
      window.location.href = "/";
    }
  };
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={
        <span>
          <BsPersonCircle />
        </span>
      }
      onSelect={handleEvent}
    >
      <Dropdown.Item eventKey="1">Sign Out</Dropdown.Item>
    </DropdownButton>
  );
}

export default Dropdown_btn;
