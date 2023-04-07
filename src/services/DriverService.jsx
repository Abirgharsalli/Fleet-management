import axios from 'axios';

const DRIVER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/drivers';

class DriverService{

    getAllDrivers(){
        return axios.get(DRIVER_BASE_REST_API_URL)
    }
   createDriver(driver){
    return axios.post(DRIVER_BASE_REST_API_URL, driver)
   }
   getDriverById(driverId){
    return axios.get(DRIVER_BASE_REST_API_URL + '/' + driverId);
   }
   updateDriver(driverId, driver){
    return axios.put(DRIVER_BASE_REST_API_URL + '/' + driverId, driver);
   }
   deleteDriver(driverId){
    return axios.delete(DRIVER_BASE_REST_API_URL + '/' + driverId);
   }
}
export default new DriverService();