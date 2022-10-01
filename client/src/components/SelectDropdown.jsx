import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SelectDropdown() {
  return (
    <DropdownButton id="dropdown-basic-button" className="selectDropdown" title="Get Appointment" >
      <Dropdown.Item href="/givepage">Give Appointment</Dropdown.Item>
      <Dropdown.Item href="/getpage">Get Appointment</Dropdown.Item>
    </DropdownButton>
  );
}

export default SelectDropdown;
