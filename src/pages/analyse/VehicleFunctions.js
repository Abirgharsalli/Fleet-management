import axios from 'axios';

const VEHICLE_API_BASE_URL = "http://localhost/80";

class VehicleFunctions {


    get_dash1() {
        return axios
            .get(VEHICLE_API_BASE_URL + '/dash1')
            .catch(err => {

                alert("please repeat ! ");
                console.log(err)

            })
    }


    get_Gender() {
        return axios
            .get(VEHICLE_API_BASE_URL + '/piechartG')
            .catch(err => {

                alert("please repeat ! ");
                console.log(err)

            })
    }
    get_Product_Line() {
        return axios
            .get(VEHICLE_API_BASE_URL + '/piechartP')
            .catch(err => {

                alert("please repeat ! ");
                console.log(err)

            })
    }
}
export default new VehicleFunctions()