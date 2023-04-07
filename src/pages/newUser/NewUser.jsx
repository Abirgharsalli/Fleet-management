import React, {useState, useEffect} from 'react'
import {Link,  useParams, useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService'
import './newUser.css'

const NewUser = () => {
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [delivery_Number, setDelivery_Number] = useState('')
    const [delivery_Date, setDelivery_Date] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    
     const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = {name, email, address, delivery_Number, delivery_Date, phone}
        
        if(id){ 
            UserService.updateUser(id, user).then((response) => {
        

            navigate('/users');
        }).catch(error => {
            console.log(error)
        })}
        else{
        UserService.createUser(user).then((response) => {
            console.log(response.data)

            navigate('/users');
        }).catch(error => {
            console.log(error)
        })
     }}
     useEffect(() => {
        UserService.getUserById(id).then((response) => {
            setName(response.data.name)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setDelivery_Number(response.data.delivery_Number)
            setDelivery_Date(response.data.delivery_Date)
            setPhone(response.data.phone)
        }).catch(error => {
            console.log(error)
        })
     }, [])

     const title = () => {
        

        if(id){
            return <h2 className='text-center'>Update User</h2>
        }
        else{
            return <h2 className='text-center'>Add User</h2>
        }
     }


   
    return (
        <div className='newUser'>
           
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
                                    <label className = "form-label"> Delivery Number :</label>
                                    <input
                                        type = "delivery_number"
                                        placeholder = "Enter delivery number"
                                        name = "delivery_number"
                                        className = "form-control"
                                        value = {delivery_Number}
                                        onChange = {(e) => setDelivery_Number(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Delivery Date :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter delivery date"
                                        name = "delivery_date"
                                        className = "form-control"
                                        value = {delivery_Date}
                                        onChange = {(e) => setDelivery_Date(e.target.value)}
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

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateUser(e) }> Submit </button>
                                <Link to="/users" className="btn btn-danger"> Cancel </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>

           

        </div>
    )


}
export default NewUser
