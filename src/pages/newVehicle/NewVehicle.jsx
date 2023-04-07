import React, {useState, useEffect} from 'react'
import {Link,  useParams, useNavigate } from 'react-router-dom';
import VehicleService from '../../services/VehicleService'
import './newVehicle.css'

const NewVehicle = () => {
   
    const [type, setType] = useState('')
    const [model, setModel] = useState('')
    const [make, setMake] = useState('')
    const [available, setAvailable] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    
     const saveOrUpdateVehicle = (e) => {
        e.preventDefault();

        const vehicle = {type, model, make, available}
        
        if(id){ 
            VehicleService.updateVehicle(id, vehicle).then((response) => {
        

            navigate('/vehicles');
        }).catch(error => {
            console.log(error)
        })}
        else{
        VehicleService.createVehicle(vehicle).then((response) => {
            console.log(response.data)

            navigate('/vehicles');
        }).catch(error => {
            console.log(error)
        })
     }}
     useEffect(() => {
        VehicleService.getVehicleById(id).then((response) => {
            setType(response.data.type)
            setModel(response.data.model)
            setMake(response.data.make)
            setAvailable(response.data.available)
            
        }).catch(error => {
            console.log(error)
        })
     }, [])

     const title = () => {
        

        if(id){
            return <h2 className='text-center'>Update Vehicle</h2>
        }
        else{
            return <h2 className='text-center'>Add Vehicle</h2>
        }
     }


   
    return (
        <div className='newVehicle'>
           
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                        title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Type :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter  type"
                                        name = "type"
                                        className = "form-control"
                                        value = {type}
                                        onChange = {(e) => setType(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Model :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter model"
                                        name = "model"
                                        className = "model"
                                        value = {model}
                                        onChange = {(e) => setModel(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Make :</label>
                                    <input
                                        type = "make"
                                        placeholder = "Enter make"
                                        name = "make"
                                        className = "form-control"
                                        value = {make}
                                        onChange = {(e) => setMake(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Available :</label>
                                    <input
                                        type = "txt"
                                        placeholder = "Enter available"
                                        name = "available"
                                        className = "form-control"
                                        value = {available}
                                        onChange = {(e) => setAvailable(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateVehicle(e) }> Submit </button>
                                <Link to="/vehicles" className="btn btn-danger"> Cancel </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>

           

        </div>
    )


}
export default NewVehicle
