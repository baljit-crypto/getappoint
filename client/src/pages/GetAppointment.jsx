import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { inviterRoute } from "../utils/ApiRoutes";
import ListItems from '../components/ListItems';
import axios from 'axios';
function GetPage() {
        const [inviter, setInviter] = useState([]);   

        useEffect(() => {
                    console.log(inviterRoute)
                     fetch(inviterRoute)
                    .then((res) => res.json())
                    .then((data) => {
                        setInviter(data);
                    }).catch((err) => {  
                            console.log(err.message);
                    })

                    
                    return() => {
                        console.log("unmounted");
                    }
        },[]);

    return ( <>
        <div className="get_container">
        <div className="title_section">
          <h2>Choose Your Inviter</h2>
          <hr />
        </div>
            <div className="inviter_container">
                { inviter.map((data,idx) => (
                <ListItems
                key={idx}
                {...data}/>
                 
)) }
            </div>
        </div>
    </>    
     );
}
export default GetPage;