import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {Link} from "react-router-dom"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Fleet management</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to='/login'>
          <img src="https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?pid=ImgDet&rs=1" alt="" className="topAvatar" />
          </Link>
        </div>
        
      </div>
    </div>
  );
}
