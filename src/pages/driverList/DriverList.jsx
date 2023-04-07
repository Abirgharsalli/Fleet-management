import React , {useEffect, useState} from 'react';
import DriverService from '../../services/DriverService';
import './driverList.css';
import {Link} from 'react-router-dom'


const DriverList = () => {

    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        getAllDrivers();
        
    }, [])
    const getAllDrivers = () => {
        DriverService.getAllDrivers().then((response) => {
            setDrivers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteDriver = (driverId) => {
        DriverService.deleteDriver(driverId).then((response) => {
           getAllDrivers();
        }).catch(error =>{
            console.log(error);
        })
    }
    

  return (
    <div className='driverList'>
        <h2 className='text-center'>List Drivers</h2>
        <Link to='/add-driver' className='btn btn-primary mb-2'>Add Driver</Link>
        <table className='table table-bordered table-striped'>
            <thead >
                <th>  Id</th>
                <th>  Name</th>
                <th>  Email</th>
                <th>  Address</th>
                <th>  Driving license type</th>
                <th>  Phone</th>
                <th>  Action</th>
            </thead>
            <tbody>
                {
                    drivers.map(
                        driver => 
                        <tr key= {driver.id}>
                            <td> { driver.id}</td>
                            <td> { driver.name}</td>
                            <td> { driver.email}</td>
                            <td> { driver.address}</td>
                            <td> { driver.driving_License_Type}</td>
                            <td> { driver.available}</td>
                            <td> { driver.phone}</td>
                            <td className='button'>
                                <Link className='btn btn-info' to={`/edit-driver/${driver.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick= {() => deleteDriver(driver.id)} style={{marginLeft:"10px"}}>Delete</button>
                                <Link className='btn btn-info' to={`/view-driver/${driver.id}`}>View</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
      
    </div>
  )
}
export default DriverList
