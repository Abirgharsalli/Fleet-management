import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import Maps from "./pages/maps/Maps"
import Vehicle from './pages/vehicles/Vehicle'
import VehicleAnalyse from "./pages/analyse/VehicleAnalyse";
import Routing from './pages/mapbox/Routing';
import DriverList from "./pages/driverList/DriverList";
import NewDriver from "./pages/newDriver/NewDriver";
import User from "./pages/user/User";
import NewVehicle from "./pages/newVehicle/NewVehicle";
import Driver from "./pages/driver/Driver";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Login from './pages/login_component'
import SignUp from "./pages/signup_component";
import SidebarElement from './SidebarElement';
import UserDetails from "./UserDetails";




function App() {

  return (
    <Router>
      
    <Topbar />
    
    <div className="container">
    
      <Routes>

      <Route exact path="/login" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/userDetails" element={<UserDetails />} />
              
      <Route element={<SidebarElement />} >
      <Route path="/" element={<Home />} /> 
      <Route path="/users" element={<UserList />} />
      <Route path="/drivers" element={<DriverList />} />
      <Route path="/add-user" element={<NewUser />} />
      <Route path="/view-user/:id" element={<User />} />
      <Route path="/view-driver/:id" element={<Driver />} />
      
      <Route path="/add-driver" element={<NewDriver />} />
      <Route path="/add-vehicle" element={<NewVehicle />} />
      <Route path="/edit-user/:id" element={<NewUser />} />
      <Route path="/map" element={<Maps />} />
      <Route path='/directions' element={<Routing />} />
      <Route path="/vehicles"  element={<Vehicle />} />
      <Route path='/Analyse' element={ <VehicleAnalyse />} />
      </Route>
      </Routes>
      
    </div>
    <Footer />
  </Router>
    
   
  
       
    
  );
}

export default App;
