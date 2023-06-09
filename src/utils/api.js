import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const getAllUsers = () => {
  return axios.get("users");
}

const getAllTodos = () => {
  return axios.get("todos");
}

const getAlltPosts = () => {
  return axios.get("posts");
}

export {getAllUsers, getAllTodos, getAlltPosts};