import { Link } from 'react-router-dom';
function ListItems(props) {
    return (  
    <>
    <Link to={`/inviter/${props._id}`} className="inviter_cell">
                            <div className="img_container">
                                <img src={props.businessImage} alt='inviter_img'></img>
                            </div>
                            <div className="title_container">
                                <h4>{props.businessName }</h4>
                                <span>Slot Available</span>
                            </div>                   
     </Link>
    </>);
}

export default ListItems;