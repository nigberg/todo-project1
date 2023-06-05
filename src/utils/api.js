import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const getAllUsers = () => {
    return axios.get("users");
}

const getTodosByUserId = (userId) => {

}

const getPostsByUserId = (userId) => {
    
}

export {getAllUsers, getTodosByUserId, getPostsByUserId};