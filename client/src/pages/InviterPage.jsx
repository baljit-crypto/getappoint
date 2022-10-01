import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import LoginCtrl from '../utils/login_ctrl';


import "react-datepicker/dist/react-datepicker.css";
import { inviterRoute } from '../utils/ApiRoutes';

function InviterPage() {
    const user = LoginCtrl.getUser();

    const [startDate,setStartDate] = useState(new Date());
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');   
    const [usernameValidation, setUsernameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [phoneValidation, setPhoneValidation] = useState(false);
    const [inviter, setInviter] = useState([]);   



    const onChangeUsername = (event) => {
        setUsernameValidation(event.target.checkValidity());
        setUsername(event.target.value);
      };
    const onChangeEmail = (event) => {
        setEmailValidation(event.target.checkValidity());
        setEmail(event.target.value);
      };
    
      const onChangePhone = (event) => {
        setPhoneValidation(event.target.checkValidity());
        setPhone(event.target.value);
      };

      const validationForm = () =>
      usernameValidation &&
      emailValidation &&
      phoneValidation;

      const submitForm = () => {

      }
    const { id } = useParams();
    useEffect(() => {
       fetch(`${inviterRoute}/${id}`)
       .then((res) => res.json())
       .then((data) => {
            setInviter(data);
       })
    },[])
    return ( <>
            <div className="inviter-container">
                <div className="inviter-title-container">
                        <div className="inviter-img-container">
                            <img src={inviter.businessImage}></img>
                        </div>
                        <div className="titles">
                        <h2>{inviter.businessName}</h2>
                        <h5>The Inovative lab </h5>
                        <p>Owner: {inviter.username}</p>
                        <p>Email: {inviter.email}</p>
                        <p>Phone: {inviter.phone}</p>
                        </div>
                </div>
                <div className="inviter-form-container">
                 <input type="text"
                        placeholder='Username'
                        value={user.username}
                        onChange={(event) => onChangeUsername(event)}/> 
                    <input type="email"
                        placeholder='Email'
                        value={user.email}
                        onChange={(event) => onChangeEmail(event)}/> 
                   <input type="Phone"
                        placeholder='Phone'
                        value={phone}
                        onChange={(event) => onChangePhone(event)}/> 

                          
                <DatePicker selected={startDate} showTimeSelect onChange={(date) => {
            return setStartDate(date);
                }}/>
                <button
              type="submit"
              onClick={submitForm}
              disabled={!validationForm()}
            >
              Get Appointment
            </button>
                </div>
         
        </div>
    </> );
}

export default InviterPage;