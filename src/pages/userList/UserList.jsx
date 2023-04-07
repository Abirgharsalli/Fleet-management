import React , {useEffect, useState} from 'react';
import UserService from '../../services/UserService';
import './userList.css';
import {Link} from 'react-router-dom'


const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
        
    }, [])
    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteUser = (userId) => {
        UserService.deleteUser(userId).then((response) => {
           getAllUsers();
        }).catch(error =>{
            console.log(error);
        })
    }
    

  return (
    <div className='userList'>
        <h2 className='text-center'>List Users</h2>
        <Link to='/add-user' className='btn btn-primary mb-2'>Add User</Link>
        <table className='table table-bordered table-striped'>
            <thead >
                <th>  Id</th>
                <th>  Name</th>
                <th>  Email</th>
                <th>  Address</th>
                <th>  Delivery Number</th>
                <th>  Delivery Date</th>
                <th>  Phone</th>
                <th>  Action</th>
            </thead>
            <tbody>
                {
                    users.map(
                        user => 
                        <tr key= {user.id}>
                            <td> { user.id}</td>
                            <td> { user.name}</td>
                            <td> { user.email}</td>
                            <td> { user.address}</td>
                            <td> { user.delivery_Number}</td>
                            <td> { user.delivery_Date}</td>
                            <td> { user.phone}</td>
                            <td className='button'>
                                <Link className='btn btn-info' to={`/edit-user/${user.id}`}>Update</Link>
                                <Link className='btn btn-info' to={`/view-user/${user.id}`}>View</Link>
                                <button className='btn btn-danger' onClick= {() => deleteUser(user.id)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
      
    </div>
  )
}
export default UserList
