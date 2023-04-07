import "./sidebar.css"
import {LineStyle, PermIdentity, Timeline, Group, LocalShipping, AddLocation, MailOutline, DynamicFeed, ChatBubbleOutline, SettingsApplications, AccountCircle} from "@material-ui/icons"
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
               
                <li className="sidebarListItem">
                   <LineStyle />
                   <Link to="/">Home</Link>
                </li>
                
                
                <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon"/>
                    <Link to="/users">Users</Link>
                </li>
                <li className="sidebarListItem">
                    <Group  className="sidebarIcon"/>
                    <Link to="/drivers">Drivers</Link>
                </li>
                <li className="sidebarListItem">
                    <LocalShipping  className="sidebarIcon"/>
                    <Link to="/vehicles">Vehicles</Link>
                </li>
                <li className="sidebarListItem">
                    <AddLocation  className="sidebarIcon"/>
                    <Link to="/map">maps</Link>
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Profil</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SettingsApplications className="sidebarIcon" />
              Settings
            </li>
            <li className="sidebarListItem">
              <AccountCircle className="sidebarIcon" />
              Profil
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
