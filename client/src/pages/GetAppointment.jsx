import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { inviterRoute } from "../utils/ApiRoutes";
import ListItems from '../components/ListItems';
function GetPage() {
        const [inviter, setInviter] = useState([]);   

        useEffect(() => {
                     fetch(inviterRoute)
                    .then((res) => res.json())
                    .then((data) => {
                        setInviter(data);
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