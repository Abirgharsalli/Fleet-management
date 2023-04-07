import axios from 'axios';

const MAP_BASE_REST_API_URL = 'http://localhost:8080/api/v1/location';

class MapService{

    getAllLocation(){
        return axios.get(MAP_BASE_REST_API_URL)
    }
   createLocation(location){
    return axios.post(MAP_BASE_REST_API_URL, location)
   }
}
export default new MapService();