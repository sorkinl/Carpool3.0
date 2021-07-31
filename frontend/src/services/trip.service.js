import axios from "axios";
import { v4 as uuid } from "uuid";
// import authHeader from "./auth-header";

const createTrip = (payload) => {
    return axios.post("api/trip/create", {
        // headers: authHeader(), 
        ...payload
      });
};

const findAround = (payload) => {
    return axios.post("api/trip/findAround", { 
        // headers: authHeader(), 
        ...payload 
    });
};

export default {
    createTrip,
    findAround
}