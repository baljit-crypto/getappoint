import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';


import "react-datepicker/dist/react-datepicker.css";
import { inviterRoute } from '../utils/ApiRoutes';

function InviterPage() {
    const [startDate,setStartDate] = useState(new Date());
    const { id } = useParams();
    useEffect(() => {
       fetch(`inviterRoute/:${id}`)
       .then((res) => res.json())
       .then((data) => {
        console.log(data);
       })
    },[])
    return ( <>
            <div className="inviter-container">
                <div className="inviter-title-container">
                        <div className="inviter-img-container">
                            <img src=''></img>
                        </div>
                </div>
                <div className="inviter-form-container">
                <DatePicker selected={startDate} onChange={(date) => {
            return setStartDate(date);
        }}/>
                </div>
         
        </div>
    </> );
}

export default InviterPage;