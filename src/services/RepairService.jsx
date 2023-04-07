import axios from 'axios';

const REPAIR_BASE_REST_API_URL = 'http://localhost:8080/api/v1/repair';

class RepairService{

    getAllRepairs(){
        return axios.get(REPAIR_BASE_REST_API_URL)
    }
   createRepair(repair){
    return axios.post(REPAIR_BASE_REST_API_URL, repair)
   }
   
}
export default new RepairService();