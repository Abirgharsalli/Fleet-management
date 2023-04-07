import React, {useState, useEffect} from 'react'
import {Link,  useParams, useNavigate } from 'react-router-dom';
import DriverService from '../../services/DriverService'
import './newDriver.css'

const NewDriver = () => {
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [driving_License_Type, setDriving_License_Type] = useState('')
    const [available, setAvailable] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    
     const saveOrUpdateDriver = (e) => {
        e.preventDefault();

        const driver = {name, email, address, driving_License_Type,available, phone}
        
        if(id){ 
            DriverService.updateUser(id, driver).then((response) => {
        

            navigate('/drivers');
        }).catch(error => {
            console.log(error)
        })}
        else{
        DriverService.createDriver(driver).then((response) => {
            console.log(response.data)

            navigate('/users');
        }).catch(error => {
            console.log(error)
        })
     }}
     useEffect(() => {
        DriverService.getDriverById(id).then((response) => {
            setName(response.data.name)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setDriving_License_Type(response.data.driving_License_Type)
            setAvailable(response.data.available)
            setPhone(response.data.phone)
        }).catch(error => {
            console.log(error)
        })
     }, [])

     const title = () => {
        

        if(id){
            return <h2 className='text-center'>Update Driver</h2>
        }
        else{
            return <h2 className='text-center'>Add Driver</h2>
        }
     }


   
    return (
        <div className='newDriver'>
           
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                        title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter  name"
                                        name = "Name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter email"
                                        name = "email"
                                        className = "email"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "address"
                                        placeholder = "Enter address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Driving license type :</label>
                                    <input
                                        type = "driving_license"
                                        placeholder = "Enter driving license type"
                                        name = "driving_License_Tye"
                                        className = "form-control"
                                        value = {driving_License_Type}
                                        onChange = {(e) => setDriving_License_Type(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Available :</label>
                                    <input
                                        type = "available"
                                        placeholder = "Enter available"
                                        name = "available"
                                        className = "form-control"
                                        value = {available}
                                        onChange = {(e) => setAvailable(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Phone :</label>
                                    <input
                                        type = "phone"
                                        placeholder = "Enter phone"
                                        name = "phone"
                                        className = "form-control"
                                        value = {phone}
                                        onChange = {(e) => setPhone(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDriver(e) }> Submit </button>
                                <Link to="/drivers" className="btn btn-danger"> Cancel </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>

           

        </div>
    )


}
export default NewDriver
