import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./user.css";
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">View User</h1>
          <Link to="/add-user">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Asma</span>
                
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
              
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">asma </span>
                
              </div>
              <div>
                <span className="userShowInfoTitle">Id : 2 </span>
                </div>
              <div className="userShowInfo">
              <span className="userShowTitle">Delivery Id and Date</span>
              </div>
              <div>
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">date: 2022-08-26</span> 
               
              </div>
              <div>
              <span className="userShowInfoTitle">Id: 5</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">25879643</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">asma@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Sousse</span>
              </div>
            </div>
          </div>

           </div>
           </div>
    );
  }
  