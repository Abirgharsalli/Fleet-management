import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './vehicle.css'
import VehicleService from '../../services/VehicleService';
import MaintenanceService from '../../services/MaintenanceService';
import RepairService from '../../services/RepairService';

const Vehicle = () => {
    const [vehicles, setVehicles] = useState([])
    const [maintenances, setMaintenance] = useState([])
    const [repairs, setRepair] = useState([])
      
    useEffect(() => {
        getAllVehicles();
    }, [])
     
    const getAllVehicles = () =>{
        VehicleService.getAllVehicles().then((response) => {
            setVehicles(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteVehicle = (vehicleId) => {
        VehicleService.deleteVehicle(vehicleId).then((response) => {
           getAllVehicles();
        }).catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        getAllMaintenances();
    }, [])
     
    const getAllMaintenances = () =>{
        MaintenanceService.getAllMaintenances().then((response) => {
            setMaintenance(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteMaintenance = (maintenanceId) => {
        MaintenanceService.deleteMaintenance(maintenanceId).then((response) => {
           getAllMaintenances();
        }).catch(error =>{
            console.log(error);
        })
    }
    useEffect(() => {
        getAllRepairs();
    }, [])
     
    const getAllRepairs = () =>{
        RepairService.getAllRepairs().then((response) => {
            setRepair(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteRepair = (repairId) => {
        RepairService.deleteRepair(repairId).then((response) => {
           getAllRepairs();
        }).catch(error =>{
            console.log(error);
        })
    }


  return (
    <div className='vehicleList'>
        <h2 className='text-center'>List Vehicles</h2>
      
        <Link to='/add-vehicle' className='btn btn-primary mb-2'> Add Vehicle</Link>
        
        
        <table className='table table-bordered table-striped'>
            <thead>
                <th> Id </th>
                <th> Type</th>
                <th> Model</th>
                <th> Make</th>
                <th> Available</th>
                <th> Action</th>
            </thead>
            <tbody>
                {
                    vehicles.map(
                        vehicle => 
                        <tr key= {vehicle.id}>
                            <td> { vehicle.id}</td>
                            <td> { vehicle.type}</td>
                            <td> { vehicle.model}</td>
                            <td> { vehicle.make}</td>
                            <td> {vehicle.available}</td>
                            <td className='button'>
                               
                                <Link className='btn btn-info' to={`/edit-vehicle/${vehicle.id}`}> Update</Link>
                                <button className='btn btn-danger' onClick= {() => deleteVehicle(vehicle.id)} style={{marginLeft:"10px"}}> Delete</button>
                                <Link className='btn btn-info' to={`/view-vehicle/${vehicle.id}`}> View</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link className='btn btn-primary mb-2'  to={'/Analyse'}> Analyse</Link>

        <div className='EntretienList'>
        <h2 className='text-center'>List Maintenance</h2>
      
      <Link to='/add-vehicle' className='btn btn-primary mb-2'> Add Maintenance</Link>
      
      <table className='table table-bordered table-striped'>
            <thead>
                <th> Id </th>
                <th> name</th>
                <th> date</th>
                <th> Model Vehicle</th>
                <th> Action</th>
            </thead>
            <tbody>
                {
                    maintenances.map(
                        maintenance => 
                        <tr key= {maintenance.id}>
                            <td> { maintenance.id}</td>
                            <td> { maintenance.name}</td>
                            <td> { maintenance.date}</td>
                            <td> {maintenance.model_Vehicle}</td>
                            <td className='button'>
                               
                                <Link className='btn btn-info' to={`/edit-maintenance/${maintenance.id}`}> Update</Link>
                                <button className='btn btn-danger' onClick= {() => deleteMaintenance(maintenance.id)} style={{marginLeft:"10px"}}> Delete</button>
                              
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        

        </div>
        <div className='EntretienList'>
        <h2 className='text-center'>List Repairs</h2>
      
      <Link to='/add-vehicle' className='btn btn-primary mb-2'> Add Repairs</Link>
      
      <table className='table table-bordered table-striped'>
            <thead>
                <th> Id </th>
                <th> Model Vehicle</th>
                <th> date</th>
                <th> Id Maintenance</th>
                <th> Action</th>
            </thead>
            <tbody>
                {
                    repairs.map(
                        repair => 
                        <tr key= { repair.id}>
                            <td> { repair.id}</td>
                            <td> { repair.model_Vehicle}</td>
                            <td> { repair.date}</td>
                            <td> { repair.id_maintenance}</td>
                            <td className='button'>
                               
                                <Link className='btn btn-info' to={`/edit-repair/${repair.id}`}> Update</Link>
                                <button className='btn btn-danger' onClick= {() => deleteRepair(repair.id)} style={{marginLeft:"10px"}}> Delete</button>
                              
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link className='btn btn-primary mb-2'  to={'/AnalyseMaintenance'}> Analyse Maintenance</Link>
        </div>
    </div>

    
  )
}
export default Vehicle