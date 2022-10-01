import { button } from "react-bootstrap";
import { useState } from "react";
import api from "../utils/api";
import { inviterRoute } from "../utils/ApiRoutes";
import { BsPersonFill} from 'react-icons/bs';
function GiveMode() {
  const [username, setUsername] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessImagePreview, setBusinessImagePreview] = useState("");
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [businessNameValidation, setBusinessNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [fileError, setFileError] = useState(false);

  const onChangeUsername = (event) => {
    setUsernameValidation(event.target.checkValidity());
    setUsername(event.target.value);
  };

  const onChangeBusinessName = (event) => {
    setBusinessNameValidation(event.target.checkValidity());
    setBusinessName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmailValidation(event.target.checkValidity());
    setEmail(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhoneValidation(event.target.checkValidity());
    setPhone(event.target.value);
  };



  const onChangeImage = (event) => {
    setFileError(false)
    const selected = event.target.files[0];
    const ALLOWED_TYPES = ["image/png","image/jpeg","image/jpg"];
    if(selected && ALLOWED_TYPES.includes(selected.type)){
        let reader = new FileReader();
        reader.onloadend = () => {
            setBusinessImagePreview(reader.result);
        }
        reader.readAsDataURL(selected);
    }else{
      setFileError(true);
    }
  };

  const validationForm = () =>
    usernameValidation &&
    businessNameValidation &&
    emailValidation &&
    phoneValidation;

  const submitForm = () => {
    api
      .post(inviterRoute, {
        username: username,
        businessName: businessName,
        email: email,
        phone: phone,
        businessImage: businessImagePreview,
      })
      .then((data) => {
        if (data.error) {
          return;
        }
        console.log(data);
      });
  };

  
  return (
    <>
      <div className="give_container">
        <div className="title_section">
          <h2>Just few more details</h2>
          <hr />
        </div>
        <form>
            <div className="img_wrap">
            <div className="img_background">
              <div className="businessImagePreview"
              style={{background: businessImagePreview ? `url("${businessImagePreview}") no-repeat center/cover` : "#ffffff"}}>
              {!businessImagePreview && (
                <>
                <label htmlFor="fileUpload" className="customFileUpload">
                <BsPersonFill size='100%' color='#848949'/>
                </label>
                 <input type='file' id="fileUpload" onChange={onChangeImage}/>
                 {/* <span>(jpeg, jpg, png)</span> */}
                </>
              )}
              </div>
              </div>
              {fileError && <p className="fileErrorMsg">File not supported</p>}
              {businessImagePreview && (<button onClick={() => setBusinessImagePreview(null)} className="image_button">Remove image</button>)}
              </div>
            <div className="form-wrap">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => onChangeUsername(event)}
            />
            <input
              type="text"
              placeholder="Business name"
              value={businessName}
              required= "true"
              onChange={(event) => onChangeBusinessName(event)}
            />
          
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => onChangeEmail(event)}
            />
            <input
              type="phone"
              placeholder="Phone number"
              value={phone}
              onChange={(event) => onChangePhone(event)}
            />
          
            <button
              type="submit"
              onClick={submitForm}
              disabled={!validationForm()}
            >
              Add Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GiveMode;
