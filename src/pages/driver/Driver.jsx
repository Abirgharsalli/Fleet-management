import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./driver.css";
  
  export default function User() {
    return (
      <div className="driver">
        <div className="driverTitleContainer">
          <h1 className="driverTitle">View Driver</h1>
          <Link to="/add-driver">
            <button className="driverAddButton">Create</button>
          </Link>
        </div>
        <div className="driverContainer">
          <div className="driverShow">
            <div className="driverShowTop">
            <img
                src="https://th.bing.com/th/id/R.84d0a123132712ccf26f076783e25626?rik=3pOfL1YcUornwQ&pid=ImgRaw&r=0"
                alt=""
                className="driverShowImg"
              />
             
              <div className="driverShowTopTitle">
                <span className="driverShowUsername">Ahmed soultani</span>
                
              </div>
            </div>
            <div className="driverShowBottom">
              <span className="driverShowTitle">Account Details</span>
              <div className="driverShowInfo">
              
                <PermIdentity className="driverShowIcon" />
                <span className="driverShowInfoTitle">Ahmed soultani</span>
                
              </div>
              <div>
                <span className="driverShowInfoTitle">Id : 1 </span>
                </div>
              <div className="driverShowInfo">
              <span className="driverShowTitle">Driving license type</span>
              <span className="driverShowInfoTitle">A</span> 
              </div>
              <div>
              <span className="driverShowTitle">Available</span>
                <span className="driverShowInfoTitle"> True</span> 
               
              </div>
              
              <span className="driverShowTitle">Contact Details</span>
              <div className="driverShowInfo">
                <PhoneAndroid className="driverShowIcon" />
                <span className="driverShowInfoTitle">92645783</span>
              </div>
              <div className="driverShowInfo">
                <MailOutline className="driverShowIcon" />
                <span className="driverShowInfoTitle">ahmedSoultani@gmail.com</span>
              </div>
              <div className="driverShowInfo">
                <LocationSearching className="driverShowIcon" />
                <span className="driverShowInfoTitle">Sfax</span>
              </div>
            </div>
          </div>

           </div>
           </div>
    );
  }
  