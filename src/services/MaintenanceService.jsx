import axios from 'axios';

const MAINTENANCE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/maintenance';

class MaintenanceService{

    getAllMaintenances(){
        return axios.get(MAINTENANCE_BASE_REST_API_URL)
    }
   createMaintenance(maintenance){
    return axios.post(MAINTENANCE_BASE_REST_API_URL, maintenance)
   }
   
}
export default new MaintenanceService();