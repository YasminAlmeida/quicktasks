import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/"
});

export const api = {
  
  getTasks: async () => {
    let response = await axiosInstance.get("/tasks");
    return response.data;
  },
  getUsers: async () => {
    let response = await axiosInstance.get("/users");
    return response.data;
  }
}
