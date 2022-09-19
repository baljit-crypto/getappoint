import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SelectDropdown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Get Appointment">
      <Dropdown.Item href="/GiveMode">Give Appointment</Dropdown.Item>
      <Dropdown.Item href="/GetPage">Get Appointment</Dropdown.Item>
    </DropdownButton>
  );
}

export default SelectDropdown;
